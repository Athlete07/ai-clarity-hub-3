-- FactorBeam use-case playbook comments (Option B — shared across users)
-- Run in Supabase SQL editor, then set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env

create table if not exists comments (
  id uuid primary key default gen_random_uuid(),
  playbook_slug text not null,
  display_name text not null check (char_length(display_name) between 1 and 64),
  comment_text text not null check (char_length(comment_text) between 1 and 4000),
  upvotes int not null default 0 check (upvotes >= 0),
  created_at timestamptz not null default now()
);

create index if not exists idx_comments_playbook_slug on comments (playbook_slug);
create index if not exists idx_comments_created_at on comments (created_at desc);

alter table comments enable row level security;

create policy "comments_select_all"
  on comments for select
  using (true);

create policy "comments_insert_all"
  on comments for insert
  with check (true);

create policy "comments_update_upvotes"
  on comments for update
  using (true)
  with check (true);
