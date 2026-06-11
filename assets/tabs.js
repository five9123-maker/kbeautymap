/* 공용 글로벌 내비게이션 바 — 모든 페이지 상단에 자동 주입
 * 페이지 추가 시 TABS 배열만 수정. 현재 페이지는 URL로 자동 감지. */
(function () {
  /* ---------- 테마 ---------- */
  const theme = localStorage.getItem('kb-theme') === 'light' ? 'light' : 'dark'; // 기본 다크
  document.documentElement.dataset.theme = theme;
  const PAL = {
    light: {
      bg: '#f6f7fa', text: '#1c2330', muted: '#5b6577', dim: '#8a94a6', split: '#e3e7ef',
      tooltipBg: '#ffffff', tooltipBorder: '#d8deea', mapArea: '#e6eaf2', mapBorder: '#f6f7fa',
      green: '#15803d', red: '#dc2626', accent: '#e0407a', accent2: '#c0316b',
      gold: '#b45309', goldSoft: '#92400e', violetSoft: '#6d28d9', violet: '#7c3aed', mint: '#0d9488',
      series20: ['#0d9488','#e0407a','#b45309','#4f46e5','#15803d','#dc2626','#0369a1','#a21caf','#c2410c','#4d7c0f','#0e7490','#be185d','#7c3aed','#a16207','#047857','#b91c1c','#1d4ed8','#9f1239','#166534','#854d0e'],
    },
    dark: {
      bg: '#0e1117', text: '#e8ecf3', muted: '#8b95a7', dim: '#5b6678', split: '#222a38',
      tooltipBg: '#1c2330', tooltipBorder: '#2a3344', mapArea: '#222a38', mapBorder: '#0e1117',
      green: '#4ade80', red: '#f87171', accent: '#ff5c8a', accent2: '#ffb3c6',
      gold: '#fbbf24', goldSoft: '#fde68a', violetSoft: '#ddd6fe', violet: '#c084fc', mint: '#5eead4',
      series20: ['#5eead4','#ff5c8a','#fbbf24','#818cf8','#4ade80','#f87171','#38bdf8','#e879f9','#fb923c','#a3e635','#22d3ee','#f472b6','#c084fc','#facc15','#34d399','#fca5a5','#60a5fa','#fda4af','#86efac','#fcd34d'],
    },
  };
  window.KB = { theme, c: PAL[theme] };

  const TABS = [
    { href: 'index.html', label: '글로벌 대시보드', color: '#ff5c8a' },
    { href: 'indie.html', label: '인디 워치', color: '#5eead4' },
    { href: 'deals.html', label: '딜 워치', color: '#fbbf24' },
    { href: 'markets.html', label: '마켓', color: '#60a5fa' },
    { href: 'trends.html', label: '성분 레이더', color: '#c084fc' },
    { href: 'calendar.html', label: '캘린더', color: '#fb923c' },
    { href: 'france.html', label: '프랑스 케이스', color: '#3b82f6' },
  ];
  const current = location.pathname.split('/').pop() || 'index.html';

  const style = document.createElement('style');
  style.textContent = `
    .gnav {
      display: block; margin: 0;
      position: sticky; top: 0; z-index: 100;
      background: var(--navbg, rgba(14,17,23,.93)); backdrop-filter: blur(10px);
      border-bottom: 1px solid var(--border, #2a3344);
    }
    .gnav-in { height: 54px; display: flex; align-items: center; gap: 12px; padding: 0 24px; }
    .gnav .brand { font-size: 15px; font-weight: 800; color: var(--text, #e8ecf3); text-decoration: none; letter-spacing: -.3px; white-space: nowrap; }
    .gnav .brand b { color: var(--accent, #ff5c8a); }
    .gnav .links { display: flex; gap: 2px; margin-left: auto; }
    .gnav .links a {
      position: relative; display: flex; align-items: center; gap: 7px;
      padding: 8px 13px; font-size: 13px; font-weight: 600; color: var(--muted, #8b95a7);
      text-decoration: none; border-radius: 8px; white-space: nowrap; transition: all .15s;
    }
    .gnav .links a .co { width: 6px; height: 6px; border-radius: 50%; }
    .gnav .links a:hover { color: var(--text, #fff); background: var(--panel2, #1c2330); }
    .gnav .links a.on { color: var(--text, #fff); font-weight: 700; }
    .gnav .links a.on::after {
      content: ''; position: absolute; left: 12px; right: 12px; bottom: -7px;
      height: 2px; border-radius: 2px; background: var(--tabco, #ff5c8a);
    }
    .gnav .thsw {
      position: relative; appearance: none; border: 1px solid var(--border, #2a3344);
      background: var(--panel2, #1c2330); width: 58px; height: 28px; border-radius: 99px;
      cursor: pointer; flex-shrink: 0; display: flex; align-items: center;
      justify-content: space-between; padding: 0 7px; transition: background .2s;
    }
    .gnav .thsw .ic { font-size: 12px; line-height: 1; }
    .gnav .thsw .knob {
      position: absolute; top: 2px; left: 2px; width: 22px; height: 22px; border-radius: 50%;
      background: #fff; box-shadow: 0 1px 4px rgba(0,0,0,.35); transition: left .22s cubic-bezier(.3,.9,.4,1);
    }
    html[data-theme="dark"] .gnav .thsw .knob { left: calc(100% - 24px); background: #ff5c8a; }
    .gnav .thbtn {
      display: none; appearance: none; border: 1px solid var(--border, #2a3344); background: var(--panel, #161b24);
      color: var(--text, #e8ecf3); font-size: 14px; line-height: 1;
      width: 38px; height: 38px; border-radius: 9px; cursor: pointer; flex-shrink: 0;
    }
    .gnav .ham {
      display: none; appearance: none; border: 1px solid var(--border, #2a3344);
      background: var(--panel, #161b24); color: var(--text, #e8ecf3); font-size: 17px; line-height: 1;
      width: 38px; height: 38px; border-radius: 9px; cursor: pointer;
    }
    @media (max-width: 860px) {
      .gnav-in { padding: 0 16px; }
      .gnav .ham { display: block; margin-left: auto; }
      .gnav .thsw { display: none; }
      .gnav .thbtn { display: block; }
      .gnav .links {
        display: none; position: absolute; top: 54px; left: 0; right: 0;
        flex-direction: column; gap: 0; margin: 0; padding: 6px 10px 10px;
        background: var(--panel, #11151d); border-bottom: 1px solid var(--border, #2a3344);
        box-shadow: 0 16px 30px rgba(0,0,0,.25);
      }
      .gnav .links.open { display: flex; }
      .gnav .links a { padding: 13px 12px; font-size: 14px; border-radius: 9px; }
      .gnav .links a.on { background: var(--panel2, #1c2330); }
      .gnav .links a.on::after { display: none; }
    }
  `;
  document.head.appendChild(style);

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('nav.ptabs')?.remove(); // 구버전 잔재 제거
    const nav = document.createElement('header');
    nav.className = 'gnav';
    nav.innerHTML = `
      <div class="gnav-in">
        <a class="brand" href="index.html">💄 <b>K-Beauty</b> 대시보드</a>
        <button class="ham" aria-label="메뉴 열기" aria-expanded="false">☰</button>
        <nav class="links">${TABS.map(t =>
          `<a class="${t.href === current ? 'on' : ''}" href="${t.href}" style="--tabco:${t.color}">
             <span class="co" style="background:${t.color}"></span>${t.label}</a>`).join('')}
        </nav>
        <button class="thsw" role="switch" aria-checked="${theme === 'dark'}" aria-label="다크 모드 토글" title="다크/라이트 전환">
          <span class="ic">☀️</span><span class="ic">🌙</span><span class="knob"></span>
        </button>
        <button class="thbtn" aria-label="테마 전환" title="다크/라이트 전환">${theme === 'dark' ? '☀️' : '🌙'}</button>
      </div>`;
    document.body.prepend(nav);
    const flip = () => {
      localStorage.setItem('kb-theme', theme === 'dark' ? 'light' : 'dark');
      location.reload(); // 차트 색상 재초기화
    };
    nav.querySelector('.thsw').addEventListener('click', flip);
    nav.querySelector('.thbtn').addEventListener('click', flip);
    const ham = nav.querySelector('.ham');
    const links = nav.querySelector('.links');
    ham.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      ham.setAttribute('aria-expanded', open);
      ham.textContent = open ? '✕' : '☰';
    });
    document.addEventListener('click', e => {
      if (!nav.contains(e.target) && links.classList.contains('open')) {
        links.classList.remove('open');
        ham.textContent = '☰';
        ham.setAttribute('aria-expanded', 'false');
      }
    });
  });
})();
