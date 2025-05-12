#!/usr/bin/env node
/*  csv-to-json.js (case‑preserving)
    ----------------------------------------------------------------------
    Convert one‑file CSV (#DATE, #NODES, #FLOWS) → Sankey JSON.
    • Keeps the exact capitalisation the user typed in `kind`.
    • Validates `kind` case‑insensitively against the four allowed values.
    • Accepts ids or displayNames in flows (case‑sensitive match as typed).
    Usage: node csv-to-json.js <file.csv>
*/
const fs   = require('fs');
const path = require('path');

// Allowed kinds (lower‑case for comparison)
const KIND_SET = new Set([
  'cryptotoken',
  'fiattoken',
  'fiatcollateral',
  'cryptocollateral'
]);

/* ── helpers ───────────────────────────────────────────────────────────────*/
const csvSplit = line => line.split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/g)
                            .map(s => s.replace(/^"|"$/g, '').trim());

const toIso = str => {
  if (/^\d{4}-\d{2}(-\d{2})?$/.test(str)) return str.length === 7 ? `${str}-01` : str;
  const mdy = str.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  return mdy ? `${mdy[3]}-${mdy[1]}-${mdy[2]}` : null;
};

const bail = (msg, row) => { console.error(`Error${row ? ` (row ${row})` : ''}: ${msg}`); process.exit(1); };

/* ── main ───────────────────────────────────────────────────────────────────*/
if (process.argv.length < 3) bail('Usage: node csv-to-json.js <file.csv>');
const csvPath = path.resolve(process.argv[2]);
if (!fs.existsSync(csvPath)) bail(`File not found: ${csvPath}`);

const rawLines = fs.readFileSync(csvPath, 'utf8').split(/\r?\n/);
let section = null, seenDate=false, dateIso='', month='';
const nodes=[], nodeMap=new Map(), displayMap=new Map(), links=[];

const resolveNode = (name,row,role) => nodeMap.has(name)?name : displayMap.get(name) ?? bail(`Unknown ${role} "${name}"`,row);

rawLines.forEach((raw, idx) => {
  const row = idx+1;
  const line = raw.replace(/,+\s*$/, '').trim();
  if (!line) return;

  const first = line.split(',')[0].trim();
  const hdr = first.match(/^#(DATE|NODES|FLOWS)$/i);
  if (hdr){ section = hdr[1].toUpperCase(); if(section==='DATE'&&seenDate) bail('Duplicate #DATE',row); return; }
  if(first.startsWith('#')) return; // comment

  switch(section){
    case 'DATE':{
      if(seenDate) bail('Multiple date rows',row);
      const iso=toIso(csvSplit(line)[0]); if(!iso) bail('Bad date',row);
      dateIso=iso; month=iso.slice(0,7); seenDate=true; break;}
    case 'NODES':{
      const [id,kindRaw,displayName='']=csvSplit(line);
      if(id.toLowerCase()==='id') return; // header
      if(!id||!kindRaw) bail('id & kind required',row);
      const kindKey=kindRaw.toLowerCase();
      if(!KIND_SET.has(kindKey)) bail(`Invalid kind "${kindRaw}"`,row);
      if(nodeMap.has(id)) bail(`Duplicate id "${id}"`,row);
      const node={id,kind:kindRaw, ...(displayName?{displayName}:{})};
      nodes.push(node); nodeMap.set(id,node);
      if(displayName){ if(displayMap.has(displayName)) bail(`Duplicate displayName "${displayName}"`,row); displayMap.set(displayName,id);} break;}
    case 'FLOWS':{
      const [s,t,val]=csvSplit(line);
      if(s.toLowerCase()==='source') return; // header
      if(!s||!t||!val) bail('source,target,value required',row);
      const source=resolveNode(s,row,'source');
      const target=resolveNode(t,row,'target');
      const value=Number(val.replace(/,/g,''));
      if(!Number.isFinite(value)||value<=0) bail('value must be positive',row);
      links.push({source,target,value}); break;}
    default: bail('Data before section header',row);
  }
});
if(!seenDate) bail('Missing #DATE section');
if(!nodes.length) bail('No nodes found');
if(!links.length) bail('No flows found');

const outJson={month,date:dateIso,nodes,links};
const csvDir=path.dirname(csvPath); const staticDir=path.resolve(csvDir,'..','static'); fs.mkdirSync(staticDir,{recursive:true});
const outPath=path.join(staticDir,path.basename(csvPath).replace(/\.csv$/i,'.json'));
fs.writeFileSync(outPath,JSON.stringify(outJson,null,2));
console.log(`✓ JSON written to ${outPath}`);
