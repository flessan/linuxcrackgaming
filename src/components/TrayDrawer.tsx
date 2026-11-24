import { ExternalLink, Sparkles, Trash2, UtensilsCrossed, Bookmark, X } from 'lucide-react';
import type { GameProject } from '../data/projects';
import { CopyPill } from './CopyPill';
import { ModalShell } from './ModalShell';
import { ProjectMark } from './ProjectMark';

interface TrayDrawerProps {
  isOpen: boolean;
  savedProjects: GameProject[];
  onClose: () => void;
  onRemove: (id: string) => void;
  onClearAll: () => void;
  onLoadStarterPack: () => void;
  onSelectProject: (project: GameProject) => void;
}

export function TrayDrawer({
  isOpen,
  savedProjects,
  onClose,
  onRemove,
  onClearAll,
  onLoadStarterPack,
  onSelectProject,
}: TrayDrawerProps) {
  const combinedScript = savedProjects
    .map((project) => {
      const firstRecipe = project.recipes[0];
      return `# --- ${project.name} (${project.gameTitle}) ---\n# Source: ${project.githubUrl}\n${firstRecipe?.command ?? ''}`;
    })
    .join('\n\n');

  return (
    <ModalShell isOpen={isOpen} onClose={onClose} label="Saved Linux gaming projects" variant="drawer">
      <div className="dialog-panel dialog-panel--drawer">
        <header className="flex items-start justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FBEBD5] px-3 py-1 text-xs font-semibold text-[#9F6B20]">
              <UtensilsCrossed className="h-3.5 w-3.5" aria-hidden="true" />
              Your collection
            </span>
            <h2 className="font-display mt-2 text-2xl font-semibold text-[#352A24]">Saved projects</h2>
            <p className="mt-1 max-w-sm text-sm text-[#7A685B]">
              Keep a shortlist of projects and copy their setup notes from one place.
            </p>
          </div>
          <button type="button" onClick={onClose} aria-label="Close saved projects" className="icon-action">
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </header>

        {savedProjects.length === 0 ? (
          <div className="mt-10 flex flex-1 flex-col items-center justify-center rounded-3xl border border-dashed border-[#DFD2BE] bg-[#FBF7F0] p-8 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#EAE0D0] bg-[#FFFDF9] text-[#A27A62]">
              <Bookmark className="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 className="font-display mt-4 text-lg font-semibold text-[#352A24]">Nothing saved yet</h3>
            <p className="mt-2 max-w-xs text-sm text-[#78665A]">
              Save a project from the catalogue to build your own Linux gaming shortlist.
            </p>
            <button
              type="button"
              onClick={onLoadStarterPack}
              className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-2xl bg-[#D97757] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#C66545]"
            >
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Load starter pack
            </button>
          </div>
        ) : (
          <div className="mt-6 flex flex-1 flex-col gap-5">
            <div className="flex items-center justify-between gap-3 text-xs font-medium text-[#806E61]">
              <span>{savedProjects.length} saved {savedProjects.length === 1 ? 'project' : 'projects'}</span>
              <button
                type="button"
                onClick={onClearAll}
                className="min-h-8 rounded-lg px-2 text-[#B55939] underline-offset-2 hover:underline"
              >
                Clear all
              </button>
            </div>

            <ul className="space-y-2.5">
              {savedProjects.map((project) => (
                <li key={project.id} className="flex items-center justify-between gap-3 rounded-2xl border border-[#ECE2D3] bg-[#FBF7F0] p-3.5">
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onSelectProject(project);
                    }}
                    className="flex min-w-0 flex-1 items-center gap-3 text-left"
                  >
                    <ProjectMark project={project} className="project-mark project-mark--tray" iconClassName="h-5 w-5" />
                    <span className="min-w-0">
                      <span className="block truncate font-display text-sm font-semibold text-[#352A24]">
                        {project.name}
                      </span>
                      <span className="mt-0.5 block truncate text-xs text-[#7D6B5F]">
                        {project.categoryLabel} · {project.gameTitle}
                      </span>
                    </span>
                  </button>

                  <div className="flex shrink-0 items-center gap-1.5">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.name} repository`}
                      className="icon-action icon-action--small"
                    >
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </a>
                    <button
                      type="button"
                      onClick={() => onRemove(project.id)}
                      aria-label={`Remove ${project.name}`}
                      className="icon-action icon-action--small"
                    >
                      <Trash2 className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <section className="mt-auto border-t border-[#EFE6D9] pt-5">
              <h3 className="font-display mb-3 text-sm font-semibold text-[#352A24]">Combined setup notes</h3>
              <CopyPill command={combinedScript} label="linux-gaming-shortlist.sh" />
              <p className="mt-2 text-xs leading-relaxed text-[#867366]">
                This combines the first setup recipe for each saved project. Review the notes before running commands.
              </p>
            </section>
          </div>
        )}
      </div>
    </ModalShell>
  );
}
