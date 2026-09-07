# Public assets

공개 저장소에는 **실제로 페이지에서 참조하는 파일만** 둔다. 시안, 미사용
크롭, AI 생성 인물 이미지는 넣지 않는다(한 번 커밋하면 삭제해도 히스토리에
남는다). 저작자·출판사가 제공한 원본을 쓰고, 게시 전에 이용 권리를 확인하며,
alt 텍스트는 해당 이미지의 용도에 맞게 페이지 마크업에 적는다.

## 파일 규칙

- 소문자 ASCII 파일명 (`novel-writing-robot.jpg`)
- 사진은 `.jpg`(폴백) + `.webp`(우선) 쌍으로 두고 마크업에서
  `<picture><source srcset="….webp" type="image/webp"><img src="….jpg" …></picture>`
  로 참조한다. PNG 는 쓰지 않는다 — 사진에서는 5~10배 무겁다.
- 모든 `<img>` 에 원본 픽셀 기준 `width` / `height` 를 적어 로딩 중
  레이아웃이 밀리지 않게 한다.

## 현재 자산

### `hero/` — 홈 히어로 모자이크
- `broadcast-ebs.*` — EBS 「당신의 문해력 플러스」 방송 스틸
- `talk-kaist.*` — KAIST 인간의기원연구소 강연
- `media-art.*` — LACMA, Los Angeles

### `books/` — 표지
출판사·서점 공식 상품 페이지 제공 이미지.
`novel-writing-robot`(『소설 쓰는 로봇』, ISBN 9788932043982),
`embodied-cognition-narratology`(『몸의 인지 서사학』, ISBN 9791158488567),
그 밖에 공동 저서 표지 6종.

### `papers/` — 논문 원문 PDF
학회별 저작권 정책을 확인한 논문만 둔다. 대부분의 국내 학회는 저작권을
학회로 이양받으므로, 넣기 전에 「학술지 저작권 안내 시스템」
(https://copyright.oak.go.kr) 에서 해당 학술지의 저작권자와 셀프아카이빙
정책을 확인한다.

- 파일명은 `<연도>-<영문-슬러그>.pdf` (예: `2024-posthuman-sf-history.pdf`).
  한글·공백·괄호를 URL 에 노출하지 않는다 — 퍼센트 인코딩으로 200자가 넘고,
  NFC/NFD 정규화 차이로 GitHub Pages 에서 404 가 난다.
- 사람이 읽을 이름은 마크업의 `download` 속성으로 준다:
  `<a href="assets/papers/2024-….pdf" download="노대원(2024) - 제목.pdf">PDF</a>`
  (`cv.html` 의 CV 다운로드 링크와 같은 방식)
- 출판사 조판본이 아니라 저자 원고를 넣은 경우 링크 라벨이나 `download`
  이름에 `(저자 원고)` 를 밝힌다.

### 본문 사진
`kaist-human-origins-talk`(연구), `popular-narrative-sf-seminar`(연구),
`broadcast-feature` · `public-feature` · `university-feature` · `media-feature`(강연·언론),
`ebs-future-education`(경력).

### 그 밖
- `favicon.svg` — 파비콘
- `og-lacma.jpg` — SNS 공유 카드 (1200×630 고정)
