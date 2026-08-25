/* common.js — 主题、顶栏/页脚注入、通用助手（依赖 library.js） */
(function(){
  // ---- theme ----
  try{
    const t = localStorage.getItem('theme');
    if(t) document.documentElement.setAttribute('data-theme', t);
  }catch(e){}
})();
function toggleTheme(){
  const cur = document.documentElement.getAttribute('data-theme');
  const isDark = cur ? cur==='dark' : window.matchMedia('(prefers-color-scheme:dark)').matches;
  const next = isDark ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  try{ localStorage.setItem('theme', next); }catch(e){}
}
function esc(s){ return String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

// ---- badge helpers ----
function catDot(cat){ return `<span class="cat-dot" style="background:${CAT_COLOR[cat]||'#999'}"></span>`; }
function catName(cat){ return CATS[cat]||cat; }
function stTag(id){ const s=STATUS[id]||'struct'; return `<span class="tag st-${s}">${ST_LABEL[s]}</span>`; }
function priTag(p){ return `<span class="pri pri-${p}">P${p}</span>`; }
function accTag(acc){ return `<span class="tag tag-soft">${ACC_LABEL[acc]||acc}</span>`; }

// ---- nav + footer injection ----
const NAV_ICONS = {
  home:'<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/>',
  fill:'<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
  view:'<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"/><path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3"/>',
  docs:'<path d="M4 4h11l5 5v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"/><path d="M14 4v6h6"/>'
};
function buildNav(active){
  const links = [['home','index.html','主页'],['fill','fill.html','填写'],['view','view.html','查看'],['docs','docs.html','综述']];
  const linkHtml = links.map(([k,href,label])=>
    `<a href="${href}" class="${active===k?'active':''}"${active===k?' aria-current="page"':''}>${label}</a>`).join('');
  return `<div class="nav"><div class="nav-inner">
    <a href="index.html" class="brand"><span class="logo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 0 1 12 0v1"/></svg></span>人格测评量表库</a>
    <nav class="nav-links">${linkHtml}</nav>
    <div class="nav-spacer"></div>
    <div class="nav-search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.5" y2="16.5"/></svg>
      <input type="text" id="navSearch" placeholder="搜索量表…" aria-label="搜索量表" autocomplete="off"></div>
    <button class="theme-btn" onclick="toggleTheme()" title="切换深/浅色" aria-label="切换主题">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19"/></svg>
    </button>
  </div></div>`;
}
function buildFooter(){
  return `<footer class="footer"><div class="wrap">
    <span>人格测评量表库 · 共 ${LIB.length} 个量表 / ${CAT_ORDER.length} 大流派 · 数据基于公开学术调研</span>
    <span>题项均转录自公开来源并经核实 · <a href="docs.html">领域综述</a> · 仅供研究与自我了解，非临床诊断</span>
  </div></footer>`;
}
function mountChrome(active){
  const nav = document.getElementById('nav'); if(nav) nav.outerHTML = buildNav(active);
  const ft = document.getElementById('footer'); if(ft) ft.outerHTML = buildFooter();
  const s = document.getElementById('navSearch');
  if(s) s.addEventListener('keydown',e=>{ if(e.key==='Enter'){ location.href='view.html?q='+encodeURIComponent(s.value.trim()); }});
}
