import { Code2, Cpu, Gamepad2, Wrench } from 'lucide-react';
import type { GameProject, ProjectCategory } from '../data/projects';

interface ProjectMarkProps {
  project: Pick<GameProject, 'category'>;
  className?: string;
  iconClassName?: string;
}

const CATEGORY_ICONS: Record<ProjectCategory, typeof Gamepad2> = {
  rewrites: Code2,
  runtimes: Gamepad2,
  recomp: Cpu,
  tools: Wrench,
  games: Gamepad2,
};

export function ProjectMark({
  project,
  className = '',
  iconClassName = 'h-6 w-6',
}: ProjectMarkProps) {
  const Icon = CATEGORY_ICONS[project.category];

  return (
    <span className={'project-mark ' + className}>
      <Icon aria-hidden="true" className={iconClassName} strokeWidth={1.8} />
    </span>
  );
}
