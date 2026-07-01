import { ChevronDown, Headphones, Pause, Play } from "lucide-react";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { formatAudioDuration } from "@/lib/use-cases/audio-brief";
import { cn } from "@/lib/utils";

type GuideAudioBriefPlayerProps = {
  title: string;
  transcript: string;
  paragraphs?: string[];
  src: string;
  durationSeconds: number;
  label: string;
  tier?: "editorial" | "synopsis";
  synopsisKind?: "chapter" | "playbook";
  fullReadMinutes?: number;
  variant?: "default" | "onDark";
  className?: string;
};

const PLAYBACK_RATES = [1, 1.25, 1.5] as const;

function speakTranscript(
  transcript: string,
  rate: number,
  onEnd: () => void,
  onBoundary?: (charIndex: number) => void,
): SpeechSynthesisUtterance | null {
  if (typeof window === "undefined" || !window.speechSynthesis) return null;

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(transcript);
  utterance.rate = rate;
  utterance.lang = "en-US";
  utterance.onend = onEnd;
  if (onBoundary) {
    utterance.onboundary = (event) => {
      if (event.name === "word") onBoundary(event.charIndex);
    };
  }
  window.speechSynthesis.speak(utterance);
  return utterance;
}

export function GuideAudioBriefPlayer({
  title,
  transcript,
  paragraphs,
  src,
  durationSeconds,
  label,
  tier = "synopsis",
  synopsisKind = "chapter",
  fullReadMinutes,
  variant = "default",
  className,
}: GuideAudioBriefPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const transcriptId = useId();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [measuredDuration, setMeasuredDuration] = useState(durationSeconds);
  const [playbackRate, setPlaybackRate] = useState<(typeof PLAYBACK_RATES)[number]>(1);
  const [transcriptOpen, setTranscriptOpen] = useState(false);
  const [useSpeechFallback, setUseSpeechFallback] = useState(false);
  const [speechProgress, setSpeechProgress] = useState(0);
  const speechStartRef = useRef<number>(0);
  const speechTimerRef = useRef<number | null>(null);

  const isDark = variant === "onDark";
  const displayDuration = measuredDuration || durationSeconds;
  const transcriptBlocks = paragraphs?.length ? paragraphs : [transcript];
  const isEditorial = tier === "editorial";
  const synopsisLabel =
    synopsisKind === "playbook"
      ? isEditorial
        ? "Editorial guide synopsis"
        : "Guide synopsis"
      : isEditorial
        ? "Editorial chapter synopsis"
        : "Chapter synopsis";

  const stopSpeech = useCallback(() => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    if (speechTimerRef.current !== null) {
      window.clearInterval(speechTimerRef.current);
      speechTimerRef.current = null;
    }
    setSpeechProgress(0);
  }, []);

  useEffect(() => {
    return () => stopSpeech();
  }, [stopSpeech]);

  const togglePlay = async () => {
    if (useSpeechFallback) {
      if (isPlaying) {
        stopSpeech();
        setIsPlaying(false);
        return;
      }
      speechStartRef.current = Date.now();
      setIsPlaying(true);
      speechTimerRef.current = window.setInterval(() => {
        const elapsed = (Date.now() - speechStartRef.current) / 1000;
        setSpeechProgress(Math.min(elapsed, displayDuration));
        setCurrentTime(Math.min(elapsed, displayDuration));
      }, 250);
      speakTranscript(transcript, playbackRate, () => {
        stopSpeech();
        setIsPlaying(false);
        setCurrentTime(displayDuration);
        setSpeechProgress(displayDuration);
      });
      return;
    }

    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setUseSpeechFallback(true);
      setIsPlaying(true);
      speechStartRef.current = Date.now();
      speechTimerRef.current = window.setInterval(() => {
        const elapsed = (Date.now() - speechStartRef.current) / 1000;
        setSpeechProgress(Math.min(elapsed, displayDuration));
        setCurrentTime(Math.min(elapsed, displayDuration));
      }, 250);
      speakTranscript(transcript, playbackRate, () => {
        stopSpeech();
        setIsPlaying(false);
        setCurrentTime(displayDuration);
      });
    }
  };

  const handleSeek = (value: number) => {
    if (useSpeechFallback) return;
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = value;
    setCurrentTime(value);
  };

  const cycleRate = () => {
    const idx = PLAYBACK_RATES.indexOf(playbackRate);
    const next = PLAYBACK_RATES[(idx + 1) % PLAYBACK_RATES.length];
    setPlaybackRate(next);
    if (!useSpeechFallback && audioRef.current) {
      audioRef.current.playbackRate = next;
    }
  };

  const progress = displayDuration ? (currentTime / displayDuration) * 100 : 0;

  return (
    <section
      className={cn(
        "rounded-xl border p-4 sm:p-5",
        isDark
          ? "guide-audio-brief-on-hero border-white/20 bg-white/10 backdrop-blur-sm"
          : "border-purple/15 bg-purple-light/30 dark:bg-purple-light/5",
        className,
      )}
      aria-label={`Audio brief: ${title}`}
    >
      <audio
        ref={audioRef}
        src={src}
        preload="metadata"
        onLoadedMetadata={(event) => {
          const audio = event.currentTarget;
          if (Number.isFinite(audio.duration) && audio.duration > 0) {
            setMeasuredDuration(Math.round(audio.duration));
          }
        }}
        onTimeUpdate={(event) => {
          setCurrentTime(event.currentTarget.currentTime);
        }}
        onEnded={() => {
          setIsPlaying(false);
          setCurrentTime(displayDuration);
        }}
        onError={() => {
          if (!useSpeechFallback) setUseSpeechFallback(true);
        }}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      <div className="flex items-start gap-3">
        <div
          className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
            isDark ? "bg-white/10 text-white" : "bg-purple/10 text-purple-dark dark:text-purple",
          )}
        >
          <Headphones size={18} aria-hidden />
        </div>

        <div className="min-w-0 flex-1">
          <p
            className={cn(
              "text-[11px] font-semibold uppercase tracking-wider",
              isDark ? "text-white/70" : "text-purple-dark dark:text-purple",
            )}
          >
            {synopsisLabel} · {label}
          </p>
          <p
            className={cn(
              "mt-1 text-[14px] font-medium leading-snug",
              isDark ? "text-white" : "text-foreground",
            )}
          >
            {title}
          </p>
          <p
            className={cn(
              "mt-1 text-[12px] leading-relaxed",
              isDark ? "text-white/55" : "text-muted-foreground",
            )}
          >
            {fullReadMinutes
              ? synopsisKind === "playbook"
                ? `Hear the story first — then read the ~${fullReadMinutes} min guide for diagrams, workflows, and artifacts`
                : `Hear the story first — then read the ~${fullReadMinutes} min chapter for diagrams, workflows, and artifacts`
              : "Hear the story first — the full article has diagrams, artifacts, and workflows"}
            {useSpeechFallback ? " · Browser voice (audio file loading unavailable)" : null}
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <button
          type="button"
          onClick={togglePlay}
          className={cn(
            "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-transform",
            isDark
              ? "guide-audio-brief-play bg-white text-[#1a1530] shadow-[0_2px_14px_rgba(0,0,0,0.28)] hover:scale-105 active:scale-95"
              : "bg-foreground text-background hover:opacity-90",
          )}
          aria-label={isPlaying ? "Pause audio brief" : "Play audio brief"}
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
        </button>

        <div className="min-w-0 flex-1">
          <input
            type="range"
            min={0}
            max={displayDuration || 1}
            step={0.1}
            value={useSpeechFallback ? speechProgress : currentTime}
            onChange={(event) => handleSeek(Number(event.target.value))}
            disabled={useSpeechFallback}
            className={cn(
              "h-1.5 w-full cursor-pointer appearance-none rounded-full",
              isDark ? "accent-white" : "accent-purple",
              useSpeechFallback && "cursor-not-allowed opacity-60",
            )}
            aria-label="Audio progress"
            style={{
              background: `linear-gradient(to right, ${
                isDark ? "rgba(255,255,255,0.9)" : "var(--purple)"
              } ${progress}%, ${isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)"} ${progress}%)`,
            }}
          />
          <div
            className={cn(
              "mt-1 flex justify-between text-[11px] tabular-nums",
              isDark ? "text-white/50" : "text-muted-foreground",
            )}
          >
            <span>{formatAudioDuration(Math.floor(currentTime))}</span>
            <span>{formatAudioDuration(displayDuration)}</span>
          </div>
        </div>

        <button
          type="button"
          onClick={cycleRate}
          className={cn(
            "shrink-0 rounded-md px-2 py-1 text-[11px] font-medium tabular-nums transition-colors",
            isDark
              ? "text-white/70 hover:bg-white/10 hover:text-white"
              : "text-muted-foreground hover:bg-muted/60 hover:text-foreground",
          )}
          aria-label={`Playback speed ${playbackRate}x`}
        >
          {playbackRate}x
        </button>
      </div>

      <div className="mt-3">
        <button
          type="button"
          onClick={() => setTranscriptOpen((open) => !open)}
          className={cn(
            "inline-flex items-center gap-1.5 text-[12px] font-medium transition-colors",
            isDark
              ? "text-white/65 hover:text-white"
              : "text-muted-foreground hover:text-foreground",
          )}
          aria-expanded={transcriptOpen}
          aria-controls={transcriptId}
        >
          Transcript
          <ChevronDown
            size={14}
            className={cn("transition-transform", transcriptOpen && "rotate-180")}
            aria-hidden
          />
        </button>
        {transcriptOpen ? (
          <div
            id={transcriptId}
            className={cn(
              "mt-2 max-h-56 space-y-3 overflow-y-auto rounded-lg px-3 py-3 text-[13px] leading-relaxed",
              isDark ? "bg-black/20 text-white/75" : "bg-background/60 text-foreground/85",
            )}
          >
            {transcriptBlocks.map((block, index) => (
              <p key={index}>{block}</p>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
