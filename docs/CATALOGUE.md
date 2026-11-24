# Maintaining the project catalogue

The canonical catalogue lives in [`content/projects.md`](../content/projects.md). The site does not accept project entries in browser storage anymore. New submissions and corrections go through GitHub Issues, then a maintainer updates this Markdown source after review.

## Suggest a project

Open the [Suggest a project issue form](https://github.com/flessan/linuxcrackgaming/issues/new?template=add-project.yml). Include the upstream repository, a factual summary, available Linux formats and a public screenshot or logo URL.

For corrections, use the [Update a catalogue entry form](https://github.com/flessan/linuxcrackgaming/issues/new?template=update-project.yml).

## Add an approved entry

Each entry in `content/projects.md` has a heading and one fenced JSON block. Copy an existing section, keep the JSON valid, and change the fields.

Required fields:

- `id`: unique, lowercase, URL-safe identifier.
- `name` and `gameTitle`: display names.
- `tagline`, `description`, `howItWorks`: factual project information.
- `category`: one of `rewrites`, `runtimes`, `recomp`, `tools`.
- `categoryLabel`, `tone`, `language`, `license`.
- `githubUrl`, `repoSlug`, `formats`, `primaryFormat`.
- `imageUrl` and `imageAlt`: a public HTTPS screenshot or logo.
- `highlights`, `recipes`, `byocRequirement`, `vibeNote`.

Use `imageFit: "cover"` for screenshots and `imageFit: "contain"` for logos or square project icons. The card reserves a fixed aspect ratio so images do not shift the page while loading. If an image URL stops working, the card falls back to its category icon.

Install recipes must be checked against upstream documentation. Do not invent package names or installation commands. Mark uncertain details clearly and omit claims that cannot be verified.

## JSON API

The build script reads the Markdown file and validates required fields, unique IDs, categories, formats and HTTPS URLs. It generates:

- `/api/projects.json` - the public static JSON endpoint.
- `src/data/projects.generated.json` - the generated data module used by the site.

Run:

```sh
npm run generate:catalogue
npm run dev
```

The catalogue is regenerated automatically before `npm run dev` and `npm run build`. Do not edit either generated JSON file by hand; edit `content/projects.md` instead.

The API response shape is:

```json
{
  "version": 1,
  "count": 16,
  "projects": []
}
```
