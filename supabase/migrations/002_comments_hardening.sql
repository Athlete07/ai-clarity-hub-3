-- Migration for existing FactorBeam comment tables (run once in Supabase SQL editor)

drop policy if exists "comments_update_upvotes" on comments;
drop policy if exists "comments_insert_all" on comments;

revoke update on comments from anon, authenticated;

drop policy if exists "comments_insert_anon" on comments;
create policy "comments_insert_anon"
  on comments for insert
  to anon, authenticated
  with check (
    char_length(display_name) between 1 and 64
    and char_length(comment_text) between 1 and 4000
    and playbook_slug ~ '^[a-z0-9][a-z0-9:._-]{0,127}$'
    and display_name !~ '[[:cntrl:]]'
    and comment_text !~ '[[:cntrl:]]'
  );

create or replace function increment_comment_upvote(target_id uuid)
returns int
language plpgsql
security definer
set search_path = public
as $$
declare
  new_count int;
begin
  if target_id is null then
    raise exception 'comment id required';
  end if;

  update comments
  set upvotes = upvotes + 1
  where id = target_id
  returning upvotes into new_count;

  if new_count is null then
    raise exception 'comment not found';
  end if;

  return new_count;
end;
$$;

revoke all on function increment_comment_upvote(uuid) from public;
grant execute on function increment_comment_upvote(uuid) to anon, authenticated;

create or replace function comment_counts_by_playbook()
returns table(playbook_slug text, comment_count bigint)
language sql
security definer
set search_path = public
stable
as $$
  select c.playbook_slug, count(*)::bigint
  from comments c
  group by c.playbook_slug;
$$;

revoke all on function comment_counts_by_playbook() from public;
grant execute on function comment_counts_by_playbook() to anon, authenticated;
