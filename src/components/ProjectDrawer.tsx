import React, { useEffect, useState } from 'react';
import {
  X,
  ExternalLink,
  Globe,
  Bookmark,
  BookmarkCheck,
  Sparkles,
  CheckCircle2,
  Gamepad2,
  Info,
  Heart,
} from 'lucide-react';
import { GameProject, TONE_STYLES } from '../data/projects';
import { CopyPill } from './CopyPill';

interface ProjectDrawerProps {
  project: GameProject | null;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  onClose: () => void;
}

export const ProjectDrawer: React.FC<ProjectDrawerProps> = ({
  project,
  isSaved,
  onToggleSave,
  onClose,
}) => {
  const [activeRecipeIdx, setActiveRecipeIdx] = useState(0);

  useEffect(() => {
    setActiveRecipeIdx(0);
  }, [project?.id]);

  useEffect(() => {
    if (!project) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const tone = TONE_STYLES[project.tone];
  const currentRecipe = project.recipes[activeRecipeIdx] ?? project.recipes[0];

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-[#352A24]/25 backdrop-blur-[3px] transition-opacity"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} details`}
    >
      <div
        className="relative flex h-full w-full max-w-xl flex-col overflow-y-auto border-l border-[#EAE0D0] bg-[#FFFDF9] p-6 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div
              className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl border text-3xl ${tone.bg} ${tone.border}`}
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
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-0.5 text-xs font-semibold ${tone.badgeBg} ${tone.text}`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${tone.dot}`} />
                {project.categoryLabel}
              </span>
              <h2 className="font-display mt-1 text-2xl font-semibold text-[#352A24] sm:text-3xl">
                {project.name}
              </h2>
              <p className="text-sm font-medium text-[#7D6A5E]">For {project.gameTitle}</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close panel"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#EAE0D0] bg-[#FBF6EE] text-[#6D5B4F] transition-colors hover:bg-[#F2E9DB] hover:text-[#352A24] cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Vibe quote */}
        <div className={`mt-5 rounded-2xl border px-4 py-3 text-sm ${tone.softBg} ${tone.border}`}>
          <span className="inline-flex items-center gap-2 font-medium text-[#5A483E]">
            <Heart className={`h-4 w-4 shrink-0 ${tone.text}`} />
            <span>{project.vibeNote}</span>
          </span>
        </div>

        {/* Main story */}
        <div className="mt-6 space-y-5">
          <div>
            <h3 className="font-display text-base font-semibold text-[#352A24]">
              What makes it special
            </h3>
            <p className="mt-1.5 text-[15px] leading-relaxed text-[#57473E]">
              {project.description}
            </p>
          </div>

          <div className="rounded-2xl border border-[#ECE2D3] bg-[#FBF7F0] p-4">
            <h4 className="font-display flex items-center gap-2 text-sm font-semibold text-[#4A3B32]">
              <Sparkles className="h-4 w-4 text-[#D97757]" />
              How it “cracks” the Linux puzzle
            </h4>
            <p className="mt-1.5 text-sm leading-relaxed text-[#645348]">{project.howItWorks}</p>
          </div>

          {/* Highlights */}
          <div>
            <h3 className="font-display text-base font-semibold text-[#352A24]">
              Sweet enhancements & perks
            </h3>
            <ul className="mt-2.5 space-y-2">
              {project.highlights.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-[#57473E]"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#6C9A76]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cozy Install Recipe */}
          <div className="rounded-3xl border border-[#EAE0D0] bg-[#FAF4EB] p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-display text-base font-semibold text-[#352A24]">
                Cozy Install Recipe
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.recipes.map((recipe, idx) => (
                  <button
                    key={recipe.label}
                    type="button"
                    onClick={() => setActiveRecipeIdx(idx)}
                    className={`rounded-full px-3 py-1 text-xs font-semibold transition-all cursor-pointer ${
                      idx === activeRecipeIdx
                        ? 'bg-[#352A24] text-[#FFFDF9] shadow-sm'
                        : 'bg-[#FFFDF9] text-[#6A584C] border border-[#E6DAC8] hover:bg-[#F3EADB]'
                    }`}
                  >
                    {recipe.label}
                  </button>
                ))}
              </div>
            </div>

            {currentRecipe && (
              <div className="mt-3.5">
                <CopyPill command={currentRecipe.command} />
                {currentRecipe.note && (
                  <p className="mt-2.5 text-xs leading-relaxed text-[#7A685B]">
                    💡 {currentRecipe.note}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* BYOC gentle note */}
          <div className="flex items-start gap-3 rounded-2xl border border-[#EFE3CE] bg-[#FDF8EE] p-4">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#C98E32]" />
            <div className="text-xs leading-relaxed text-[#6E5A46]">
              <strong className="font-semibold text-[#4D3D2F]">Bring Your Own Copy: </strong>
              {project.byocRequirement}
            </div>
          </div>

          {/* Tech chips */}
          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
            <span className="rounded-full border border-[#EAE0D0] bg-[#FAF5EC] px-3 py-1 font-medium text-[#6B5A4E]">
              Built with {project.language}
            </span>
            <span className="rounded-full border border-[#EAE0D0] bg-[#FAF5EC] px-3 py-1 font-medium text-[#6B5A4E]">
              License: {project.license}
            </span>
            {project.steamDeckFriendly && (
              <span className="inline-flex items-center gap-1 rounded-full border border-[#CEE0CC] bg-[#EBF4EA] px-3 py-1 font-semibold text-[#477150]">
                <Gamepad2 className="h-3.5 w-3.5" />
                Steam Deck Friendly
              </span>
            )}
          </div>
        </div>

        {/* Sticky-ish footer actions */}
        <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-[#EFE6D9] pt-5">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#D97757] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#C76646] active:scale-[0.98]"
          >
            <ExternalLink className="h-4 w-4" />
            View on GitHub
          </a>

          {project.homepageUrl && (
            <a
              href={project.homepageUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#E5D9C7] bg-[#FAF5EC] px-4 py-3 text-sm font-semibold text-[#4E3E34] transition-colors hover:bg-[#F2E8D9]"
            >
              <Globe className="h-4 w-4 text-[#7F6C5F]" />
              Website
            </a>
          )}

          <button
            type="button"
            onClick={() => onToggleSave(project.id)}
            className={`inline-flex items-center justify-center gap-2 rounded-2xl border px-4 py-3 text-sm font-semibold transition-all active:scale-[0.98] cursor-pointer ${
              isSaved
                ? 'border-[#E7BDA9] bg-[#FCECE4] text-[#B85939]'
                : 'border-[#E5D9C7] bg-[#FFFDF9] text-[#56463C] hover:bg-[#FAF5EC]'
            }`}
          >
            {isSaved ? (
              <>
                <BookmarkCheck className="h-4 w-4" />
                In My Tray
              </>
            ) : (
              <>
                <Bookmark className="h-4 w-4" />
                Add to Tray
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
