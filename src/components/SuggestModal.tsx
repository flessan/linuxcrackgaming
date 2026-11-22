import { useState, type FormEvent } from 'react';
import { PlusCircle, X } from 'lucide-react';
import type { GameProject, PackageFormat, PastelTone, ProjectCategory } from '../data/projects';
import { ModalShell } from './ModalShell';

interface SuggestModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddProject: (project: GameProject) => void;
}

const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  rewrites: 'Engine rewrite',
  runtimes: 'Launcher or runtime',
  recomp: 'Native recompilation',
  tools: 'Compatibility tool',
};

const CATEGORY_TONES: Record<ProjectCategory, PastelTone> = {
  rewrites: 'peach',
  runtimes: 'matcha',
  recomp: 'berry',
  tools: 'chamomile',
};

function parseGitHubRepo(value: string) {
  const trimmed = value.trim();
  const candidate = trimmed.startsWith('http')
    ? trimmed
    : `https://github.com/${trimmed.replace(/^\/+/, '')}`;

  try {
    const url = new URL(candidate);
    const match = url.pathname.match(/^\/([A-Za-z0-9_.-]+)\/([A-Za-z0-9_.-]+)\/?$/);
    if (url.protocol !== 'https:' || url.hostname.toLowerCase() !== 'github.com' || !match) {
      return null;
    }

    const owner = match[1];
    const repository = match[2].replace(/\.git$/i, '');
    return {
      repoSlug: `${owner}/${repository}`,
      githubUrl: `https://github.com/${owner}/${repository}`,
    };
  } catch {
    return null;
  }
}

export function SuggestModal({ isOpen, onClose, onAddProject }: SuggestModalProps) {
  const [name, setName] = useState('');
  const [gameTitle, setGameTitle] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [tagline, setTagline] = useState('');
  const [language, setLanguage] = useState('');
  const [format, setFormat] = useState<PackageFormat>('Native');
  const [category, setCategory] = useState<ProjectCategory>('rewrites');
  const [error, setError] = useState('');

  const resetForm = () => {
    setName('');
    setGameTitle('');
    setGithubUrl('');
    setTagline('');
    setLanguage('');
    setFormat('Native');
    setCategory('rewrites');
    setError('');
  };

  const handleClose = () => {
    setError('');
    onClose();
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const repository = parseGitHubRepo(githubUrl);
    if (!repository) {
      setError('Enter a valid GitHub repository URL or owner/repository.');
      return;
    }

    const cleanName = name.trim();
    const cleanGame = gameTitle.trim();
    const cleanLanguage = language.trim() || 'Not specified';
    const recipeCommand = format === 'Native'
      ? `git clone ${repository.githubUrl}.git\ncd ${repository.repoSlug.split('/').pop()}`
      : `xdg-open ${repository.githubUrl}/releases`;

    const project: GameProject = {
      id: `custom-${Date.now()}`,
      name: cleanName,
      gameTitle: cleanGame,
      tagline: tagline.trim() || `Community suggestion for ${cleanGame} on Linux.`,
      description: tagline.trim() || 'Added by a community member. Visit the repository and review its README for current platform support, releases and requirements.',
      howItWorks: 'This entry was added locally by a visitor. Its technical details have not been independently verified.',
      category,
      categoryLabel: CATEGORY_LABELS[category],
      tone: CATEGORY_TONES[category],
      language: cleanLanguage,
      license: 'Not verified',
      githubUrl: repository.githubUrl,
      repoSlug: repository.repoSlug,
      formats: [format],
      primaryFormat: format,
      steamDeckFriendly: false,
      byocRequirement: 'Review the project README and license. Some projects require original game files, a store account, or additional dependencies.',
      highlights: [
        'Added to this browser profile by a community member',
        `Category: ${CATEGORY_LABELS[category]}`,
        'Project details should be checked against the upstream repository',
      ],
      recipes: [{
        label: format === 'Native' ? 'Clone source' : 'Open releases',
        format,
        command: recipeCommand,
        note: format === 'Native'
          ? 'Read the upstream build instructions before compiling.'
          : `Check the upstream release page for an actual ${format} package before installing anything.`,
      }],
      vibeNote: 'A community-submitted project.',
      emojiMark: `icon:${category}`,
    };

    onAddProject(project);
    resetForm();
    onClose();
  };

  return (
    <ModalShell isOpen={isOpen} onClose={handleClose} label="Suggest a Linux gaming project" variant="modal">
      <div className="dialog-panel dialog-panel--modal">
        <header className="flex items-start justify-between gap-4">
          <div>
            <span className="inline-flex rounded-full bg-[#E9F2E8] px-3 py-1 text-xs font-semibold text-[#477150]">
              Community catalogue
            </span>
            <h2 className="font-display mt-2 text-2xl font-semibold text-[#352A24]">Suggest a project</h2>
            <p className="mt-1 max-w-md text-sm leading-relaxed text-[#7B695D]">
              Add a GitHub project to your local catalogue. Community entries are not automatically verified.
            </p>
          </div>
          <button type="button" onClick={handleClose} aria-label="Close suggestion form" className="icon-action">
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </header>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="form-label">Project name</span>
              <input required maxLength={70} value={name} onChange={(event) => setName(event.target.value)} placeholder="Example: OpenTTD" className="form-control" />
            </label>
            <label className="block">
              <span className="form-label">Game or software</span>
              <input required maxLength={100} value={gameTitle} onChange={(event) => setGameTitle(event.target.value)} placeholder="Example: Transport Tycoon" className="form-control" />
            </label>
          </div>

          <label className="block">
            <span className="form-label">GitHub repository</span>
            <input
              required
              value={githubUrl}
              onChange={(event) => { setGithubUrl(event.target.value); setError(''); }}
              placeholder="https://github.com/owner/repository"
              autoCapitalize="off"
              autoComplete="url"
              spellCheck={false}
              className="form-control"
            />
          </label>
          {error && <p className="form-error" role="alert">{error}</p>}

          <label className="block">
            <span className="form-label">Short description</span>
            <input maxLength={180} value={tagline} onChange={(event) => setTagline(event.target.value)} placeholder="What makes this project useful?" className="form-control" />
          </label>

          <div className="grid gap-4 sm:grid-cols-3">
            <label className="block">
              <span className="form-label">Category</span>
              <select value={category} onChange={(event) => setCategory(event.target.value as ProjectCategory)} className="form-control">
                <option value="rewrites">Engine rewrite</option>
                <option value="runtimes">Launcher / runtime</option>
                <option value="recomp">Native recompilation</option>
                <option value="tools">Compatibility tool</option>
              </select>
            </label>
            <label className="block">
              <span className="form-label">Package format</span>
              <select value={format} onChange={(event) => setFormat(event.target.value as PackageFormat)} className="form-control">
                <option value="Native">Source / native</option>
                <option value=".Flatpak">Flatpak</option>
                <option value=".AppImage">AppImage</option>
              </select>
            </label>
            <label className="block">
              <span className="form-label">Main language</span>
              <input maxLength={60} value={language} onChange={(event) => setLanguage(event.target.value)} placeholder="Rust, C++, Python..." className="form-control" />
            </label>
          </div>

          <div className="flex flex-wrap items-center justify-end gap-3 border-t border-[#EFE6D9] pt-5">
            <button type="button" onClick={handleClose} className="min-h-11 rounded-xl px-4 text-sm font-semibold text-[#7A685B] hover:bg-[#F4ECE0]">
              Cancel
            </button>
            <button type="submit" className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-[#D97757] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#C66545]">
              <PlusCircle className="h-4 w-4" aria-hidden="true" />
              Add to this browser
            </button>
          </div>
        </form>
      </div>
    </ModalShell>
  );
}
