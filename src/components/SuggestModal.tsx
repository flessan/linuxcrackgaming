import React, { useState } from 'react';
import { X, PlusCircle, Sparkles } from 'lucide-react';
import { GameProject, PackageFormat, PastelTone, ProjectCategory } from '../data/projects';

interface SuggestModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddProject: (project: GameProject) => void;
}

const EMOJI_CHOICES = ['🎮', '🦊', '🍄', '🚀', '🧸', '🍓', '⚔️', '🎲'];

export const SuggestModal: React.FC<SuggestModalProps> = ({ isOpen, onClose, onAddProject }) => {
  const [name, setName] = useState('');
  const [gameTitle, setGameTitle] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [tagline, setTagline] = useState('');
  const [language, setLanguage] = useState('Rust');
  const [format, setFormat] = useState<PackageFormat>('.AppImage');
  const [category, setCategory] = useState<ProjectCategory>('rewrites');
  const [emoji, setEmoji] = useState('🎮');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !gameTitle.trim() || !githubUrl.trim()) return;

    const cleanUrl = githubUrl.trim().startsWith('http')
      ? githubUrl.trim()
      : `https://github.com/${githubUrl.trim().replace(/^\/+/, '')}`;

    const slugMatch = cleanUrl.match(/github\.com\/([^/]+\/[^/]+)/i);
    const repoSlug = slugMatch ? slugMatch[1].replace(/\.git$/, '') : name.toLowerCase().replace(/\s+/g, '-');

    const tones: PastelTone[] = ['peach', 'matcha', 'honey', 'berry', 'chamomile'];
    const randomTone = tones[Math.floor(Math.random() * tones.length)];

    const categoryLabelMap: Record<ProjectCategory, string> = {
      rewrites: 'Engine Rewrite',
      runtimes: 'Runtime & Wrapper',
      recomp: 'Static Recomp Port',
    };

    const newProject: GameProject = {
      id: `custom-${Date.now()}`,
      name: name.trim(),
      gameTitle: gameTitle.trim(),
      tagline:
        tagline.trim() || `Community-added open-source Linux way to play ${gameTitle.trim()}.`,
      description:
        tagline.trim() ||
        `Pinned by you onto the LinuxCrackGaming shelf! Check out the repository on GitHub for the latest releases, build flags, and community notes.`,
      howItWorks: `Distributed via ${format} and built with ${language.trim() || 'open-source love'} for smooth Linux play.`,
      category,
      categoryLabel: categoryLabelMap[category],
      tone: randomTone,
      language: language.trim() || 'Open Source',
      license: 'GitHub Repo',
      githubUrl: cleanUrl,
      repoSlug,
      formats: [format],
      primaryFormat: format,
      steamDeckFriendly: true,
      byocRequirement: 'Bring your own legally owned copy or game files as noted in the repo README.',
      highlights: [
        'Added directly by you to your personal LinuxCrackGaming shelf',
        `Packaged for Linux via ${format}`,
        `Source code hosted at ${repoSlug}`,
      ],
      recipes: [
        {
          label: format,
          format,
          command:
            format === '.Flatpak'
              ? `# Check GitHub Releases or Flathub for ${name.trim()}\nflatpak install --user ./${name.trim().replace(/\s+/g, '')}.flatpak`
              : format === '.AppImage'
                ? `# Download ${name.trim()} AppImage from ${cleanUrl}/releases\nchmod +x ${name.trim().replace(/\s+/g, '')}*.AppImage\n./${name.trim().replace(/\s+/g, '')}*.AppImage`
                : `git clone ${cleanUrl}\ncd ${repoSlug.split('/').pop() ?? 'project'}`,
        },
      ],
      vibeNote: 'Freshly pinned to your cozy shelf!',
      emojiMark: emoji,
    };

    onAddProject(newProject);
    setName('');
    setGameTitle('');
    setGithubUrl('');
    setTagline('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#352A24]/30 p-4 backdrop-blur-[3px]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Pin a GitHub project"
    >
      <div
        className="w-full max-w-lg rounded-[32px] border border-[#EAE0D0] bg-[#FFFDF9] p-6 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E9F2E8] px-3 py-0.5 text-xs font-semibold text-[#477150]">
              <Sparkles className="h-3.5 w-3.5" />
              Community Pantry
            </span>
            <h2 className="font-display mt-1.5 text-2xl font-semibold text-[#352A24]">
              Pin a GitHub Gem
            </h2>
            <p className="mt-1 text-sm text-[#7B695D]">
              Know another cool open-source rewrite, wrapper, or port? Pop it onto your shelf!
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#EAE0D0] bg-[#FAF4EB] text-[#6B5A4E] hover:bg-[#EFE5D6] cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <div className="grid gap-3.5 sm:grid-cols-2">
            <label className="block">
              <span className="text-xs font-semibold text-[#5C4B40]">Project Name *</span>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. OpenTTD or 2Ship2Harkinian"
                className="mt-1 w-full rounded-2xl border border-[#E6DAC8] bg-[#FBF7F0] px-3.5 py-2.5 text-sm text-[#352A24] placeholder:text-[#A59486] focus:border-[#D97757] focus:outline-none"
              />
            </label>
            <label className="block">
              <span className="text-xs font-semibold text-[#5C4B40]">Game it Plays *</span>
              <input
                required
                value={gameTitle}
                onChange={(e) => setGameTitle(e.target.value)}
                placeholder="e.g. Transport Tycoon"
                className="mt-1 w-full rounded-2xl border border-[#E6DAC8] bg-[#FBF7F0] px-3.5 py-2.5 text-sm text-[#352A24] placeholder:text-[#A59486] focus:border-[#D97757] focus:outline-none"
              />
            </label>
          </div>

          <label className="block">
            <span className="text-xs font-semibold text-[#5C4B40]">GitHub URL or owner/repo *</span>
            <input
              required
              value={githubUrl}
              onChange={(e) => setGithubUrl(e.target.value)}
              placeholder="https://github.com/owner/project"
              className="mt-1 w-full rounded-2xl border border-[#E6DAC8] bg-[#FBF7F0] px-3.5 py-2.5 text-sm text-[#352A24] placeholder:text-[#A59486] focus:border-[#D97757] focus:outline-none"
            />
          </label>

          <label className="block">
            <span className="text-xs font-semibold text-[#5C4B40]">Why is it awesome?</span>
            <input
              value={tagline}
              onChange={(e) => setTagline(e.target.value)}
              placeholder="Fast Rust rewrite with shader perks & native Wayland!"
              className="mt-1 w-full rounded-2xl border border-[#E6DAC8] bg-[#FBF7F0] px-3.5 py-2.5 text-sm text-[#352A24] placeholder:text-[#A59486] focus:border-[#D97757] focus:outline-none"
            />
          </label>

          <div className="grid gap-3.5 sm:grid-cols-3">
            <label className="block">
              <span className="text-xs font-semibold text-[#5C4B40]">Category</span>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as ProjectCategory)}
                className="mt-1 w-full rounded-2xl border border-[#E6DAC8] bg-[#FBF7F0] px-3 py-2.5 text-sm text-[#352A24] focus:border-[#D97757] focus:outline-none"
              >
                <option value="rewrites">Engine Rewrite</option>
                <option value="runtimes">Runtime / Launcher</option>
                <option value="recomp">Static Recomp</option>
              </select>
            </label>

            <label className="block">
              <span className="text-xs font-semibold text-[#5C4B40]">Linux Format</span>
              <select
                value={format}
                onChange={(e) => setFormat(e.target.value as PackageFormat)}
                className="mt-1 w-full rounded-2xl border border-[#E6DAC8] bg-[#FBF7F0] px-3 py-2.5 text-sm text-[#352A24] focus:border-[#D97757] focus:outline-none"
              >
                <option value=".AppImage">.AppImage</option>
                <option value=".Flatpak">.Flatpak</option>
                <option value="Native">Native / Source</option>
              </select>
            </label>

            <label className="block">
              <span className="text-xs font-semibold text-[#5C4B40]">Language</span>
              <input
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                placeholder="Rust, C++, Go..."
                className="mt-1 w-full rounded-2xl border border-[#E6DAC8] bg-[#FBF7F0] px-3 py-2.5 text-sm text-[#352A24] focus:border-[#D97757] focus:outline-none"
              />
            </label>
          </div>

          <div>
            <span className="text-xs font-semibold text-[#5C4B40]">Pick a cozy sticker</span>
            <div className="mt-1.5 flex flex-wrap gap-2">
              {EMOJI_CHOICES.map((em) => (
                <button
                  key={em}
                  type="button"
                  onClick={() => setEmoji(em)}
                  className={`flex h-9 w-9 items-center justify-center rounded-xl border text-lg transition-all cursor-pointer ${
                    emoji === em
                      ? 'border-[#D97757] bg-[#FCECE4] scale-105'
                      : 'border-[#EAE0D0] bg-[#FAF5EC] hover:bg-[#F2E9DB]'
                  }`}
                >
                  {em}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-2xl px-4 py-2.5 text-sm font-semibold text-[#7A685B] hover:bg-[#F4ECE0] cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-2xl bg-[#D97757] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#C66545] active:scale-95 cursor-pointer"
            >
              <PlusCircle className="h-4 w-4" />
              Pin to Shelf
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
