/* 공용 페이지 탭 — <nav class="ptabs" data-active="KEY"></nav> 를 채운다 */
(function () {
  const TABS = [
    { key: 'global', href: 'index.html', label: '글로벌 대시보드', color: '#ff5c8a' },
    { key: 'indie', href: 'indie.html', label: '인디 워치', color: '#5eead4' },
    { key: 'deals', href: 'deals.html', label: '딜 워치', color: '#fbbf24' },
    { key: 'markets', href: 'markets.html', label: '마켓', color: '#60a5fa' },
    { key: 'trends', href: 'trends.html', label: '성분 레이더', color: '#c084fc' },
    { key: 'calendar', href: 'calendar.html', label: '캘린더', color: '#fb923c' },
  ];
  const style = document.createElement('style');
  style.textContent = `
    @media (max-width: 880px) {
      nav.ptabs { order: 99; flex-basis: 100%; margin-left: 0; margin-top: 4px;
        overflow-x: auto; -webkit-overflow-scrolling: touch; scrollbar-width: none; }
      nav.ptabs::-webkit-scrollbar { display: none; }
      nav.ptabs a { padding: 7px 12px; font-size: 11.5px; flex-shrink: 0; }
    }`;
  document.head.appendChild(style);
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('nav.ptabs').forEach(nav => {
      const active = nav.dataset.active;
      nav.innerHTML = TABS.map(t =>
        `<a class="${t.key === active ? 'on' : ''}" href="${t.href}"><span class="co" style="background:${t.color}"></span>${t.label}</a>`
      ).join('');
    });
  });
})();
