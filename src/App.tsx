import { useEffect, useMemo, useRef, useState } from 'react';
import { animate, stagger } from 'animejs';
import {
  Search,
  Sparkles,
  Bookmark,
  ExternalLink,
  Globe,
  Plus,
  HelpCircle,
  SlidersHorizontal,
  ArrowDown,
  UtensilsCrossed,
  Heart,
  Check,
  RotateCcw,
  Grid2X2,
  List,
  Gamepad2,
} from 'lucide-react';
import type { GameProject, PackageFormat, ProjectCategory } from './data/projects';
import PROJECT_CATALOGUE from './data/projects.generated.json';
import { ProjectCard } from './components/ProjectCard';
import { ProjectDrawer } from './components/ProjectDrawer';
import { TrayDrawer } from './components/TrayDrawer';
import { CopyPill } from './components/CopyPill';
import { DiscordChat } from './components/DiscordChat';

const STORAGE_TRAY_KEY = 'linuxcrackgaming_tray_v1';

type ViewId = 'specials' | 'shelf' | 'pantry-notes';
type CategoryFilter = 'all' | ProjectCategory;

const VIEW_META: Record<ViewId, { title: string }> = {
  specials: { title: 'House Specials' },
  shelf: { title: 'The Shelf' },
  'pantry-notes': { title: 'Pantry Notes' },
};

function getViewFromHash(): ViewId {
  const hash = window.location.hash.slice(1);
  if (hash === 'shelf' || hash === 'pantry-notes') return hash;
  return 'specials';
}
type FormatFilter = 'all' | PackageFormat;

export function App() {
  const [savedIds, setSavedIds] = useState<string[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_TRAY_KEY);
      return raw ? (JSON.parse(raw) as string[]) : ['cinnabar', 'sober'];
    } catch {
      return ['cinnabar', 'sober'];
    }
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('all');
  const [formatFilter, setFormatFilter] = useState<FormatFilter>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortMode, setSortMode] = useState<'recommended' | 'name' | 'category'>('recommended');
  const [selectedProject, setSelectedProject] = useState<GameProject | null>(null);
  const [isTrayOpen, setIsTrayOpen] = useState(false);
  const [showCrackNote, setShowCrackNote] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [activeView, setActiveView] = useState<ViewId>(() =>
    typeof window === 'undefined' ? 'specials' : getViewFromHash()
  );
  const viewContentRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const pendingSearchFocusRef = useRef(false);

  const allProjects = PROJECT_CATALOGUE.projects as GameProject[];

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_TRAY_KEY, JSON.stringify(savedIds));
    } catch {
      // ignore storage errors
    }
  }, [savedIds]);

  useEffect(() => {
    if (activeView !== 'shelf' || !pendingSearchFocusRef.current) return;

    pendingSearchFocusRef.current = false;
    const frame = window.requestAnimationFrame(() => searchInputRef.current?.focus());
    return () => window.cancelAnimationFrame(frame);
  }, [activeView]);

  useEffect(() => {
    const handleSearchShortcut = (event: KeyboardEvent) => {
      const target = event.target instanceof HTMLElement ? event.target : null;
      const isEditing = Boolean(target?.isContentEditable || target?.closest('input, textarea, select, [contenteditable="true"]'));
      const isCommandK = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k';
      const isSlash = event.key === '/' && !event.metaKey && !event.ctrlKey && !event.altKey;

      if (!isCommandK && !(isSlash && !isEditing)) return;

      event.preventDefault();
      if (activeView !== 'shelf') {
        pendingSearchFocusRef.current = true;
        navigateTo('shelf');
      } else {
        searchInputRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleSearchShortcut);
    return () => window.removeEventListener('keydown', handleSearchShortcut);
  }, [activeView]);

  useEffect(() => {
    const initialView = getViewFromHash();
    if (window.location.hash !== `#${initialView}`) {
      window.history.replaceState({ view: initialView }, '', `#${initialView}`);
    }

    const syncFromLocation = () => {
      setActiveView(getViewFromHash());
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', syncFromLocation);
    window.addEventListener('hashchange', syncFromLocation);
    return () => {
      window.removeEventListener('popstate', syncFromLocation);
      window.removeEventListener('hashchange', syncFromLocation);
    };
  }, []);

  useEffect(() => {
    document.title = `${VIEW_META[activeView].title} | LinuxCrackGaming`;

    const root = viewContentRef.current;
    if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const sections = Array.from(root.querySelectorAll<HTMLElement>(':scope > section'));
    if (sections.length) {
      animate(sections, {
        opacity: [0, 1],
        y: [18, 0],
        delay: stagger(75),
        duration: 520,
        ease: 'outQuart',
      });
    }

    const projectItems = Array.from(
      root.querySelectorAll<HTMLElement>('.catalog-grid > li, .project-list-view > li')
    );
    if (projectItems.length) {
      animate(projectItems, {
        opacity: [0, 1],
        y: [14, 0],
        delay: stagger(28, { start: 90 }),
        duration: 440,
        ease: 'outQuart',
      });
    }
  }, [activeView]);

  useEffect(() => {
    const activeButton = navRef.current?.querySelector<HTMLButtonElement>(
      `[data-view="${activeView}"]`
    );
    const indicator = navRef.current?.querySelector<HTMLElement>('.nav-switcher__indicator');
    if (!activeButton || !indicator) return;

    const x = activeButton.offsetLeft;
    const width = activeButton.offsetWidth;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      indicator.style.transform = `translateX(${x}px)`;
      indicator.style.width = `${width}px`;
      indicator.style.opacity = '1';
      return;
    }

    animate(indicator, {
      x,
      width,
      opacity: 1,
      duration: 480,
      ease: 'outBack',
    });
  }, [activeView]);

  const navigateTo = (view: ViewId) => {
    if (view !== activeView) {
      window.history.pushState({ view }, '', `#${view}`);
      setActiveView(view);
    }
    window.scrollTo(0, 0);
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    window.setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 2600);
  };

  const toggleSave = (id: string) => {
    const proj = allProjects.find((p) => p.id === id);
    setSavedIds((prev) => {
      if (prev.includes(id)) {
        if (proj) showToast(`Removed ${proj.name} from your tray`);
        return prev.filter((item) => item !== id);
      }
      if (proj) showToast(`Tucked ${proj.name} into your tray!`);
      return [...prev, id];
    });
  };

  const loadStarterPack = () => {
    setSavedIds(['cinnabar', 'sober', 'prism-launcher', 'openrct2']);
    showToast('Loaded the Cozy Starter Pack into your tray!');
  };

  const filteredProjects = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    const results = allProjects.filter((project) => {
      if (categoryFilter !== 'all' && project.category !== categoryFilter) {
        return false;
      }
      if (formatFilter !== 'all' && !project.formats.includes(formatFilter)) {
        return false;
      }
      if (!q) return true;
      const haystack = [
        project.name,
        project.gameTitle,
        project.tagline,
        project.description,
        project.language,
        project.repoSlug,
        project.categoryLabel,
        project.license,
        project.howItWorks,
        project.byocRequirement,
        ...project.highlights,
        ...project.formats,
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(q);
    });
    if (sortMode === 'name') results.sort((a, b) => a.name.localeCompare(b.name));
    if (sortMode === 'category') results.sort((a, b) => a.categoryLabel.localeCompare(b.categoryLabel) || a.name.localeCompare(b.name));
    return results;
  }, [allProjects, categoryFilter, formatFilter, searchQuery, sortMode]);

  const savedProjects = useMemo(
    () =>
      savedIds
        .map((id) => allProjects.find((p) => p.id === id))
        .filter((p): p is GameProject => Boolean(p)),
    [savedIds, allProjects]
  );

  const cinnabarProject = allProjects.find((p) => p.id === 'cinnabar')!;
  const soberProject = allProjects.find((p) => p.id === 'sober')!;

  const categoryCounts = useMemo(
    () => ({
      all: allProjects.length,
      rewrites: allProjects.filter((p) => p.category === 'rewrites').length,
      runtimes: allProjects.filter((p) => p.category === 'runtimes').length,
      recomp: allProjects.filter((p) => p.category === 'recomp').length,
      tools: allProjects.filter((p) => p.category === 'tools').length,
      games: allProjects.filter((p) => p.category === 'games').length,
    }),
    [allProjects]
  );

  const hasActiveFilters =
    searchQuery.trim().length > 0 || categoryFilter !== 'all' || formatFilter !== 'all';

  return (
    <div className="cream-ambient-bg min-h-screen text-[#352A24]">
      <a className="skip-link" href="#top">Skip to content</a>
      {/* Soft sticky header */}
      <header className="site-header sticky top-0 z-40 border-b border-[#EFE6D8]/90 bg-[#FBF7F0]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
          <a
            href="#specials"
            onClick={(event) => {
              event.preventDefault();
              navigateTo('specials');
            }}
            className="group inline-flex items-center gap-2.5 focus:outline-none"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#ECDCC7] bg-[#FFFDF9] text-[#D97757] shadow-xs transition-transform duration-300 group-hover:-rotate-6"><Gamepad2 className="h-5 w-5" aria-hidden="true" /></span>
            <div className="leading-none">
              <span className="font-display block text-[1.15rem] font-semibold tracking-tight text-[#352A24]">
                Linux<span className="text-[#D97757]">Crack</span>Gaming
              </span>
              <span className="mt-0.5 block text-[11px] font-medium text-[#8C786B]">
                open-source game pantry
              </span>
            </div>
          </a>

          <nav
            ref={navRef}
            aria-label="Main navigation"
            className="nav-switcher order-3 flex w-full items-center justify-center gap-1 rounded-full border border-[#ECE2D3] bg-[#FFFDF9]/90 p-1 md:order-none md:w-auto"
          >
            <span className="nav-switcher__indicator" aria-hidden="true" />
            <button
              type="button"
              data-view="specials"
              aria-current={activeView === 'specials' ? 'page' : undefined}
              onClick={() => navigateTo('specials')}
              className={`nav-link nav-switcher__button ${activeView === 'specials' ? 'nav-link--active' : ''}`}
            >
              House Specials
            </button>
            <button
              type="button"
              data-view="shelf"
              aria-current={activeView === 'shelf' ? 'page' : undefined}
              onClick={() => navigateTo('shelf')}
              className={`nav-link nav-switcher__button ${activeView === 'shelf' ? 'nav-link--active' : ''}`}
            >
              The Shelf
            </button>
            <button
              type="button"
              data-view="pantry-notes"
              aria-current={activeView === 'pantry-notes' ? 'page' : undefined}
              onClick={() => navigateTo('pantry-notes')}
              className={`nav-link nav-switcher__button ${activeView === 'pantry-notes' ? 'nav-link--active' : ''}`}
            >
              Pantry Notes
            </button>
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href="https://github.com/flessan/linuxcrackgaming/issues/new?template=add-project.yml"
              target="_blank"
              rel="noreferrer"
              aria-label="Suggest a project"
              title="Suggest a project on GitHub"
              className="suggest-project-link inline-flex min-h-10 items-center gap-1.5 rounded-full border border-[#E6DAC8] bg-[#FFFDF9] px-3.5 py-2 text-xs font-semibold text-[#5C4B40] transition-all hover:border-[#D7C3AA] hover:bg-[#FAF4EB]"
            >
              <Plus className="h-3.5 w-3.5 text-[#D97757]" aria-hidden="true" />
              <span className="suggest-project-link__label">Suggest a project</span>
            </a>

            <button
              type="button"
              onClick={() => setIsTrayOpen(true)}
              className="inline-flex items-center gap-2 rounded-full border border-[#EBCBB9] bg-[#FCECE4] px-4 py-2 text-xs font-semibold text-[#B35737] transition-all hover:bg-[#F8DFD1] active:scale-95 cursor-pointer"
            >
              <UtensilsCrossed className="h-3.5 w-3.5" />
              <span>My Tray</span>
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#D97757] px-1.5 text-[11px] font-bold text-white">
                {savedProjects.length}
              </span>
            </button>
          </div>
        </div>
      </header>

      <main id="top" className="app-main">
        <div
          ref={viewContentRef}
          className="view-transition"
          data-active-view={activeView}
        >
          {activeView === 'specials' && (
            <>
        {/* Hero Section */}
        <section className="hero-section mx-auto max-w-6xl px-5 pb-16 pt-10 sm:px-8 sm:pt-14 lg:pb-24">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Hero Copy */}
            <div className="hero-copy lg:col-span-7">
              <div className="hero-eyebrow inline-flex items-center gap-2 rounded-full border border-[#EAE0D0] bg-[#FFFDF9] px-4 py-1.5 text-xs font-semibold text-[#7A6659] cream-pill-shadow">
                <span className="h-2 w-2 rounded-full bg-[#6C9A76]" />
                A curated guide to Linux gaming projects
              </div>

              <h1 className="hero-title font-display mt-5 text-4xl font-semibold leading-[1.12] tracking-tight text-[#352A24] sm:text-5xl lg:text-[3.45rem]">
                Your next Linux gaming project starts{' '}
                <span className="text-[#D97757]">here.</span>
              </h1>

              <p className="hero-lede mt-6 max-w-xl text-base leading-relaxed text-[#645348] sm:text-[17px]">
                Discover community-made rewrites, native ports, open-source games and useful
                tools. Compare requirements, choose a package, and get clear install steps
                before you dive in.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <button
                  type="button"
                  onClick={() => navigateTo('shelf')}
                  className="inline-flex items-center gap-2 rounded-full bg-[#D97757] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#C66545] active:scale-[0.98]"
                >
                  Browse the catalogue
                  <ArrowDown className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  onClick={() => setShowCrackNote((prev) => !prev)}
                  className="inline-flex items-center gap-2 rounded-full border border-[#E5D8C5] bg-[#FFFDF9] px-5 py-3.5 text-sm font-semibold text-[#5C4B40] transition-all hover:border-[#D5C1A7] hover:bg-[#FAF4EA] cursor-pointer"
                >
                  <HelpCircle className="h-4 w-4 text-[#C98E32]" />
                  What does the name mean?
                </button>
              </div>

              {/* Friendly playful disclaimer popover */}
              {showCrackNote && (
                <div className="mt-5 max-w-lg rounded-3xl border border-[#ECDCC6] bg-[#FFFDF9] p-4 text-sm leading-relaxed text-[#5E4E43] cream-pill-shadow">
                  <div className="flex items-start gap-3">
                    <span className="hero-note-icon" aria-hidden="true">
                      <Gamepad2 className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-display font-semibold text-[#352A24]">
                        A name about opening possibilities.
                      </p>
                      <p className="mt-1 text-[13.5px]">
                        “Crack” is figurative: this catalogue celebrates open-source
                        projects, community ports and compatibility tools. Some projects
                        may require files from a game you already own.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Gentle stats row */}
              <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-[#EFE5D7] pt-6 text-xs font-medium text-[#7F6D60]">
                <div className="flex items-center gap-2">
                  <span className="font-display text-lg font-semibold text-[#352A24]">
                    {allProjects.length}
                  </span>
                  <span>curated GitHub gems</span>
                </div>
                <span className="h-1 w-1 rounded-full bg-[#D9C7B0]" />
                <div className="flex items-center gap-2">
                  <span className="font-display text-lg font-semibold text-[#352A24]">
                    .AppImage & .Flatpak
                  </span>
                  <span>ready-to-copy recipes</span>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="hero-art-wrap relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
              <div className="hero-art-frame relative rounded-[44px] border-2 border-[#EFE4D3] bg-[#F8EFE0] p-4 shadow-[0_24px_60px_-24px_rgba(122,91,63,0.18)] sm:p-5">
                <img
                  src="/images/cozy-penguin-hero.png"
                  alt="A cozy penguin playing a game beside a warm drink"
                  className="hero-art-image aspect-square w-full rounded-[34px] object-cover"
                  width="900"
                  height="900"
                  fetchPriority="high"
                />

                {/* Floating pill 1: Cinnabar */}
                <button
                  type="button"
                  onClick={() => setSelectedProject(cinnabarProject)}
                  className="animate-gentle-float absolute -left-3 top-6 flex items-center gap-2.5 rounded-2xl border border-[#F0D3C3] bg-[#FFFDF9]/95 px-3.5 py-2.5 text-left backdrop-blur-sm transition-transform hover:scale-105 cream-pill-shadow sm:-left-6 cursor-pointer"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FCECE4] text-lg">
                    <img src='https://avatars.githubusercontent.com/u/344119591?s=200&v=4'></img>
                  </span>
                  <div>
                    <span className="font-display block text-xs font-semibold text-[#352A24]">
                      Cinnabar
                    </span>
                    <span className="block text-[11px] font-medium text-[#B55939]">
                      Rust · .AppImage
                    </span>
                  </div>
                </button>

                {/* Floating pill 2: Sober */}
                <button
                  type="button"
                  onClick={() => setSelectedProject(soberProject)}
                  className="animate-gentle-float-delayed absolute -bottom-3 -right-2 flex items-center gap-2.5 rounded-2xl border border-[#CDE0CB] bg-[#FFFDF9]/95 px-3.5 py-2.5 text-left backdrop-blur-sm transition-transform hover:scale-105 cream-pill-shadow sm:-right-5 cursor-pointer"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E9F2E8] text-lg">
                    <img src='https://sober.vinegarhq.org/img/icon/sober.svg'></img>
                  </span>
                  <div>
                    <span className="font-display block text-xs font-semibold text-[#352A24]">
                      Sober (Roblox)
                    </span>
                    <span className="block text-[11px] font-medium text-[#477150]">
                      Flathub · .Flatpak
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* House Specials: Cinnabar & Sober Spotlight */}
        <section id="specials" className="deferred-section mx-auto max-w-6xl px-5 py-10 sm:px-8">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FBEBD5] px-3 py-1 text-xs font-semibold text-[#9F6A1E]">
                <Sparkles className="h-3.5 w-3.5" />
                House Specials
              </span>
              <h2 className="font-display mt-2 text-3xl font-semibold text-[#352A24]">
                Two icons that started the craving
              </h2>
            </div>
            <p className="max-w-md text-sm text-[#78665A]">
              One rewrites a whole game engine in Rust; the other invents a nimble Flatpak
              runtime. Both make Linux gaming feel effortlessly sweet.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Cinnabar Featured Card */}
            <div className="cream-card flex flex-col rounded-[32px] p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#F2D2C2] bg-[#FCECE4] text-3xl">
                    <img src='https://avatars.githubusercontent.com/u/344119591?s=200&v=4'></img>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-display text-2xl font-semibold text-[#352A24]">
                        Cinnabar
                      </h3>
                      <span className="rounded-full bg-[#FBF1DC] px-2.5 py-0.5 text-xs font-semibold text-[#9A6A1D]">
                        .AppImage
                      </span>
                    </div>
                    <p className="text-sm font-medium text-[#847164]">
                      Minecraft: Bedrock Edition · Rebuilt in Rust
                    </p>
                  </div>
                </div>
                <span className="rounded-full border border-[#F0D6C8] bg-[#FFF5F0] px-3 py-1 text-xs font-semibold text-[#B55939]">
                  Bevy / wgpu + Go
                </span>
              </div>

              <p className="mt-5 text-[15px] leading-relaxed text-[#58483E]">
                A crisp, vanilla-accurate Bedrock desktop client written from scratch in Rust.
                Pairs blazing-fast chunk streaming with Java-style hand sway, shader-friendly
                rendering, live resource pack switching, and WebAssembly mods.
              </p>

              <div className="mt-5">
                <CopyPill
                  compact
                  label="Quick Linux .AppImage launch"
                  command={`chmod +x Cinnabar-*.AppImage && ./Cinnabar-*.AppImage`}
                />
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => setSelectedProject(cinnabarProject)}
                  className="inline-flex items-center gap-2 rounded-2xl bg-[#352A24] px-4 py-2.5 text-xs font-semibold text-[#FFFDF9] transition-all hover:bg-[#4B3C34] cursor-pointer"
                >
                  Peek Full Recipe
                </button>
                <a
                  href={cinnabarProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-2xl border border-[#E6DAC8] bg-[#FAF4EB] px-4 py-2.5 text-xs font-semibold text-[#5C4B40] transition-colors hover:bg-[#F2E8D9]"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  cinnabar-mc/cinnabar
                </a>
              </div>
            </div>

            {/* Sober Featured Card */}
            <div className="cream-card flex flex-col rounded-[32px] p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#CEE0CC] bg-[#E9F2E8] text-3xl">
                    <img src='https://sober.vinegarhq.org/img/icon/sober.svg'></img>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-display text-2xl font-semibold text-[#352A24]">
                        Sober
                      </h3>
                      <span className="rounded-full bg-[#E9F2E8] px-2.5 py-0.5 text-xs font-semibold text-[#45704E]">
                        .Flatpak
                      </span>
                    </div>
                    <p className="text-sm font-medium text-[#847164]">
                      Roblox on Linux · by VinegarHQ
                    </p>
                  </div>
                </div>
                <span className="rounded-full border border-[#CEE0CC] bg-[#F4F9F3] px-3 py-1 text-xs font-semibold text-[#477150]">
                  Zero Wine Needed
                </span>
              </div>

              <p className="mt-5 text-[15px] leading-relaxed text-[#58483E]">
                Runs Roblox’s Android x86_64 build directly inside a featherweight Linux runtime
                via Flathub-giving you buttery Vulkan frame rates, custom FastFlags, and cozy
                modding with its open-source GitHub sidekick{' '}
                <button
                  type="button"
                  onClick={() => {
                    const soberix = allProjects.find((p) => p.id === 'soberix');
                    if (soberix) setSelectedProject(soberix);
                  }}
                  className="font-semibold text-[#476E91] underline decoration-[#CBE0F0] decoration-2 underline-offset-2 cursor-pointer"
                >
                  Soberix
                </button>
                .
              </p>

              <div className="mt-5">
                <CopyPill
                  compact
                  label="One-line Flathub install"
                  command={`flatpak install flathub org.vinegarhq.Sober`}
                />
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => setSelectedProject(soberProject)}
                  className="inline-flex items-center gap-2 rounded-2xl bg-[#352A24] px-4 py-2.5 text-xs font-semibold text-[#FFFDF9] transition-all hover:bg-[#4B3C34] cursor-pointer"
                >
                  Peek Full Recipe
                </button>
                <a
                  href={soberProject.homepageUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-2xl border border-[#E6DAC8] bg-[#FAF4EB] px-4 py-2.5 text-xs font-semibold text-[#5C4B40] transition-colors hover:bg-[#F2E8D9]"
                >
                  <Globe className="h-3.5 w-3.5" />
                  sober.vinegarhq.org
                </a>
                <a
                  href={soberProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-2xl border border-[#E6DAC8] bg-[#FFFDF9] px-3.5 py-2.5 text-xs font-semibold text-[#7A685B] transition-colors hover:bg-[#FAF4EB]"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
            </>
          )}

          {activeView === 'shelf' && (
            <>
        {/* Main Interactive Project Shelf */}
        <section id="shelf" className="deferred-section mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E9F2E8] px-3 py-1 text-xs font-semibold text-[#477150]">
                <SlidersHorizontal className="h-3.5 w-3.5" />
                The Open-Source Shelf
              </span>
              <h2 className="font-display mt-2 text-3xl font-semibold text-[#352A24]">
                Browse GitHub rewrites, runtimes & ports
              </h2>
            </div>

            <a
              href="https://github.com/flessan/linuxcrackgaming/issues/new?template=add-project.yml"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#E4D6C3] bg-[#FFFDF9] px-4 py-2.5 text-xs font-semibold text-[#5B4A3F] shadow-xs transition-all hover:border-[#D97757] hover:text-[#B55939]"
            >
              <Plus className="h-4 w-4 text-[#D97757]" aria-hidden="true" />
              Suggest a project on GitHub
            </a>
          </div>

          {/* Warm Filter Bar */}
          <div className="mt-6 rounded-[28px] border border-[#ECE2D3] bg-[#FFFDF9]/90 p-4 sm:p-5 cream-pill-shadow">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              {/* Search input */}
              <search className="catalog-search relative flex-1 lg:max-w-md" aria-label="Search catalogue">
                <Search className="pointer-events-none h-4 w-4 shrink-0 text-[#9B897B]" aria-hidden="true" />
                <input
                  ref={searchInputRef}
                  id="catalog-search"
                  type="search"
                  autoComplete="off"
                  spellCheck={false}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search games, projects, tools, packages..."
                  aria-label="Search Linux gaming projects"
                  aria-keyshortcuts="/ Control+K Meta+K"
                />
                {searchQuery && (
                  <button
                    type="button"
                    className="search-clear"
                    onClick={() => setSearchQuery('')}
                    aria-label="Clear search"
                  >
                    Clear
                  </button>
                )}
                <span className="catalog-search__shortcut" aria-hidden="true">
                  <kbd>Ctrl</kbd><kbd>K</kbd>
                </span>
              </search>

              {/* Category pills */}
              <div className="category-filter-row" role="group" aria-label="Filter by project category">
                {(
                  [
                    { id: 'all', label: 'All projects', count: categoryCounts.all },
                    { id: 'rewrites', label: 'Engine Rewrites', count: categoryCounts.rewrites },
                    { id: 'runtimes', label: 'Runtimes & Launchers', count: categoryCounts.runtimes },
                    { id: 'recomp', label: 'Native Recomp', count: categoryCounts.recomp },
                    { id: 'tools', label: 'Compatibility Tools', count: categoryCounts.tools },
                    { id: 'games', label: 'Open-Source Games', count: categoryCounts.games },
                  ] as const
                ).map((tab) => {
                  const active = categoryFilter === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setCategoryFilter(tab.id)}
                      className={`category-filter ${active ? 'category-filter--active' : ''}`}
                      aria-pressed={active}
                    >
                      <span>{tab.label}</span>
                      <span
                        className={`rounded-full px-1.5 py-0.5 text-[10.5px] ${
                          active ? 'bg-white/20 text-[#FFFDF9]' : 'bg-[#FFFDF9] text-[#857265]'
                        }`}
                      >
                        {tab.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Secondary format filter row */}
            <div className="mt-3.5 flex flex-wrap items-center justify-between gap-3 border-t border-[#F2E9DC] pt-3.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-medium text-[#8C796C]">Package flavor:</span>
                {(['all', '.AppImage', '.Flatpak', 'Native'] as const).map((fmt) => {
                  const active = formatFilter === fmt;
                  return (
                    <button
                      key={fmt}
                      type="button"
                      onClick={() => setFormatFilter(fmt)}
                      className={`format-filter rounded-full border px-3 py-1 text-xs font-semibold transition-all cursor-pointer ${
                        active
                          ? 'border-[#D97757] bg-[#FCECE4] text-[#B55939]'
                          : 'border-[#EAE0D0] bg-[#FBF7F0] text-[#756358] hover:bg-[#F3EADB]'
                      }`}
                      aria-pressed={active}
                    >
                      {fmt === 'all' ? 'Any Format' : fmt}
                    </button>
                  );
                })}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <label className="text-xs font-medium text-[#8C796C]" htmlFor="catalog-sort">Sort by</label>
                <select id="catalog-sort" value={sortMode} onChange={(event) => setSortMode(event.target.value as 'recommended' | 'name' | 'category')} className="rounded-xl border border-[#EAE0D0] bg-[#FFFDF9] px-3 py-2 text-xs font-semibold text-[#5C4B40]">
                  <option value="recommended">Recommended</option><option value="name">Name</option><option value="category">Category</option>
                </select>
                <div className="view-toggle" role="group" aria-label="Catalogue view">
                  <button type="button" onClick={() => setViewMode('grid')} aria-label="Grid view" aria-pressed={viewMode === 'grid'}><Grid2X2 className="h-4 w-4" /></button>
                  <button type="button" onClick={() => setViewMode('list')} aria-label="List view" aria-pressed={viewMode === 'list'}><List className="h-4 w-4" /></button>
                </div>
              </div>
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setCategoryFilter('all');
                    setFormatFilter('all');
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B55939] hover:underline cursor-pointer"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  Reset filters
                </button>
              )}
            </div>
          </div>

          <div className="catalog-results-meta" role="status" aria-live="polite">
            <p>
              <strong>{filteredProjects.length}</strong>
              <span>{filteredProjects.length === 1 ? ' project found' : ' projects found'}</span>
              <span className="catalog-results-meta__total"> out of {allProjects.length}</span>
            </p>
            <span className="catalog-results-meta__hint">
              Press <kbd>/</kbd> or <kbd>Ctrl</kbd> + <kbd>K</kbd> to search
            </span>
          </div>

          {/* Grid of Project Cards */}
          {filteredProjects.length === 0 ? (
            <div className="mt-8 rounded-[32px] border border-dashed border-[#DFD2BE] bg-[#FFFDF9] p-12 text-center">
              <div className="text-3xl text-[#A27A62]"><Search className="mx-auto h-8 w-8" aria-hidden="true" /></div>
              <h3 className="font-display mt-3 text-xl font-semibold text-[#352A24]">
                No crumbs matched that search
              </h3>
              <p className="mx-auto mt-1.5 max-w-md text-sm text-[#7B695D]">
                Try clearing a filter, or submit a GitHub issue if a project is missing from the catalogue.
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setCategoryFilter('all');
                    setFormatFilter('all');
                  }}
                  className="rounded-full bg-[#352A24] px-5 py-2.5 text-xs font-semibold text-white cursor-pointer"
                >
                  Show All Projects
                </button>
                <a
                  href="https://github.com/flessan/linuxcrackgaming/issues/new?template=add-project.yml"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[#E4D6C3] bg-[#FAF4EB] px-5 py-2.5 text-xs font-semibold text-[#5B4A3F]"
                >
                  Suggest a project
                </a>
              </div>
            </div>
          ) : (
            <ul className={`mt-7 ${viewMode === 'grid' ? 'catalog-grid grid gap-6 sm:grid-cols-2 lg:grid-cols-3' : 'project-list-view'}`} role="list">
              {filteredProjects.map((project) => (
                <li key={project.id}>
                  <ProjectCard
                    project={project}
                    isSaved={savedIds.includes(project.id)}
                    onToggleSave={toggleSave}
                    onSelect={(p) => setSelectedProject(p)}
                    layout={viewMode}
                  />
                </li>
              ))}
            </ul>
          )}
        </section>
            </>
          )}

          {activeView === 'pantry-notes' && (
            <>
        <section id="community-chat" className="mx-auto max-w-6xl px-5 py-10 sm:px-8" aria-labelledby="community-chat-title">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <div>
              <span className="section-kicker">Community</span>
              <h2 id="community-chat-title" className="font-display mt-2 text-2xl font-semibold text-[#352A24]">Talk with other Linux gamers</h2>
              <p className="mt-1 text-sm text-[#78665A]">The community chat is available right here on the page.</p>
            </div>
            <a href="https://discord.gg/nZAMJ7BD" target="_blank" rel="noreferrer" className="text-sm font-semibold text-[#A95032] hover:underline">Open in Discord</a>
          </div>
          <div className="community-chat"><DiscordChat /></div>
        </section>
        {/* Cozy Pantry Notes + Crème Brûlée Illustration */}
        <section id="pantry-notes" className="deferred-section mx-auto max-w-6xl px-5 py-12 sm:px-8 lg:py-20">
          <div className="rounded-[40px] border border-[#ECE2D3] bg-[#FFFDF9] p-6 shadow-[0_16px_42px_-20px_rgba(122,91,63,0.12)] sm:p-10 lg:p-12">
            <div className="grid items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <div className="rounded-[32px] border border-[#EFE4D3] bg-[#F7EFDF] p-4">
                  <img
                    src="/images/cozy-pantry-treats.png"
                    alt="Playful crème brûlée dish with tiny pastel game cartridges, a terracotta heart, and a sage leaf"
                    className="aspect-square w-full rounded-[24px] object-cover"
                  />
                </div>
              </div>

              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FCECE4] px-3.5 py-1 text-xs font-semibold text-[#B55939]">
                  <Heart className="h-3.5 w-3.5" />
                  Pantry Philosophy
                </span>
                <h2 className="font-display mt-3 text-3xl font-semibold text-[#352A24]">
                  Cracking open Linux gaming, minus the cyber-neon drama
                </h2>
                <p className="mt-3.5 text-[15px] leading-relaxed text-[#645348]">
                  Gaming on Linux doesn’t have to feel like hacking a mainframe in a dark room.
                  Thousands of generous developers on GitHub are quietly rebuilding beloved
                  engines in Rust & C++, statically recompiling console classics, and wrapping
                  tricky runtimes into cozy one-click packages.
                </p>

                <div className="mt-6 grid gap-3.5 sm:grid-cols-3">
                  <div className="rounded-2xl border border-[#EFE3CE] bg-[#FDF8EE] p-4">
                    <span className="font-display text-sm font-semibold text-[#9A6A1D]">
                      .AppImage
                    </span>
                    <p className="mt-1 text-xs leading-relaxed text-[#6E5C4D]">
                      Single portable file. Mark executable, double-click, and carry it on a
                      USB stick between distros.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[#D4E4D2] bg-[#F4F9F3] p-4">
                    <span className="font-display text-sm font-semibold text-[#45704E]">
                      .Flatpak
                    </span>
                    <p className="mt-1 text-xs leading-relaxed text-[#576B5B]">
                      Tidily sandboxed jars from Flathub with automatic updates and zero
                      dependency headaches.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[#E5D4EC] bg-[#FAF5FC] p-4">
                    <span className="font-display text-sm font-semibold text-[#765084]">
                      BYOC Always
                    </span>
                    <p className="mt-1 text-xs leading-relaxed text-[#6B5A73]">
                      Bring Your Own Copy! These GitHub gems pair clean open-source code with
                      the games you already own.
                    </p>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setIsTrayOpen(true)}
                    className="inline-flex items-center gap-2 rounded-full bg-[#D97757] px-5 py-3 text-xs font-semibold text-white transition-all hover:bg-[#C66545] cursor-pointer"
                  >
                    <Bookmark className="h-3.5 w-3.5" />
                    Open My Tray ({savedProjects.length})
                  </button>
                  <button
                    type="button"
                    onClick={loadStarterPack}
                    className="inline-flex items-center gap-2 rounded-full border border-[#E5D8C5] bg-[#FAF4EB] px-5 py-3 text-xs font-semibold text-[#5C4B40] transition-colors hover:bg-[#F1E7D8] cursor-pointer"
                  >
                    <Sparkles className="h-3.5 w-3.5 text-[#DFA446]" />
                    Fill Tray with Starter Pack
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
            </>
          )}
        </div>
      </main>

      {/* Cozy Footer */}
      <footer className="border-t border-[#EDE3D5] bg-[#F7F0E4]/70">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-center sm:flex-row sm:px-8 sm:text-left">
          <div>
            <p className="font-display text-base font-semibold text-[#352A24]">
              Linux<span className="text-[#D97757]">Crack</span>Gaming{' '}
              <span className="font-normal text-[#8D7A6D]">:&apos;)</span>
            </p>
            <p className="mt-1 max-w-md text-xs leading-relaxed text-[#857265]">
              The name is figurative. This catalogue celebrates legitimate open-source
              projects, community ports and Linux gaming tools. Game titles and trademarks
              belong to their respective owners.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-[#6F5D51]">
            <a
              href="https://github.com/cinnabar-mc/cinnabar"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#E6DAC8] bg-[#FFFDF9] px-3.5 py-1.5 transition-colors hover:text-[#B55939]"
            >
              Cinnabar GitHub
            </a>
            <a
              href="https://sober.vinegarhq.org/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#E6DAC8] bg-[#FFFDF9] px-3.5 py-1.5 transition-colors hover:text-[#45704E]"
            >
              Sober (VinegarHQ)
            </a>
            <a
              href="https://github.com/flessan/linuxcrackgaming/issues/new?template=add-project.yml"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#E6DAC8] bg-[#FFFDF9] px-3.5 py-1.5 transition-colors hover:text-[#B55939]"
            >
              Suggest a project
            </a>
            <a
              href="https://github.com/flessan/linuxcrackgaming/issues/new?template=update-project.yml"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#E6DAC8] bg-[#FFFDF9] px-3.5 py-1.5 transition-colors hover:text-[#45704E]"
            >
              Report a correction
            </a>
          </div>
        </div>
      </footer>

      {/* Drawers & Modals */}
      <ProjectDrawer
        project={selectedProject}
        isSaved={selectedProject ? savedIds.includes(selectedProject.id) : false}
        onToggleSave={toggleSave}
        onClose={() => setSelectedProject(null)}
      />

      <TrayDrawer
        isOpen={isTrayOpen}
        savedProjects={savedProjects}
        onClose={() => setIsTrayOpen(false)}
        onRemove={toggleSave}
        onClearAll={() => {
          setSavedIds([]);
          showToast('Cleared your tray');
        }}
        onLoadStarterPack={loadStarterPack}
        onSelectProject={(project) => setSelectedProject(project)}
      />

      {/* Soft playful toast */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full border border-[#E5D5BE] bg-[#352A24] px-4 py-2.5 text-xs font-semibold text-[#FFFDF9] shadow-lg"
        >
          <Check className="h-3.5 w-3.5 text-[#A7D3AE]" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}

export default App;
