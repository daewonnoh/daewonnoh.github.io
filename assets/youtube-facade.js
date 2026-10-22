/* 홈 유튜브 카드: 처음에는 썸네일만 보여 주고, 누르면 그때 재생기(iframe)를 불러온다.
   JS 가 없으면 링크가 그대로 YouTube 를 새 창으로 연다. */
(() => {
  'use strict';
  let warmed = false;
  const warm = () => {
    if (warmed) return;
    warmed = true;
    ['https://www.youtube-nocookie.com', 'https://www.google.com'].forEach((href) => {
      const l = document.createElement('link');
      l.rel = 'preconnect';
      l.href = href;
      document.head.append(l);
    });
  };
  document.querySelectorAll('.yt-facade[data-yt-id]').forEach((a) => {
    a.addEventListener('pointerover', warm, { once: true });
    a.addEventListener('focus', warm, { once: true });
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const f = document.createElement('iframe');
      f.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(a.dataset.ytId) + '?autoplay=1';
      f.title = a.dataset.ytTitle || 'YouTube 동영상';
      f.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      f.allowFullscreen = true;
      a.replaceWith(f);
      f.focus();
    });
  });
})();
