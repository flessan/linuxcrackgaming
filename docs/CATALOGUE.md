# Maintaining the project catalogue

The root `README.md` is the single human-readable source of truth. The project index is a normal Markdown table, followed by collapsible Markdown details for entries that need installation commands, highlights, screenshots or additional compatibility notes.

The build script reads that table and produces the generated JSON consumed by the SPA and the public `/api/projects.json` endpoint. Do not edit generated JSON by hand.

## Add a project with a pull request

1. Open `README.md` and find the table between `<!-- lcg:catalog:start -->` and `<!-- lcg:catalog:end -->`.
2. Add a row with all nine columns: project, game/software, category, overview, Linux formats, install, requirements/Steam Deck, technology/license and links.
3. Link the official repository using `[GitHub](https://github.com/owner/repository)`. Website and preview links are optional.
4. Add an expanded detail block between `<!-- lcg:details:start -->` and `<!-- lcg:details:end -->` when you have verified installation commands, highlights or additional technical details.
5. Open a pull request. GitHub Actions parses the README, validates the row and generated API, runs TypeScript and builds the production app.

Valid categories:

- `Engine rewrite`
- `Runtime / launcher`
- `Static recompilation`
- `Compatibility tool`
- `Open-source game`

Valid Linux formats are `.AppImage`, `.Flatpak` and `Native`. Only list formats that are actually available. A table-only row is accepted with conservative defaults; adding a detail block gives the app a richer detail drawer.

## Suggest a project through Issues

Use the [Suggest a project form](https://github.com/flessan/linuxcrackgaming/issues/new?template=add-project.yml). A maintainer reviews the repository, package details and supporting sources first.

When the maintainer applies the `catalogue:approved` label, the `Catalogue issue to PR` workflow:

1. Converts the issue answers into a row in the README catalogue and an expanded detail block.
2. Opens a pull request for review; it does not merge automatically.
3. Dispatches the normal verification workflow against the generated PR branch because GitHub does not recursively trigger pull-request workflows from commits made with the default `GITHUB_TOKEN`.

The workflow creates the `catalogue:approved` label on its first project-submission issue, so the repository owner does not have to create it manually. The repository setting **Settings → Actions → General → Workflow permissions → Allow GitHub Actions to create and approve pull requests** must be enabled for automatic PR creation.

Corrections to an existing entry should use the [Update a catalogue entry form](https://github.com/flessan/linuxcrackgaming/issues/new?template=update-project.yml). Corrections are not applied automatically; a maintainer updates README in a PR.

## Expanded detail blocks

A detail block is a normal Markdown section wrapped in HTML `<details>`. It includes a two-column `Field / Information` table, a Highlights list and one or more `Recipe` sections with fenced shell commands. Use the existing entries in README as the template. The generator reads these blocks by their `<!-- lcg:project:start id="..." -->` marker.

Avoid JSON or YAML blobs in README. Keep prose readable, commands copyable and any uncertainty explicit.

## JSON API

Run:

```sh
npm run generate:catalogue
npm run build
```

The generator writes:

- `src/data/projects.generated.json`
- `public/api/projects.json`

The API response includes `version`, `count` and `projects`. The web app imports the generated module; Cloudflare Pages publishes the static endpoint during deployment.

## Review and safety

- Use official upstream repositories and documentation.
- Do not submit pirated game files, ROMs, proprietary assets or download mirrors.
- Explain when users must provide their own legally obtained game data.
- Do not claim Steam Deck compatibility unless it is tested or documented.
- Keep shell instructions factual and distro-specific. A maintainer must review submitted commands before merging.
