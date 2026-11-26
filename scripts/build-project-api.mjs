import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const readme = await readFile(resolve(root, 'README.md'), 'utf8');
const allowedCategories = new Set(['rewrites', 'runtimes', 'recomp', 'tools', 'games']);
const allowedFormats = new Set(['.AppImage', '.Flatpak', 'Native']);
const defaultTones = { rewrites: 'peach', runtimes: 'matcha', recomp: 'berry', tools: 'chamomile', games: 'honey' };
const categoryIcons = { rewrites: 'icon:code', runtimes: 'icon:gamepad', recomp: 'icon:cpu', tools: 'icon:wrench', games: 'icon:gamepad' };

function section(startMarker, endMarker) {
  const start = readme.indexOf(startMarker);
  const end = readme.indexOf(endMarker);
  if (start < 0 || end < 0 || end <= start) throw new Error('README.md is missing catalogue markers.');
  return readme.slice(start + startMarker.length, end);
}
function splitTableRow(line) {
  const value = line.trim();
  if (!value.startsWith('|') || !value.endsWith('|')) return null;
  const cells = [];
  let current = '';
  let escaped = false;
  for (let i = 1; i < value.length - 1; i += 1) {
    const char = value[i];
    if (escaped) { current += char; escaped = false; }
    else if (char === '\\') escaped = true;
    else if (char === '|') { cells.push(current.trim()); current = ''; }
    else current += char;
  }
  cells.push(current.trim());
  return cells;
}
function cleanMarkdown(value) {
  return String(value ?? '')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/&amp;/g, '&').replace(/&#124;/g, '|').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/<[^>]*>/g, '')
    .replace(/\*\*/g, '').replace(/__/g, '')
    .replace(/\x60/g, '')
    .replace(/^\s*>\s?/gm, '')
    .trim();
}
function slugify(value) {
  return value.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}
function parseCategory(value) {
  const text = cleanMarkdown(value).toLowerCase();
  if (/open.?source game|simulation|strategy game|space game/.test(text)) return 'games';
  if (/rewrite|reimplementation|engine/.test(text)) return 'rewrites';
  if (/recomp|native port|static/.test(text)) return 'recomp';
  if (/compatibility tool|performance|gpu|overlay|optimizer/.test(text)) return 'tools';
  if (/runtime|launcher|wrapper|game runtime/.test(text)) return 'runtimes';
  throw new Error('Unsupported catalogue category: ' + value);
}
function parseFormats(value) {
  const text = cleanMarkdown(value);
  const found = [];
  if (/\.AppImage|AppImage/i.test(text)) found.push('.AppImage');
  if (/\.Flatpak|Flatpak/i.test(text)) found.push('.Flatpak');
  if (/\bNative\b|distribution package|source build/i.test(text)) found.push('Native');
  return [...new Set(found)];
}
function parseLinks(value) {
  const links = {};
  for (const match of value.matchAll(/\[(GitHub|Website|Preview)\]\((https:\/\/[^)\s]+)\)/gi)) {
    links[match[1].toLowerCase()] = match[2];
  }
  if (!links.github) throw new Error('Every catalogue row needs a [GitHub](https://github.com/...) link.');
  let parsed;
  try { parsed = new URL(links.github); } catch { throw new Error('Invalid GitHub repository URL: ' + links.github); }
  if (parsed.protocol !== 'https:' || parsed.hostname !== 'github.com') throw new Error('Repository links must point to https://github.com/.');
  const parts = parsed.pathname.split('/').filter(Boolean);
  if (parts.length < 2) throw new Error('GitHub URL must include owner and repository: ' + links.github);
  return { ...links, repoSlug: parts.slice(0, 2).join('/') };
}
function parseDetailBlocks(source) {
  const entries = new Map();
  const names = new Map();
  const pattern = /<!-- lcg:project:start id="([a-z0-9-]+)" -->([\s\S]*?)<!-- lcg:project:end -->/g;
  for (const match of source.matchAll(pattern)) {
    const id = match[1];
    const body = match[2];
    const fields = {};
    for (const row of body.matchAll(/^\|\s*([^|]+?)\s*\|\s*([\s\S]*?)\s*\|$/gm)) {
      const key = cleanMarkdown(row[1]).toLowerCase();
      const value = cleanMarkdown(row[2]);
      if (key && key !== 'field' && key !== '---' && value) fields[key] = value;
    }
    const highlightSection = body.match(/\*\*Highlights\*\*\s*([\s\S]*?)(?=\*\*Install options\*\*|<\/details>)/i);
    const highlights = highlightSection
      ? [...highlightSection[1].matchAll(/^\s*-\s+(.+)$/gm)].map(item => cleanMarkdown(item[1])).filter(Boolean)
      : [];
    const recipes = [];
    const recipePattern = /#### Recipe:\s*([^\n]+)\n([\s\S]*?)(?=\n#### Recipe:|\n<\/details>)/g;
    for (const recipeMatch of body.matchAll(recipePattern)) {
      const recipeBody = recipeMatch[2];
      const formatMatch = recipeBody.match(/\*\*Format:\*\*\s*\x60?([^\x60\n]+)\x60?/i);
      const commandMatch = recipeBody.match(/\x60{3}(?:sh|bash|shell)?\s*\n([\s\S]*?)\x60{3}/i);
      const noteMatch = recipeBody.match(/\*\*Note:\*\*\s*([\s\S]*?)$/i);
      if (!formatMatch || !commandMatch) continue;
      const note = noteMatch ? cleanMarkdown(noteMatch[1]) : undefined;
      recipes.push({
        label: cleanMarkdown(recipeMatch[1]),
        format: cleanMarkdown(formatMatch[1]),
        command: commandMatch[1].trim(),
        ...(note ? { note } : {}),
      });
    }
    const entry = { fields, highlights, recipes };
    entries.set(id, entry);
    const summaryStart = body.indexOf('<summary><strong>');
    const summaryEnd = body.indexOf('</strong>', summaryStart);
    if (summaryStart >= 0 && summaryEnd > summaryStart) {
      const displayName = cleanMarkdown(body.slice(summaryStart + 17, summaryEnd)).toLowerCase();
      names.set(displayName, entry);
    }
  }
  return { byId: entries, byName: names };
}
function parseInlineInstall(value, fallbackFormat) {
  const recipes = [];
  const source = String(value ?? '').replace(/<br\s*\/?>/gi, '\n');
  for (const line of source.split(/\n+/).map(item => item.trim()).filter(Boolean)) {
    const match = line.match(/^\*\*([^*]+)\*\*:\s*(?:<code>([\s\S]*?)<\/code>|\x60([^\x60]+)\x60|(.+))$/i);
    if (!match) continue;
    const label = cleanMarkdown(match[1]);
    const command = cleanMarkdown(match[2] ?? match[3] ?? match[4]);
    if (!command || /see (?:expanded|project) details|upstream instructions/i.test(command)) continue;
    const format = /appimage/i.test(label) ? '.AppImage'
      : /flatpak/i.test(label) ? '.Flatpak'
      : /native|arch|debian|fedora|source/i.test(label) ? 'Native'
      : fallbackFormat;
    recipes.push({ label, format, command, note: 'Review this command against upstream documentation before use.' });
  }
  return recipes;
}

const catalogue = section('<!-- lcg:catalog:start -->', '<!-- lcg:catalog:end -->');
const detailIndex = parseDetailBlocks(section('<!-- lcg:details:start -->', '<!-- lcg:details:end -->'));
const details = detailIndex.byId;
const tableLines = catalogue.split(/\r?\n/).map(line => line.trim()).filter(line => line.startsWith('|'));
if (tableLines.length < 3) throw new Error('The README project catalogue table is empty or malformed.');
const headers = splitTableRow(tableLines[0]).map(value => cleanMarkdown(value).toLowerCase());
const requiredHeaders = ['project','game / software','category','overview','linux formats','install','requirements / steam deck','technology / license','links'];
for (const header of requiredHeaders) if (!headers.includes(header)) throw new Error('Missing README catalogue column: ' + header);

const projects = [];
const seenIds = new Set();
const seenNames = new Set();
for (const line of tableLines.slice(2)) {
  if (/^\|\s*:?-{3,}/.test(line)) continue;
  const cells = splitTableRow(line);
  if (!cells || cells.length !== headers.length) throw new Error('Malformed README catalogue row: ' + line);
  const row = Object.fromEntries(headers.map((header,index) => [header,cells[index]]));
  const nameCell = row.project;
  const name = cleanMarkdown(nameCell);
  const gameTitle = cleanMarkdown(row['game / software']);
  const tagline = cleanMarkdown(row.overview);
  if (!name || !gameTitle || !tagline) throw new Error('Project rows need a name, game/software and overview.');
  const links = parseLinks(row.links);
  const candidateId = slugify(name);
  const entry = details.get(candidateId) || detailIndex.byName.get(name.toLowerCase());
  const fields = entry?.fields ?? {};
  const id = fields['catalogue id'] || candidateId;
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id)) throw new Error('Invalid project ID: ' + id);
  if (seenIds.has(id)) throw new Error('Duplicate project ID: ' + id);
  if (seenNames.has(name.toLowerCase())) throw new Error('Duplicate project name: ' + name);
  seenIds.add(id);
  seenNames.add(name.toLowerCase());

  const category = fields['category key'] || parseCategory(row.category);
  if (!allowedCategories.has(category)) throw new Error('Unsupported category "' + category + '" in ' + name);
  const categoryLabel = fields['category label'] || cleanMarkdown(row.category);
  const formats = parseFormats(row['linux formats']);
  if (!formats.length) throw new Error('Project "' + name + '" needs at least one Linux package format.');
  const primaryFormat = fields['primary package'] || formats[0];
  if (!formats.includes(primaryFormat)) throw new Error('Primary package must be listed in Linux formats for ' + name);

  const tech = cleanMarkdown(row['technology / license']);
  const separator = tech.lastIndexOf(' · ');
  const language = fields.technology || (separator > 0 ? tech.slice(0,separator) : tech) || 'See upstream repository';
  const license = fields.license || (separator > 0 ? tech.slice(separator + 3) : 'See upstream repository');
  const reqCell = row['requirements / steam deck'];
  const deckMatch = reqCell.match(/Steam Deck:\s*(Yes|No|Not listed|Unknown)/i);
  const reqText = cleanMarkdown(reqCell.replace(/<br>\s*\*\*Steam Deck:\*\*.*$/i,''));
  const deckDefault = deckMatch ? /^yes$/i.test(deckMatch[1]) : false;
  const imageUrl = fields['preview image'] || links.preview || ('https://github.com/' + links.repoSlug.split('/')[0] + '.png?size=512');
  const inlineRecipes = parseInlineInstall(row.install,primaryFormat);
  const recipes = entry?.recipes?.length ? entry.recipes : inlineRecipes;

  const project = {
    id, name, gameTitle,
    tagline: fields.tagline || tagline,
    description: fields.description || tagline,
    howItWorks: fields['how it works'] || 'See the upstream project documentation for implementation details.',
    category, categoryLabel,
    tone: fields.tone || defaultTones[category],
    language, license,
    githubUrl: links.github,
    ...(links.website || fields['official website'] ? { homepageUrl: fields['official website'] || links.website } : {}),
    repoSlug: links.repoSlug,
    formats, primaryFormat,
    featured: fields.featured ? /^yes|true$/i.test(fields.featured) : /^\*\*/.test(nameCell),
    steamDeckFriendly: fields['steam deck friendly'] ? /^yes|true$/i.test(fields['steam deck friendly']) : deckDefault,
    byocRequirement: fields.requirements || reqText || 'Check upstream documentation for game-data and runtime requirements.',
    highlights: entry?.highlights?.length ? entry.highlights : [tagline],
    recipes,
    vibeNote: fields['vibe note'] || tagline,
    emojiMark: categoryIcons[category],
    imageUrl,
    imageAlt: fields['preview alt'] || (name + ' project logo'),
    imageFit: fields['preview fit'] === 'cover' ? 'cover' : 'contain',
  };
  for (const recipe of project.recipes) {
    if (!allowedFormats.has(recipe.format) || !project.formats.includes(recipe.format)) throw new Error('Recipe "' + recipe.label + '" has an unsupported format for ' + name);
    if (typeof recipe.command !== 'string' || !recipe.command.trim()) throw new Error('Recipe "' + recipe.label + '" needs an install command for ' + name);
  }
  for (const field of ['githubUrl','imageUrl']) {
    let url;
    try { url = new URL(project[field]); } catch { throw new Error('Invalid ' + field + ' in ' + name); }
    if (url.protocol !== 'https:') throw new Error(field + ' must use HTTPS in ' + name);
  }
  projects.push(project);
}
if (!projects.length) throw new Error('No catalogue rows found in README.md.');
const payload = JSON.stringify({ version: 1, count: projects.length, projects }, null, 2) + '\n';
for (const path of ['src/data/projects.generated.json','public/api/projects.json']) {
  const destination = resolve(root,path);
  await mkdir(dirname(destination), { recursive: true });
  await writeFile(destination,payload,'utf8');
}
console.log('Generated catalogue JSON for ' + projects.length + ' README projects.');
