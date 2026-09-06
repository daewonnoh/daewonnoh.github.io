/* 좁은 화면에서 상단 하위 메뉴를 여는 토글 버튼.
   기존 드롭다운은 :hover / :focus-within 으로만 열려서, 터치 기기에서는
   상위 링크를 누르면 그대로 페이지가 이동해 버려 열 방법이 없었다.
   데스크톱(641px 이상) 동작은 그대로 두고, 640px 이하에서만 이 버튼을
   노출한다(그 위에서는 CSS 로 display: none). */
(() => {
  'use strict';
  const MOBILE = '(max-width: 640px)';
  const items = document.querySelectorAll('.site-nav li.has-submenu');
  if (!items.length) return;

  const toggles = [];

  items.forEach((li, i) => {
    const link = li.querySelector(':scope > a');
    const menu = li.querySelector(':scope > .nav-dropdown');
    if (!link || !menu) return;

    if (!menu.id) menu.id = 'nav-submenu-' + (i + 1);

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'nav-submenu-toggle';
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-controls', menu.id);
    // 링크 안의 캐럿(▾)은 라벨에서 뺀다. 열림/닫힘은 aria-expanded 가 알린다.
    const label = Array.prototype.filter
      .call(link.childNodes, (n) => !(n.nodeType === 1 && n.classList.contains('nav-caret')))
      .map((n) => n.textContent)
      .join('')
      .trim();
    btn.setAttribute('aria-label', label + ' 하위 메뉴');
    btn.innerHTML = '<span aria-hidden="true">\u25BE</span>';

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const open = li.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', String(open));
      toggles.forEach((o) => {
        if (o.li !== li) {
          o.li.classList.remove('is-open');
          o.btn.setAttribute('aria-expanded', 'false');
        }
      });
    });

    link.after(btn);
    toggles.push({ li, btn });
  });

  const closeAll = () => toggles.forEach((o) => {
    o.li.classList.remove('is-open');
    o.btn.setAttribute('aria-expanded', 'false');
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.site-nav li.has-submenu')) closeAll();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAll();
  });

  // 데스크톱으로 넓어지면 열려 있던 상태를 정리한다.
  const mq = window.matchMedia(MOBILE);
  const onChange = () => { if (!mq.matches) closeAll(); };
  if (mq.addEventListener) mq.addEventListener('change', onChange);
  else if (mq.addListener) mq.addListener(onChange);
})();
