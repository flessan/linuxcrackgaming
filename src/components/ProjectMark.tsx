import { Code2, Cpu, Gamepad2, Wrench } from 'lucide-react';
import type { GameProject, ProjectCategory } from '../data/projects';

interface ProjectMarkProps {
  project: Pick<GameProject, 'emojiMark' | 'category' | 'name'>;
  className?: string;
  iconClassName?: string;
}

const CATEGORY_ICONS: Record<ProjectCategory, typeof Gamepad2> = {
  rewrites: Code2,
  runtimes: Gamepad2,
  recomp: Cpu,
  tools: Wrench,
};

export function ProjectMark({ project, className = '', iconClassName = 'h-6 w-6' }: ProjectMarkProps) {
  const Icon = CATEGORY_ICONS[project.category];
  const imageUrl = project.emojiMark.startsWith('http') ? project.emojiMark : null;

  return (
    <span className={`project-mark ${className}`}>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          width={48}
          height={48}
        />
      ) : (
        <Icon aria-hidden="true" className={iconClassName} strokeWidth={1.8} />
      )}
    </span>
  );
}
