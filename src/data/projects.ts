export type ProjectCategory = 'rewrites' | 'runtimes' | 'recomp' | 'tools' | 'games';
export type PackageFormat = '.AppImage' | '.Flatpak' | 'Native';
export type PastelTone = 'peach' | 'matcha' | 'honey' | 'berry' | 'chamomile';

export interface InstallRecipe {
  label: string;
  format: PackageFormat;
  command: string;
  note?: string;
}

export interface GameProject {
  id: string;
  name: string;
  gameTitle: string;
  tagline: string;
  description: string;
  howItWorks: string;
  category: ProjectCategory;
  categoryLabel: string;
  tone: PastelTone;
  language: string;
  license: string;
  githubUrl: string;
  homepageUrl?: string;
  repoSlug: string;
  formats: PackageFormat[];
  primaryFormat: PackageFormat;
  featured?: boolean;
  steamDeckFriendly: boolean;
  byocRequirement: string;
  highlights: string[];
  recipes: InstallRecipe[];
  vibeNote: string;
  emojiMark: string;
  imageUrl: string;
  imageAlt: string;
  imageFit?: 'cover' | 'contain';
}

export const TONE_STYLES: Record<
  PastelTone,
  {
    bg: string;
    softBg: string;
    border: string;
    text: string;
    badgeBg: string;
    dot: string;
  }
> = {
  peach: {
    bg: 'bg-[#FCECE4]',
    softBg: 'bg-[#FFF5F0]',
    border: 'border-[#F2D2C2]',
    text: 'text-[#B55939]',
    badgeBg: 'bg-[#F8DFD2]',
    dot: 'bg-[#D97757]',
  },
  matcha: {
    bg: 'bg-[#E9F2E8]',
    softBg: 'bg-[#F4F9F3]',
    border: 'border-[#CEE0CC]',
    text: 'text-[#4B7554]',
    badgeBg: 'bg-[#DCEAD9]',
    dot: 'bg-[#6C9A76]',
  },
  honey: {
    bg: 'bg-[#FBF1DC]',
    softBg: 'bg-[#FFF9EE]',
    border: 'border-[#EED9AE]',
    text: 'text-[#9F6F21]',
    badgeBg: 'bg-[#F5E4BE]',
    dot: 'bg-[#DFA446]',
  },
  berry: {
    bg: 'bg-[#F3EAF7]',
    softBg: 'bg-[#FAF5FC]',
    border: 'border-[#DFCCE8]',
    text: 'text-[#765084]',
    badgeBg: 'bg-[#E8D9EE]',
    dot: 'bg-[#9A74A8]',
  },
  chamomile: {
    bg: 'bg-[#E9F1F8]',
    softBg: 'bg-[#F4F8FC]',
    border: 'border-[#CBE0F0]',
    text: 'text-[#476E91]',
    badgeBg: 'bg-[#DCEAF5]',
    dot: 'bg-[#6C96BD]',
  },
};

