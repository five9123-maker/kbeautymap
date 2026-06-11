/* 공용 글로벌 내비게이션 바 — 모든 페이지 상단에 자동 주입
 * 페이지 추가 시 TABS 배열만 수정. 현재 페이지는 URL로 자동 감지. */
(function () {
  const TABS = [
    { href: 'index.html', label: '글로벌 대시보드', color: '#ff5c8a' },
    { href: 'indie.html', label: '인디 워치', color: '#5eead4' },
    { href: 'deals.html', label: '딜 워치', color: '#fbbf24' },
    { href: 'markets.html', label: '마켓', color: '#60a5fa' },
    { href: 'trends.html', label: '성분 레이더', color: '#c084fc' },
    { href: 'calendar.html', label: '캘린더', color: '#fb923c' },
  ];
  const current = location.pathname.split('/').pop() || 'index.html';

  const style = document.createElement('style');
  style.textContent = `
    .gnav {
      display: block; margin: 0; /* 페이지의 header 요소 선택자 무력화 */
      position: sticky; top: 0; z-index: 100;
      background: rgba(14,17,23,.93); backdrop-filter: blur(10px);
      border-bottom: 1px solid #2a3344;
    }
    .gnav-in {
      height: 54px; display: flex; align-items: center; gap: 16px; padding: 0 24px;
    }
    .gnav .brand {
      font-size: 15px; font-weight: 800; color: #e8ecf3; text-decoration: none;
      letter-spacing: -.3px; white-space: nowrap;
    }
    .gnav .brand b { color: #ff5c8a; }
    .gnav .links { display: flex; gap: 2px; margin-left: auto; }
    .gnav .links a {
      position: relative; display: flex; align-items: center; gap: 7px;
      padding: 8px 13px; font-size: 13px; font-weight: 600; color: #8b95a7;
      text-decoration: none; border-radius: 8px; white-space: nowrap; transition: all .15s;
    }
    .gnav .links a .co { width: 6px; height: 6px; border-radius: 50%; }
    .gnav .links a:hover { color: #fff; background: #1c2330; }
    .gnav .links a.on { color: #fff; font-weight: 700; }
    .gnav .links a.on::after {
      content: ''; position: absolute; left: 12px; right: 12px; bottom: -7px;
      height: 2px; border-radius: 2px; background: var(--tabco, #ff5c8a);
    }
    .gnav .ham {
      display: none; margin-left: auto; appearance: none; border: 1px solid #2a3344;
      background: #161b24; color: #e8ecf3; font-size: 17px; line-height: 1;
      width: 38px; height: 38px; border-radius: 9px; cursor: pointer;
    }
    @media (max-width: 860px) {
      .gnav-in { padding: 0 16px; }
      .gnav .ham { display: block; }
      .gnav .links {
        display: none; position: absolute; top: 54px; left: 0; right: 0;
        flex-direction: column; gap: 0; margin: 0; padding: 6px 10px 10px;
        background: #11151d; border-bottom: 1px solid #2a3344;
        box-shadow: 0 16px 30px rgba(0,0,0,.45);
      }
      .gnav .links.open { display: flex; }
      .gnav .links a { padding: 13px 12px; font-size: 14px; border-radius: 9px; }
      .gnav .links a.on { background: #1c2330; }
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
      </div>`;
    document.body.prepend(nav);
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
