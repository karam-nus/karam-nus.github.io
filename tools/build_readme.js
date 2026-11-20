// Regenerates README.md's "Knowledge Base" section from the DATA block in index.html,
// so the site and the README never drift apart. Everything above "## Knowledge Base"
// in README.md is kept as-is.
//
//   node tools/build_readme.js
//
const fs = require('fs');
const path = require('path');
const root = process.argv[2] || path.join(__dirname, '..');
const html = fs.readFileSync(root + '/index.html', 'utf8');
const block = html.slice(html.indexOf('/* ── DATA:START'), html.indexOf('/* ── DATA:END'));
const { cats, repos } = new Function(block + '; return { cats, repos };')();
const byId = Object.fromEntries(repos.map(r => [r.id, r]));
const SITE = 'https://karam-nus.github.io/';
const isOutline = (r, g, ch) => !!(r.draft || g.o || ch.o);
function count(r) {
  if (r.pillGroups) {
    const live = r.pillGroups.filter(g => g.dir).reduce((a, g) => a + g.pills.length, 0);
    const planned = r.pillGroups.filter(g => !g.dir).reduce((a, g) => a + g.pills.length, 0);
    return `${live} metrics across ${r.pillGroups.filter(g => g.dir).length} domains` + (planned ? ` · ${planned} planned` : '');
  }
  let main = 0, app = 0, planned = 0, outline = 0;
  r.groups.forEach(g => g.chs.forEach(ch => {
    if (/^\d+$/.test(ch.n)) main++; else if (/^[A-Z]$/.test(ch.n)) app++;
    if (!ch.u) planned++; else if (isOutline(r, g, ch)) outline++;
  }));
  let s = r.unit ? `${main} ${r.unit}` : `${main} chapters`;
  if (app) s += ` + ${app} ${app === 1 ? 'appendix' : 'appendices'}`;
  if (planned) s += ` · ${planned} planned`;
  if (r.draft) s += ' · outline draft'; else if (outline) s += ` · ${outline} in outline`;
  return s;
}
const fullLabel = { 'LANG MODELLING': 'LANGUAGE MODELLING', 'SOFTWARE': 'SOFTWARE ENGINEERING', 'ML CODING': 'ML CODING 101' };
let out = '## Knowledge Base\n\n';
out += '> Live chapters link to their pages. *(outline)* marks a page that currently holds the chapter plan only; *(planned)* means the page does not exist yet.\n\n';
for (const c of cats) {
  out += `### ${c.name}\n\n`;
  for (const id of c.ids) {
    const r = byId[id], base = SITE + r.id + '/';
    out += `<details>\n<summary><kbd>${fullLabel[r.label] || r.label}</kbd> &nbsp;·&nbsp; ${count(r)} &nbsp;<a href="${base}">↗</a></summary>\n<br>\n\n`;
    if (r.tag) out += r.tag + (r.draft ? ' *Outline draft — chapters are being written.*' : '') + '\n\n';
    if (r.pillGroups) {
      r.pillGroups.forEach(g => {
        const pills = g.pills.map(([l, s]) => g.dir ? `[\`${l}\`](${base}docs/metrics/${g.dir}/${s})` : `\`${l}\``).join(' ');
        out += `**${g.name}**${g.dir ? '' : ' *(planned)*'} · ${pills}\n\n`;
      });
    } else {
      r.groups.forEach(g => {
        if (g.name) out += `**${g.name}**\n\n`;
        const lines = g.chs.map(ch => {
          const title = ch.u ? `[${ch.t}](${base}${ch.u})` : ch.t;
          const flag = !ch.u ? ' *(planned)*' : (isOutline(r, g, ch) && !r.draft ? ' *(outline)*' : '');
          return `\`${ch.n}\` ${title}${flag}${ch.d ? ' · ' + ch.d : ''}`;
        });
        out += lines.join('  \n') + '\n\n';
      });
    }
    out += '</details>\n\n';
  }
  out += '---\n\n';
}
const readme = fs.readFileSync(root + '/README.md', 'utf8');
const head = readme.slice(0, readme.indexOf('## Knowledge Base'));
fs.writeFileSync(root + '/README.md', head + out.replace(/\n---\n\n$/, '\n'));
console.log('README regenerated:', repos.length, 'knowledge bases');
