# 노대원 홈페이지

문학평론가·성균관대학교 국어국문학과 교수 노대원의 개인 홈페이지.
<https://daewonnoh.github.io>

빌드 도구 없이 정적 HTML 로만 되어 있다. `main` 에 push 하면 GitHub Pages 가
그대로 배포한다.

```
index.html            홈
books.html            저서 — 단행본 / 공동 저서
research.html         연구 — 논문·이슈페이퍼·리포트 / 연구 프로젝트 / 학술발표·토론
criticism.html        평론 — 문학평론 / 촌평(리뷰) / 연재 평론 / 소설집 해설 / 서평
speaking-media.html   강연·언론 — 방송 출연 / 대중 강연 / 대학 강연 / 언론 기고·인터뷰
about.html            경력 — 학력·경력·수상 / 교육 경력 / 학술·사회 봉사
cv.html               공개 CV (PDF 내려받기 + 상세 페이지 허브)
contact.html          문의 폼
en.html               English
404.html              없는 주소
styles.css            전체 스타일 (단일 파일)
assets/site-nav.js    좁은 화면 하위 메뉴 토글
assets/               이미지 — 규칙은 assets/README.md
Dae-won-Noh-CV.pdf    공개용 CV
```

각 페이지 상단의 `<link rel="stylesheet" href="styles.css?v=…">` 쿼리는 캐시
무효화용이다. **CSS 를 고치면 9개 페이지 + 404.html 의 값을 함께 올린다.**
한 페이지만 다른 값을 쓰면 그 페이지만 옛 CSS 를 잡는다.

## 공개 원칙

- 연구비 금액, 전화번호, 상세 주소는 공개 목록에 넣지 않는다.
- 원본 DOCX, 작업 폴더, 미사용 사진·시안은 이 저장소에 넣지 않는다.
  한 번 커밋하면 삭제해도 히스토리에 영구히 남는다(`.gitignore` 참고).
- `googled19413157dff7d73.html` 은 Search Console 소유 확인 파일이다. 지우지 않는다.

## 문의 폼

`contact.html` 이 Google Apps Script 웹앱으로 POST 한다. 스크립트 원본은
저장소 밖(`apps-script/Code.gs`)에 있고, 받는 주소는 `novum@skku.edu` 다.
폼은 응답의 `{ ok }` 를 읽어 성공·실패를 구분하고, CORS 가 막히는 환경에서만
숨은 iframe 으로 넘어간다.

## 확인

브라우저에서 `index.html` 을 직접 열면 상대 경로가 그대로 동작한다.
`404.html` 은 없는 경로에서도 열려야 해서 자산을 절대 경로로 참조하므로
로컬 정적 서버로 확인한다.

고칠 때 함께 보는 것:

- 모바일(375px) — 목록이 1열로 접히고 한국어가 어절 단위로 끊기는지
- 641~980px — 상단 메뉴가 가로로 넘치지 않는지
- 하위 메뉴 — 640px 이하에서 토글 버튼으로 열리는지
- 이미지 — `<picture>` 의 webp 가 잡히는지, `width`/`height` 가 있는지
