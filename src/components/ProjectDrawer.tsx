import { useEffect, useState } from 'react';
import {
  Bookmark,
  BookmarkCheck,
  CheckCircle2,
  ExternalLink,
  Gamepad2,
  Globe,
  Heart,
  Info,
  Lightbulb,
  Sparkles,
  X,
} from 'lucide-react';
import type { GameProject } from '../data/projects';
import { TONE_STYLES } from '../data/projects';
import { CopyPill } from './CopyPill';
import { ModalShell } from './ModalShell';
import { ProjectMark } from './ProjectMark';

interface ProjectDrawerProps {
  project: GameProject | null;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  onClose: () => void;
}

export function ProjectDrawer({ project, isSaved, onToggleSave, onClose }: ProjectDrawerProps) {
  const [activeRecipeIdx, setActiveRecipeIdx] = useState(0);

  useEffect(() => {
    setActiveRecipeIdx(0);
  }, [project?.id]);

  if (!project) return null;

  const tone = TONE_STYLES[project.tone];
  const recipe = project.recipes[activeRecipeIdx] ?? project.recipes[0];

  return (
    <ModalShell
      isOpen={Boolean(project)}
      onClose={onClose}
      label={project.name + ' details'}
      variant="drawer"
    >
      <div className="dialog-panel dialog-panel--drawer">
        <header className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 items-center gap-4">
            <ProjectMark
              project={project}
              className={'project-mark--large ' + tone.bg + ' ' + tone.border}
              iconClassName="h-8 w-8"
            />
            <div className="min-w-0">
              <span className={'inline-flex rounded-full px-3 py-1 text-xs font-semibold ' + tone.badgeBg + ' ' + tone.text}>
                {project.categoryLabel}
              </span>
              <h2 className="font-display mt-2 text-2xl font-semibold text-[#352A24] sm:text-3xl">
                {project.name}
              </h2>
              <p className="text-sm font-medium text-[#7D6A5E]">For {project.gameTitle}</p>
            </div>
          </div>
          <button type="button" onClick={onClose} aria-label="Close project details" className="icon-action">
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </header>

        <div className={'mt-5 rounded-2xl border px-4 py-3 text-sm ' + tone.softBg + ' ' + tone.border}>
          <span className="inline-flex items-center gap-2 font-medium text-[#5A483E]">
            <Heart className={'h-4 w-4 shrink-0 ' + tone.text} aria-hidden="true" />
            {project.vibeNote}
          </span>
        </div>

        <div className="mt-6 space-y-6">
          <section>
            <h3 className="font-display text-base font-semibold text-[#352A24]">About this project</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-[#57473E]">{project.description}</p>
          </section>

          <section className="rounded-2xl border border-[#ECE2D3] bg-[#FBF7F0] p-4">
            <h3 className="font-display flex items-center gap-2 text-sm font-semibold text-[#4A3B32]">
              <Sparkles className="h-4 w-4 text-[#D97757]" aria-hidden="true" />
              How it works
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#645348]">{project.howItWorks}</p>
          </section>

          <section>
            <h3 className="font-display text-base font-semibold text-[#352A24]">Features and highlights</h3>
            <ul className="mt-3 space-y-2.5">
              {project.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-[#57473E]">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#6C9A76]" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-3xl border border-[#EAE0D0] bg-[#FAF4EB] p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-display text-base font-semibold text-[#352A24]">Install options</h3>
              <div className="flex flex-wrap gap-1.5" aria-label="Choose an install option">
                {project.recipes.map((item, index) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => setActiveRecipeIdx(index)}
                    aria-pressed={index === activeRecipeIdx}
                    className={index === activeRecipeIdx
                      ? 'rounded-full bg-[#352A24] px-3 py-1.5 text-xs font-semibold text-[#FFFDF9]'
                      : 'rounded-full border border-[#E6DAC8] bg-[#FFFDF9] px-3 py-1.5 text-xs font-semibold text-[#6A584C] hover:bg-[#F3EADB]'}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {recipe && (
              <div className="mt-4">
                <CopyPill command={recipe.command} label={recipe.label} />
                {recipe.note && (
                  <p className="mt-3 flex items-start gap-2 text-xs leading-relaxed text-[#7A685B]">
                    <Lightbulb className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                    {recipe.note}
                  </p>
                )}
              </div>
            )}
          </section>

          <section className="flex items-start gap-3 rounded-2xl border border-[#EFE3CE] bg-[#FDF8EE] p-4">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#C98E32]" aria-hidden="true" />
            <p className="text-xs leading-relaxed text-[#6E5A46]">
              <strong className="font-semibold text-[#4D3D2F]">Requirements: </strong>
              {project.byocRequirement}
            </p>
          </section>

          <ul className="flex flex-wrap gap-2 text-xs" aria-label="Technical details">
            <li className="rounded-full border border-[#EAE0D0] bg-[#FAF5EC] px-3 py-1.5 font-medium text-[#6B5A4E]">
              {project.language}
            </li>
            <li className="rounded-full border border-[#EAE0D0] bg-[#FAF5EC] px-3 py-1.5 font-medium text-[#6B5A4E]">
              License: {project.license}
            </li>
            {project.steamDeckFriendly && (
              <li className="inline-flex items-center gap-1 rounded-full border border-[#CEE0CC] bg-[#EBF4EA] px-3 py-1.5 font-semibold text-[#477150]">
                <Gamepad2 className="h-3.5 w-3.5" aria-hidden="true" />
                Steam Deck friendly
              </li>
            )}
          </ul>
        </div>

        <footer className="mt-8 flex flex-wrap gap-3 border-t border-[#EFE6D9] pt-5">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-2xl bg-[#D97757] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#C76646]"
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            View source
          </a>
          {project.homepageUrl && (
            <a
              href={project.homepageUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl border border-[#E5D9C7] bg-[#FAF5EC] px-4 py-3 text-sm font-semibold text-[#4E3E34] transition-colors hover:bg-[#F2E4D9]"
            >
              <Globe className="h-4 w-4" aria-hidden="true" />
              Website
            </a>
          )}
          <button
            type="button"
            onClick={() => onToggleSave(project.id)}
            aria-pressed={isSaved}
            className={isSaved
              ? 'inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl border border-[#E7BDA9] bg-[#FCECE4] px-4 py-3 text-sm font-semibold text-[#B85939]'
              : 'inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl border border-[#E5D9C7] bg-[#FFFDF9] px-4 py-3 text-sm font-semibold text-[#56463C] hover:bg-[#FAF5EC]'}
          >
            {isSaved
              ? <BookmarkCheck className="h-4 w-4" aria-hidden="true" />
              : <Bookmark className="h-4 w-4" aria-hidden="true" />}
            {isSaved ? 'Saved' : 'Save project'}
          </button>
        </footer>
      </div>
    </ModalShell>
  );
}
