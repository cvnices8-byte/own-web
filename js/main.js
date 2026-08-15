/* ============ 状态 ============ */
let lang = localStorage.getItem('lang') || 'zh';
let theme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-lang', lang);
document.documentElement.setAttribute('data-theme', theme);

const t = (key) => (I18N[lang] && I18N[lang][key]) || key;
const tt = (obj) => (obj && (obj[lang] || obj.zh)) || '';
const charts = {}; // 图表实例缓存

/* ============ 渲染函数 ============ */
function renderHeroBadges() {
  const el = document.getElementById('hero-badges');
  el.innerHTML = DATA.heroBadges.map(b => `<span class="badge">${tt(b)}</span>`).join('');
}

function renderAbout() {
  const el = document.getElementById('about-cards');
  el.innerHTML = DATA.about.map(a => `
    <div class="card spotlight about-card reveal">
      <h3><span class="idx">${a.idx}</span>${tt(a)}</h3>
      <p>${tt(a.desc)}</p>
    </div>`).join('');
}

function renderEducation() {
  const el = document.getElementById('edu-timeline');
  el.innerHTML = DATA.education.map(e => `
    <div class="tl-item reveal">
      <div class="tl-time">${e.time}</div>
      <h3>${tt(e.school)}</h3>
      <div class="tl-sub">${tt(e.degree)} · ${tt(e.loc)}</div>
      <ul>${e.points[lang].map(p => `<li>${p}</li>`).join('')}</ul>
    </div>`).join('');
}

function renderSkills() {
  const el = document.getElementById('skills-groups');
  el.innerHTML = DATA.skills.groups.map(g => `
    <div class="group">
      <h3>${tt(g)}</h3>
      <div>${g.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
    </div>`).join('');
}

function renderProjects() {
  const el = document.getElementById('projects-list');
  el.innerHTML = DATA.projects.map((p, i) => `
    <div class="card spotlight project-card reveal" data-id="${p.id}">
      ${(p.cover || p.coverLight) ? `<div class="project-cover">${p.cover ? `<img class="cover-dark" src="${p.cover}" alt="" loading="lazy" />` : ''}${p.coverLight ? `<img class="cover-light" src="${p.coverLight}" alt="" loading="lazy" />` : ''}</div>` : ''}
      <div class="project-head">
        <span class="role-badge">${tt(p.role)}</span>
        ${p.dirs.map(d => `<span class="dir-badge">${tt(d)}</span>`).join('')}
      </div>
      <h3 class="project-title">${tt(p.title)}<span class="en">${p.title.en}</span></h3>
      <p class="project-pain">${tt(p.pain)}</p>
      <div class="project-metrics">
        ${p.metrics.map(m => `<div class="metric"><div class="num" data-count="${m.num}">${m.num}</div><div class="label">${tt(m.label)}</div></div>`).join('')}
      </div>
      <button class="project-toggle" data-target="detail-${i}">▸ ${lang === 'zh' ? '展开详情' : 'Details'}</button>
      <div class="project-detail" id="detail-${i}">
        <ul>${p.points[lang].map(pt => `<li>${pt}</li>`).join('')}</ul>
        ${p.visual ? `<div class="project-chart" id="chart-${p.id}"></div>` : ''}
      </div>
    </div>`).join('');
}

function renderResearch() {
  const el = document.getElementById('research-grid');
  el.innerHTML = `
    <div class="card spotlight reveal">
      <h3 style="color:var(--accent);margin-bottom:12px">${lang === 'zh' ? '研究兴趣' : 'Research Interests'}</h3>
      <ul style="padding-left:18px">${DATA.research.interests[lang].map(i => `<li style="color:var(--text-dim);font-size:14px;margin:6px 0">${i}</li>`).join('')}</ul>
    </div>
    <div class="card spotlight reveal">
      <h3 style="color:var(--accent-2);margin-bottom:12px">${lang === 'zh' ? '在研项目' : 'In Progress'}</h3>
      <p style="color:var(--text-dim);font-size:14px">${lang === 'zh' ? '多模态机器学习在企业财务欺诈检测中的应用研究（独立研究提案，12 个月路线）' : 'Multimodal ML for Corporate Financial Fraud Detection (independent proposal, 12-month roadmap)'}</p>
    </div>
    <div class="card spotlight reveal">
      <h3 style="color:var(--purple);margin-bottom:12px">${lang === 'zh' ? '学术产出' : 'Academic Outputs'}</h3>
      <ul style="padding-left:18px">${DATA.research.output[lang].map(o => `<li style="color:var(--text-dim);font-size:14px;margin:6px 0">${o}</li>`).join('')}</ul>
    </div>`;
}

function renderExperience() {
  const el = document.getElementById('exp-list');
  el.innerHTML = DATA.experience.map(e => `
    <div class="card exp-card reveal ${e.highlight ? 'highlight' : ''}">
      <div class="exp-head">
        <div><h3>${tt(e.org)}</h3><span class="exp-role">${tt(e.role)}</span></div>
        <span class="exp-time">${e.time}</span>
      </div>
      <ul>${e.points[lang].map(p => `<li>${p}</li>`).join('')}</ul>
    </div>`).join('');
}

function renderCampus() {
  const el = document.getElementById('campus-list');
  el.innerHTML = DATA.campus.map(c => `
    <div class="card reveal">
      <h3 style="font-size:17px;margin-bottom:4px">${tt(c.org)}</h3>
      <div class="tl-time" style="font-family:var(--font-mono);font-size:13px;color:var(--accent-2)">${c.time}</div>
      <ul style="padding-left:18px;margin-top:8px">${c.points[lang].map(p => `<li style="color:var(--text-dim);font-size:14px;margin:4px 0">${p}</li>`).join('')}</ul>
    </div>`).join('');
}

function renderCertificates() {
  const el = document.getElementById('cert-list');
  const certs = DATA.certificates.certs.map(c => `
    <div class="cert-item ${c.highlight ? 'highlight' : ''}">
      <span class="cert-ico">${c.ico}</span>
      <div><div class="cert-name">${tt(c)}</div></div>
    </div>`).join('');
  const honors = DATA.certificates.honors.map(h => `
    <div class="cert-item">
      <span class="cert-ico">${h.ico}</span>
      <div><div class="cert-name">${tt(h)}</div></div>
    </div>`).join('');
  el.innerHTML = `<div class="cert-grid">${certs}${honors}</div>`;
}

function renderInterests() {
  const el = document.getElementById('interests-list');
  el.innerHTML = DATA.interests.map(i => `<span class="interest-item">${i.ico} ${tt(i)}</span>`).join('');
}

function renderContact() {
  const el = document.getElementById('contact-grid');
  el.innerHTML = DATA.contact.map(c => `
    <div class="contact-item">
      <div class="c-label">${tt(c.label)}</div>
      <div class="c-value">${c.href ? `<a href="${c.href}" target="_blank" rel="noopener">${c.value}</a>` : c.value}</div>
    </div>`).join('');
}

function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-count]').forEach(el => {
    el.textContent = formatNum(el.getAttribute('data-count'));
  });
}

function formatNum(s) {
  // 纯整数 → 千分位；其他原样
  if (/^\d+$/.test(s)) return Number(s).toLocaleString();
  return s;
}

function renderAll() {
  renderHeroBadges();
  renderAbout();
  renderEducation();
  renderSkills();
  renderProjects();
  renderResearch();
  renderExperience();
  renderCampus();
  renderCertificates();
  renderInterests();
  renderContact();
  applyI18n();
  initCharts();
  bindInteractions();
  observeReveal();
  initSpotlight();
}

/* ============ 图表 ============ */
function initCharts() {
  if (typeof echarts === 'undefined') return;
  renderRadar();
  // 项目图表懒加载：在展开时初始化
}

function renderRadar() {
  const el = document.getElementById('radar-chart');
  if (!el || typeof echarts === 'undefined') return;
  if (charts.radar) charts.radar.dispose();
  const data = DATA.skills.radar[lang];
  const isLight = theme === 'light';
  const accent = isLight ? '#1D7DFA' : '#38BDF8';
  const text = isLight ? '#6B7280' : '#94A3B8';
  charts.radar = echarts.init(el);
  charts.radar.setOption({
    backgroundColor: 'transparent',
    tooltip: {},
    radar: {
      indicator: data.map(d => ({ name: d.name, max: 100 })),
      radius: '65%',
      axisName: { color: text, fontSize: 12 },
      splitArea: { areaStyle: { color: ['transparent'] } },
      splitLine: { lineStyle: { color: isLight ? '#E5E7EB' : 'rgba(148,163,184,0.15)' } },
      axisLine: { lineStyle: { color: isLight ? '#D1D5DB' : 'rgba(148,163,184,0.2)' } }
    },
    series: [{
      type: 'radar',
      data: [{ value: data.map(d => d.v), name: 'Skills', areaStyle: { color: accent, opacity: 0.25 }, lineStyle: { color: accent, width: 2 }, itemStyle: { color: accent } }]
    }]
  });
}

function renderProjectVisual(p) {
  const el = document.getElementById('chart-' + p.id);
  if (!el || charts[p.id]) return;
  const v = p.visual;
  if (!v) return;

  // HTML 类可视化（融合架构 / 流水线 / 分析链 / 模块）
  if (v.type === 'fusion') {
    el.classList.add('visual-html');
    el.innerHTML = `
      <div class="v-title">${tt(v.title)}</div>
      <div class="fusion-branches">
        ${v.branches.map(b => `<div class="fusion-branch"><span class="fb-ico">${b.ico}</span><div class="fb-name">${tt(b.name)}</div><div class="fb-method">${tt(b.method)}</div></div>`).join('')}
      </div>
      <div class="v-arrow">▼</div>
      <div class="fusion-node">${tt(v.fusion)}</div>
      <div class="v-arrow">▼</div>
      <div class="fusion-output">${tt(v.output)}</div>`;
    charts[p.id] = { type: 'html' };
    return;
  }

  if (v.type === 'pipeline') {
    el.classList.add('visual-html');
    el.innerHTML = `
      <div class="v-title">${tt(v.title)}</div>
      <div class="pipeline">
        ${v.steps.map((s, i) => `<div class="pipe-step"><span class="ps-ico">${s.ico}</span><span class="ps-label">${tt(s.label)}</span></div>${i < v.steps.length - 1 ? '<span class="pipe-arrow">→</span>' : ''}`).join('')}
      </div>`;
    charts[p.id] = { type: 'html' };
    return;
  }

  if (v.type === 'chain') {
    el.classList.add('visual-html');
    el.innerHTML = `
      <div class="v-title">${tt(v.title)}</div>
      <div class="chain">
        ${v.steps.map((s, i) => `<div class="chain-step"><div class="cs-name">${tt(s.name)}</div><div class="cs-detail">${tt(s.detail)}</div></div>${i < v.steps.length - 1 ? '<span class="pipe-arrow">→</span>' : ''}`).join('')}
      </div>`;
    charts[p.id] = { type: 'html' };
    return;
  }

  if (v.type === 'modules') {
    el.classList.add('visual-html');
    el.innerHTML = `
      <div class="v-title">${tt(v.title)}</div>
      <div class="modules-grid">
        ${v.modules.map(m => `<div class="module-item"><span class="mi-ico">${m.ico}</span><div class="mi-name">${tt(m.name)}</div><div class="mi-desc">${tt(m.desc)}</div></div>`).join('')}
      </div>`;
    charts[p.id] = { type: 'html' };
    return;
  }

  // bar：ECharts 渲染（高亮最优模型）
  if (typeof echarts === 'undefined') return;
  const isLight = theme === 'light';
  const accent = isLight ? '#1D7DFA' : '#38BDF8';
  const text = isLight ? '#6B7280' : '#94A3B8';
  const border = isLight ? '#E5E7EB' : 'rgba(148,163,184,0.15)';
  charts[p.id] = echarts.init(el);
  const labels = v.labels[lang];
  const data = v.accuracy.map((a, i) => ({
    value: a,
    itemStyle: i === v.highlight
      ? { color: accent, borderRadius: [4, 4, 0, 0] }
      : { color: isLight ? '#BFDBFE' : 'rgba(56,189,248,0.32)', borderRadius: [4, 4, 0, 0] }
  }));
  charts[p.id].setOption({
    backgroundColor: 'transparent',
    title: { text: tt(v.note), textStyle: { color: accent, fontSize: 12, fontWeight: 'normal' }, left: 'center', top: 0 },
    tooltip: { trigger: 'axis', valueFormatter: val => (val * 100).toFixed(2) + '%' },
    grid: { left: 40, right: 16, bottom: 46, top: 34 },
    xAxis: { type: 'category', data: labels, axisLabel: { color: text, rotate: 30, fontSize: 11, interval: 0 }, axisLine: { lineStyle: { color: border } } },
    yAxis: { type: 'value', min: 0.7, max: 0.9, axisLabel: { color: text, fontSize: 11, formatter: val => (val * 100) + '%' }, splitLine: { lineStyle: { color: border } } },
    series: [{ type: 'bar', data: data, barMaxWidth: 26, label: { show: true, position: 'top', color: text, fontSize: 10, formatter: p => (p.value * 100).toFixed(1) + '%' } }]
  });
}

/* ============ 项目展开 ============ */
function bindInteractions() {
  document.querySelectorAll('.project-toggle').forEach(btn => {
    btn.onclick = () => {
      const detail = document.getElementById(btn.getAttribute('data-target'));
      const open = detail.classList.toggle('open');
      btn.textContent = (open ? '▾ ' : '▸ ') + (lang === 'zh' ? '展开详情' : 'Details');
      if (open) {
        const card = btn.closest('.project-card');
        const p = DATA.projects.find(x => x.id === card.getAttribute('data-id'));
        if (p && p.visual) setTimeout(() => renderProjectVisual(p), 50);
      }
    };
  });
}

/* ============ 卡片 spotlight ============ */
function initSpotlight() {
  document.querySelectorAll('.spotlight').forEach(card => {
    if (card.dataset.spotlight) return;
    card.dataset.spotlight = '1';
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      card.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  });
}

/* ============ 滚动 reveal ============ */
let revealObserver;
function observeReveal() {
  if (revealObserver) revealObserver.disconnect();
  revealObserver = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('visible'); revealObserver.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

/* ============ 数字滚动（指标卡） ============ */
function runCountUp() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const s = el.getAttribute('data-count');
    if (!/^\d+$/.test(s)) return; // 仅整数
    const target = parseInt(s, 10);
    if (el.dataset.counted) return;
    el.dataset.counted = '1';
    const dur = 1200, start = performance.now();
    function step(now) {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased).toLocaleString();
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  });
}

/* ============ 鼠标跟随光效 ============ */
function initCursor() {
  const glow = document.getElementById('cursor-glow');
  const dot = document.getElementById('cursor-dot');
  if (!glow || !dot) return;
  if (window.matchMedia('(pointer: coarse)').matches) { glow.style.display = 'none'; dot.style.display = 'none'; return; }
  let mx = innerWidth / 2, my = innerHeight / 2, gx = mx, gy = my, dx = mx, dy = my;
  addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  function loop() {
    gx += (mx - gx) * 0.08; gy += (my - gy) * 0.08;
    dx += (mx - dx) * 0.2; dy += (my - dy) * 0.2;
    glow.style.transform = `translate3d(${gx}px,${gy}px,0)`;
    dot.style.transform = `translate3d(${dx}px,${dy}px,0)`;
    requestAnimationFrame(loop);
  }
  loop();
}

/* ============ 粒子背景 ============ */
function initParticles() {
  const canvas = document.getElementById('particles');
  if (!canvas) return;
  if (window.matchMedia('(max-width: 768px)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const ctx = canvas.getContext('2d');
  let w, h, particles = [];
  const N = 55;
  function resize() { w = canvas.width = innerWidth; h = canvas.height = innerHeight; }
  resize();
  addEventListener('resize', resize);
  const isLight = () => theme === 'light';
  for (let i = 0; i < N; i++) {
    particles.push({ x: Math.random() * innerWidth, y: Math.random() * innerHeight, vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3, r: Math.random() * 1.6 + 0.6 });
  }
  let mx = -9999, my = -9999;
  addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  function tick() {
    if (document.hidden) { requestAnimationFrame(tick); return; }
    ctx.clearRect(0, 0, w, h);
    const lineColor = isLight() ? '29,125,250' : '56,189,248';
    const dotColor = isLight() ? '29,125,250' : '148,163,184';
    particles.forEach(p => {
      // 鼠标吸引
      const ddx = mx - p.x, ddy = my - p.y;
      const dist = Math.hypot(ddx, ddy);
      if (dist < 120 && dist > 0.1) { p.x += (ddx / dist) * 0.4; p.y += (ddy / dist) * 0.4; }
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${dotColor},0.5)`;
      ctx.fill();
    });
    for (let i = 0; i < N; i++) {
      for (let j = i + 1; j < N; j++) {
        const a = particles[i], b = particles[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 110) {
          const alpha = (1 - d / 110) * 0.25;
          ctx.strokeStyle = `rgba(${lineColor},${alpha})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(tick);
  }
  tick();
}

/* ============ 卡通形象悬停摆动 ============ */
function initCharacter() {
  const wrap = document.getElementById('character-wrap');
  if (!wrap) return;
  wrap.addEventListener('mousemove', e => {
    const r = wrap.getBoundingClientRect();
    const rx = ((e.clientY - r.top) / r.height - 0.5) * -10;
    const ry = ((e.clientX - r.left) / r.width - 0.5) * 10;
    wrap.style.transform = `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  });
  wrap.addEventListener('mouseleave', () => { wrap.style.transform = ''; });
}

/* ============ 主题 / 语言切换 ============ */
function initControls() {
  const themeBtn = document.getElementById('theme-toggle');
  themeBtn.addEventListener('click', () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#0A0E14' : '#F7F9FB');
    // 重绘图表以适配主题
    if (typeof echarts !== 'undefined') {
      Object.values(charts).forEach(c => c && c.dispose());
      for (const k in charts) delete charts[k];
      renderRadar();
    }
  });

  const langBtn = document.getElementById('lang-toggle');
  langBtn.addEventListener('click', () => {
    lang = lang === 'zh' ? 'en' : 'zh';
    localStorage.setItem('lang', lang);
    document.documentElement.setAttribute('data-lang', lang);
    langBtn.textContent = lang === 'zh' ? 'EN' : '中';
    // 重绘图表以适配语言
    if (typeof echarts !== 'undefined') {
      Object.values(charts).forEach(c => c && c.dispose());
      for (const k in charts) delete charts[k];
    }
    renderAll();
  });
  langBtn.textContent = lang === 'zh' ? 'EN' : '中';

  const menuBtn = document.getElementById('menu-toggle');
  menuBtn.addEventListener('click', () => {
    document.getElementById('nav-links').classList.toggle('open');
  });
  document.querySelectorAll('#nav-links a').forEach(a => {
    a.addEventListener('click', () => document.getElementById('nav-links').classList.remove('open'));
  });
}

/* ============ 滚动进度条 ============ */
function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  addEventListener('scroll', () => {
    const h = document.documentElement.scrollHeight - innerHeight;
    bar.style.width = (h > 0 ? (scrollY / h) * 100 : 0) + '%';
  }, { passive: true });
}

/* ============ 数字滚动触发 ============ */
let countObserver;
function initCountObserver() {
  countObserver = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { runCountUp(); } });
  }, { threshold: 0.3 });
  document.querySelectorAll('.project-metrics').forEach(el => countObserver.observe(el));
}

/* ============ 启动 ============ */
document.addEventListener('DOMContentLoaded', () => {
  renderAll();
  initCursor();
  initParticles();
  initCharacter();
  initControls();
  initScrollProgress();
  initCountObserver();
  // 窗口尺寸变化时重绘图表
  let rz;
  addEventListener('resize', () => {
    clearTimeout(rz);
    rz = setTimeout(() => Object.values(charts).forEach(c => c && c.resize()), 200);
  });
});
