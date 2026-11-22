import React, { useEffect } from 'react';
import { X, Trash2, Sparkles, UtensilsCrossed, ExternalLink } from 'lucide-react';
import { GameProject, TONE_STYLES } from '../data/projects';
import { CopyPill } from './CopyPill';

interface TrayDrawerProps {
  isOpen: boolean;
  savedProjects: GameProject[];
  onClose: () => void;
  onRemove: (id: string) => void;
  onClearAll: () => void;
  onLoadStarterPack: () => void;
  onSelectProject: (project: GameProject) => void;
}

export const TrayDrawer: React.FC<TrayDrawerProps> = ({
  isOpen,
  savedProjects,
  onClose,
  onRemove,
  onClearAll,
  onLoadStarterPack,
  onSelectProject,
}) => {
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const combinedScript = savedProjects
    .map((p) => {
      const firstRecipe = p.recipes[0];
      return `# --- ${p.name} (${p.gameTitle}) ---\n# Source: ${p.githubUrl}\n${firstRecipe?.command ?? ''}`;
    })
    .join('\n\n');

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-[#352A24]/25 backdrop-blur-[3px]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="My Linux Gaming Tray"
    >
      <div
        className="flex h-full w-full max-w-lg flex-col overflow-y-auto border-l border-[#EAE0D0] bg-[#FFFDF9] p-6 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FBEBD5] px-3 py-0.5 text-xs font-semibold text-[#9F6B20]">
              <UtensilsCrossed className="h-3.5 w-3.5" />
              Personal Tasting Tray
            </span>
            <h2 className="font-display mt-1.5 text-2xl font-semibold text-[#352A24]">
              My Linux Game Tray
            </h2>
            <p className="mt-1 text-sm text-[#7A685B]">
              Bookmark projects from the shelf to build a tidy one-copy setup list.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close tray"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#EAE0D0] bg-[#FBF6EE] text-[#6D5B4F] hover:bg-[#F2E9DB] cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {savedProjects.length === 0 ? (
          <div className="mt-10 flex flex-1 flex-col items-center justify-center rounded-3xl border border-dashed border-[#DFD2BE] bg-[#FBF7F0] p-8 text-center">
            <div className="text-4xl">🧁</div>
            <h3 className="font-display mt-3 text-lg font-semibold text-[#352A24]">
              Your tray is empty!
            </h3>
            <p className="mt-1.5 max-w-xs text-sm text-[#78665A]">
              Tap the little bookmark icon on any project card, or try our cozy starter trio.
            </p>
            <button
              type="button"
              onClick={onLoadStarterPack}
              className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-[#D97757] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#C66545] active:scale-95 cursor-pointer"
            >
              <Sparkles className="h-4 w-4" />
              Load Cozy Starter Pack
            </button>
          </div>
        ) : (
          <div className="mt-6 flex flex-1 flex-col gap-5">
            <div className="flex items-center justify-between text-xs font-medium text-[#806E61]">
              <span>
                {savedProjects.length} {savedProjects.length === 1 ? 'treat' : 'treats'} saved
              </span>
              <button
                type="button"
                onClick={onClearAll}
                className="text-[#B55939] underline-offset-2 hover:underline cursor-pointer"
              >
                Clear tray
              </button>
            </div>

            <div className="space-y-2.5">
              {savedProjects.map((project) => {
                const tone = TONE_STYLES[project.tone];
                return (
                  <div
                    key={project.id}
                    className="flex items-center justify-between gap-3 rounded-2xl border border-[#ECE2D3] bg-[#FBF7F0] p-3.5"
                  >
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        onSelectProject(project);
                      }}
                      className="flex min-w-0 flex-1 items-center gap-3 text-left cursor-pointer"
                    >
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border text-lg ${tone.bg} ${tone.border}`}
                      >
                        {project.emojiMark.startsWith('http') ? (
  <img
    src={project.emojiMark}
    alt={project.name}
    className="h-full w-full rounded-xl object-cover"
  />
) : (
  project.emojiMark
)}

                      </div>
                      <div className="min-w-0">
                        <div className="truncate font-display text-sm font-semibold text-[#352A24]">
                          {project.name}
                        </div>
                        <div className="truncate text-xs text-[#7D6B5F]">
                          {project.primaryFormat} · {project.gameTitle}
                        </div>
                      </div>
                    </button>

                    <div className="flex items-center gap-1.5">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${project.name} on GitHub`}
                        className="flex h-8 w-8 items-center justify-center rounded-xl text-[#7D6B5F] hover:bg-[#EFE6D8] hover:text-[#352A24]"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                      <button
                        type="button"
                        onClick={() => onRemove(project.id)}
                        aria-label={`Remove ${project.name}`}
                        className="flex h-8 w-8 items-center justify-center rounded-xl text-[#9C7667] hover:bg-[#FAE9E2] hover:text-[#B55939] cursor-pointer"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Combined setup recipe */}
            <div className="mt-auto pt-4">
              <h3 className="font-display mb-2 text-sm font-semibold text-[#352A24]">
                Your Combined Setup Snippet
              </h3>
              <CopyPill
                command={combinedScript}
                label="linux-crack-gaming-tray.sh"
              />
              <p className="mt-2 text-xs text-[#867366]">
                Saved right in your browser so you can come back to it after a fresh distro hop.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
