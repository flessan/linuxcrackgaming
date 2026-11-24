import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const sourcePath = resolve(root, 'content/projects.md');
const source = await readFile(sourcePath, 'utf8');

const blocks = [...source.matchAll(/\x60\x60\x60json\s*([\s\S]*?)\x60\x60\x60/g)];
if (blocks.length === 0) {
  throw new Error('No project JSON blocks found in content/projects.md');
}

const allowedCategories = new Set(['rewrites', 'runtimes', 'recomp', 'tools']);
const seenIds = new Set();

const projects = blocks.map((match, index) => {
  let project;
  try {
    project = JSON.parse(match[1]);
  } catch (error) {
    throw new Error('Invalid JSON in project block ' + (index + 1) + ': ' + error.message);
  }

  const required = ['id', 'name', 'gameTitle', 'tagline', 'category', 'githubUrl', 'imageUrl', 'imageAlt'];
  for (const field of required) {
    if (typeof project[field] !== 'string' || !project[field].trim()) {
      throw new Error('Project block ' + (index + 1) + ' is missing required field: ' + field);
    }
  }

  if (!allowedCategories.has(project.category)) {
    throw new Error('Unsupported category "' + project.category + '" in ' + project.id);
  }

  if (seenIds.has(project.id)) {
    throw new Error('Duplicate project id: ' + project.id);
  }
  seenIds.add(project.id);

  for (const field of ['githubUrl', 'imageUrl']) {
    let url;
    try {
      url = new URL(project[field]);
    } catch {
      throw new Error('Invalid ' + field + ' URL in ' + project.id);
    }
    if (url.protocol !== 'https:') {
      throw new Error(field + ' must use HTTPS in ' + project.id);
    }
  }

  if (!Array.isArray(project.formats) || project.formats.length === 0) {
    throw new Error('Project ' + project.id + ' must define at least one package format');
  }
  if (!Array.isArray(project.highlights) || !Array.isArray(project.recipes)) {
    throw new Error('Project ' + project.id + ' must define highlights and recipes arrays');
  }

  return project;
});

const payload = JSON.stringify({
  version: 1,
  count: projects.length,
  projects,
}, null, 2) + '\n';

const destinations = [
  resolve(root, 'src/data/projects.generated.json'),
  resolve(root, 'public/api/projects.json'),
];

for (const destination of destinations) {
  await mkdir(dirname(destination), { recursive: true });
  await writeFile(destination, payload, 'utf8');
}

console.log('Generated catalogue JSON for ' + projects.length + ' projects.');
