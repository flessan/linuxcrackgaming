import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const readmePath = resolve(process.cwd(), 'README.md');
const issueBody = process.env.ISSUE_BODY || '';
const issueNumber = process.env.ISSUE_NUMBER || '';
const readme = await readFile(readmePath, 'utf8');
if (!issueBody || !/^\d+$/.test(issueNumber)) throw new Error('Missing issue body or issue number.');

function parseSections(body) {
  const sections = new Map();
  for (const chunk of body.split(/^###\s+/m).slice(1)) {
    const newline = chunk.indexOf('\n');
    if (newline < 0) continue;
    const title = chunk.slice(0,newline).trim();
    const value = chunk.slice(newline+1).trim();
    sections.set(title,value === '_No response_' ? '' : value);
  }
  return sections;
}
const answers = parseSections(issueBody);
function answer(label,required=true) {
  const value = answers.get(label) || '';
  if (required && !value) throw new Error('Issue is missing: ' + label);
  return value;
}
function cleanValue(value) {
  const fence = String.fromCharCode(96).repeat(3);
  return String(value||'').replace(new RegExp('^'+fence+'[a-zA-Z0-9_-]*\\s*','m'),'')
    .replace(new RegExp('\\s*'+fence+'$','m'),'').trim();
}
function safeText(value) {
  return String(value||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\|/g,'&#124;').trim();
}
function tableCell(value) {
  return safeText(String(value||'').replace(/\r?\n/g,'<br>'));
}
function slugify(value) {
  return value.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
}
function checkedHttps(value,field,required=false) {
  if (!value) { if (required) throw new Error(field+' is required.'); return ''; }
  let parsed;
  try { parsed = new URL(value); } catch { throw new Error(field+' must be a valid URL.'); }
  if (parsed.protocol!=='https:') throw new Error(field+' must use HTTPS.');
  return parsed.toString().replace(/[()]/g,char=>char==='('? '%28':'%29');
}

const name=cleanValue(answer('Project name'));
const gameTitle=cleanValue(answer('Game or software'));
const repoUrl=checkedHttps(cleanValue(answer('GitHub repository URL')),'GitHub repository URL',true);
const categoryLabel=cleanValue(answer('Catalogue category'));
const packageAnswers=answer('Available Linux package formats').split(/\r?\n/).map(line=>line.replace(/^\s*-\s*/,'').trim()).filter(Boolean);
const summary=cleanValue(answer('What does this project do?'));
const install=cleanValue(answer('How can someone install this project on Linux?'));
const requirements=cleanValue(answer('Game files and other requirements'));
const deckAnswer=cleanValue(answer('Steam Deck compatibility'));
const technology=cleanValue(answer('Technology or language',false))||'See upstream repository';
const license=cleanValue(answer('License',false))||'Not stated';
const website=checkedHttps(cleanValue(answer('Official website',false)),'Official website');
const image=checkedHttps(cleanValue(answer('Project screenshot or logo URL',false)),'Screenshot or logo URL');
const sources=cleanValue(answer('Supporting sources'));

const categoryMap={
  'Engine rewrite':{key:'rewrites',tone:'peach'},
  'Launcher or runtime':{key:'runtimes',tone:'matcha'},
  'Native recompilation':{key:'recomp',tone:'berry'},
  'Compatibility tool':{key:'tools',tone:'chamomile'},
  'Open-source game':{key:'games',tone:'honey'}
};
const category=categoryMap[categoryLabel];
if (!category) throw new Error('Unsupported category: '+categoryLabel);
const formatMap={Flatpak:'.Flatpak',AppImage:'.AppImage','Native distribution package':'Native','Source build only':'Native'};
const formats=[...new Set(packageAnswers.map(value=>formatMap[value]).filter(Boolean))];
if (!formats.length || packageAnswers.includes('Not sure')) throw new Error('Select at least one confirmed package format instead of "Not sure".');
const parsedRepo=new URL(repoUrl);
if (parsedRepo.hostname!=='github.com') throw new Error('Use the official upstream GitHub repository.');
const parts=parsedRepo.pathname.split('/').filter(Boolean);
if (parts.length<2) throw new Error('Repository URL must include owner and repository.');
const repoSlug=parts.slice(0,2).join('/');
const normalizedRepo='https://github.com/'+repoSlug;
const id=slugify(name);
if (!id) throw new Error('Could not make a catalogue ID from the project name.');
if (!readme.includes('<!-- lcg:catalog:start -->') || !readme.includes('<!-- lcg:catalog:end -->')) throw new Error('README catalogue markers were not found.');
if (readme.toLowerCase().includes(normalizedRepo.toLowerCase())) throw new Error('This upstream repository is already listed.');
if (readme.includes('<!-- lcg:project:start id="'+id+'" -->')) throw new Error('This catalogue ID is already listed.');

const deck=deckAnswer.startsWith('Yes')?'Yes':deckAnswer.startsWith('No')?'No':'Not listed';
const links=['[GitHub]('+normalizedRepo+')',website?'[Website]('+website+')':'',image?'[Preview]('+image+')':''].filter(Boolean).join(' · ');
const primaryFormat=formats[0];
const requirementCell=requirements+'<br>**Steam Deck:** '+deck;
const values=[name,gameTitle,categoryLabel,summary,formats.join(', '),'See expanded install options below.',requirementCell,technology+' · '+license,links];
const row='| '+values.map(tableCell).join(' | ')+' |';
const preview=image||('https://github.com/'+parts[0]+'.png?size=512');
const fence=String.fromCharCode(96).repeat(3);
const detail=[
  '<!-- lcg:project:start id="'+id+'" -->',
  '<a id="'+id+'"></a>',
  '<details>',
  '<summary><strong>'+safeText(name)+'</strong> — '+safeText(gameTitle)+'</summary>',
  '',
  '| Field | Information |',
  '| --- | --- |',
  '| Catalogue ID | \x60'+id+'\x60 |',
  '| Tagline | '+tableCell(summary)+' |',
  '| Description | '+tableCell(summary)+' |',
  '| How it works | See the upstream project documentation for implementation details. |',
  '| Category key | \x60'+category.key+'\x60 |',
  '| Category label | '+safeText(categoryLabel)+' |',
  '| Tone | \x60'+category.tone+'\x60 |',
  '| Technology | '+tableCell(technology)+' |',
  '| License | '+tableCell(license)+' |',
  '| Primary package | \x60'+primaryFormat+'\x60 |',
  '| Featured | No |',
  '| Steam Deck friendly | '+(deck==='Yes'?'Yes':'No')+' |',
  '| Requirements | '+tableCell(requirements)+' |',
  '| Vibe note | '+tableCell(summary)+' |',
  '| Official website | '+website+' |',
  '| Preview image | '+preview+' |',
  '| Preview alt | '+safeText(name+' project logo or screenshot')+' |',
  '| Preview fit | \x60contain\x60 |',
  '',
  '**Highlights**',
  '',
  '- '+tableCell(summary),
  '',
  '**Install options**',
  '',
  '#### Recipe: Submitted Linux installation instructions',
  '',
  '**Format:** \x60'+primaryFormat+'\x60',
  '',
  fence+'sh',
  install.replaceAll(fence,'\\'+fence),
  fence,
  '',
  '**Note:** Submitted in issue #'+issueNumber+'. A maintainer must verify this against upstream documentation before merging.',
  '',
  '**Supporting sources**',
  '',
  ...sources.split(/\r?\n/).map(line=>'- '+safeText(line.replace(/^\s*-\s*/,''))),
  '',
  '</details>',
  '<!-- lcg:project:end -->'
].join('\n');

let updated=readme.replace('<!-- lcg:catalog:end -->',row+'\n<!-- lcg:catalog:end -->');
if (!updated.includes('<!-- lcg:details:end -->')) throw new Error('README details marker was not found.');
updated=updated.replace('<!-- lcg:details:end -->',detail+'\n<!-- lcg:details:end -->');
await writeFile(readmePath,updated,'utf8');
console.log('Added '+name+' ('+id+', '+repoSlug+') from issue #'+issueNumber+' to README.md.');
