import React from 'react';
import { Bookmark, BookmarkCheck, ExternalLink, Sparkles, ArrowUpRight } from 'lucide-react';
import { GameProject, TONE_STYLES } from '../data/projects';

interface ProjectCardProps {
  project: GameProject;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  onSelect: (project: GameProject) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isSaved,
  onToggleSave,
  onSelect,
}) => {
  const tone = TONE_STYLES[project.tone];

  return (
    <article
      onClick={() => onSelect(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(project);
        }
      }}
      className="cream-card group relative flex h-full cursor-pointer flex-col rounded-[28px] p-6 text-left focus:outline-none focus:ring-2 focus:ring-[#D97757]/50"
    >
      {/* Top row: Emblem + format + save */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3.5">
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border text-2xl transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3 ${tone.bg} ${tone.border}`}
          >
            <span aria-hidden="true">{project.emojiMark.startsWith('http') ? (
  <img
    src={project.emojiMark}
    alt={project.name}
    className="h-full w-full rounded-xl object-cover"
  />
) : (
  project.emojiMark
)}
</span>
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-display text-[1.2rem] font-semibold leading-tight text-[#352A24]">
                {project.name}
              </h3>
              {project.featured && (
                <span className="inline-flex items-center gap-1 rounded-full bg-[#FBEBD5] px-2.5 py-0.5 text-[11px] font-semibold text-[#A46B20]">
                  <Sparkles className="h-3 w-3" />
                  House Pick
                </span>
              )}
            </div>
            <p className="mt-0.5 text-xs font-medium text-[#877467]">{project.gameTitle}</p>
          </div>
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleSave(project.id);
          }}
          title={isSaved ? 'Remove from My Tray' : 'Save to My Tray'}
          aria-label={isSaved ? `Remove ${project.name} from My Tray` : `Save ${project.name} to My Tray`}
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all active:scale-90 cursor-pointer ${
            isSaved
              ? 'border-[#E6BBA8] bg-[#FCECE4] text-[#C86443]'
              : 'border-[#ECE2D3] bg-[#FAF5EC] text-[#8E7B6E] hover:border-[#D9C7B0] hover:text-[#4D3D33]'
          }`}
        >
          {isSaved ? <BookmarkCheck className="h-4 w-4" /> : <Bookmark className="h-4 w-4" />}
        </button>
      </div>

      {/* Warm tagline */}
      <p className="mt-4 text-[14.5px] leading-relaxed text-[#57473E]">{project.tagline}</p>

      {/* Soft metadata chips */}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        {project.formats.map((fmt) => (
          <span
            key={fmt}
            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11.5px] font-semibold ${
              fmt === '.AppImage'
                ? 'border-[#EED9AE] bg-[#FBF1DC] text-[#9A6A1D]'
                : fmt === '.Flatpak'
                  ? 'border-[#CEE0CC] bg-[#E9F2E8] text-[#45704E]'
                  : 'border-[#E4D8C7] bg-[#F6EFE4] text-[#6B5A4E]'
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                fmt === '.AppImage'
                  ? 'bg-[#DFA446]'
                  : fmt === '.Flatpak'
                    ? 'bg-[#6C9A76]'
                    : 'bg-[#9E8878]'
              }`}
            />
            {fmt}
          </span>
        ))}
        <span className="rounded-full bg-[#F5EEE2] px-2.5 py-1 text-[11.5px] font-medium text-[#746256]">
          {project.language}
        </span>
      </div>

      {/* Footer row */}
      <div className="mt-auto pt-5">
        <div className="flex items-center justify-between border-t border-[#F0E7DA] pt-3.5 text-xs">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 font-medium text-[#7A685B] transition-colors hover:text-[#C86443]"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            <span className="max-w-[165px] truncate">{project.repoSlug}</span>
          </a>

          <span className="inline-flex items-center gap-1 font-semibold text-[#C86443] transition-transform duration-200 group-hover:translate-x-0.5">
            Peek recipe
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </article>
  );
};
