import { ArrowUpRight, Bookmark, BookmarkCheck, ExternalLink } from 'lucide-react';
import type { GameProject } from '../data/projects';
import { ProjectMark } from './ProjectMark';

interface ProjectCardProps {
  project: GameProject;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  onSelect: (project: GameProject) => void;
  layout: 'grid' | 'list';
}

export function ProjectCard({
  project,
  isSaved,
  onToggleSave,
  onSelect,
  layout,
}: ProjectCardProps) {
  return (
    <article className={`project-card cream-card ${layout === 'list' ? 'project-card--list' : ''}`}>
      <div className="project-card__main">
        <ProjectMark
          project={project}
          className="project-mark--card"
          iconClassName="h-6 w-6"
        />

        <div className="project-card__content">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-display text-xl font-semibold leading-tight text-[#352A24]">
              {project.name}
            </h3>
            {project.featured && <span className="project-badge">Featured</span>}
          </div>
          <p className="mt-1 text-xs font-medium text-[#857265]">{project.gameTitle}</p>
          <p className="mt-3 text-sm leading-relaxed text-[#5E4E43]">{project.tagline}</p>

          <ul className="project-card__metadata" aria-label={`${project.name} details`}>
            <li>{project.categoryLabel}</li>
            {project.formats.map((format) => <li key={format}>{format}</li>)}
            <li>{project.language}</li>
          </ul>
        </div>
      </div>

      <footer className="project-card__footer">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          onClick={(event) => event.stopPropagation()}
          className="project-repo-link"
          aria-label={`Open ${project.name} source repository`}
        >
          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          <span>{project.repoSlug}</span>
        </a>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onToggleSave(project.id)}
            aria-label={isSaved ? `Remove ${project.name} from saved projects` : `Save ${project.name}`}
            aria-pressed={isSaved}
            className={`icon-action ${isSaved ? 'icon-action--saved' : ''}`}
          >
            {isSaved
              ? <BookmarkCheck className="h-4 w-4" aria-hidden="true" />
              : <Bookmark className="h-4 w-4" aria-hidden="true" />}
          </button>
          <button
            type="button"
            onClick={() => onSelect(project)}
            className="project-open-button"
          >
            View details
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </footer>
    </article>
  );
}
