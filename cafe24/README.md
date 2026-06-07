# Cafe24 붙여넣기용 코드 모음

운영 사이트(Cafe24, nectarofficial.com)에 적용하는 붙여넣기용 코드입니다.
각 파일은 자체 스타일을 포함(scoped)하여 테마 CSS를 건드리지 않습니다.

## PC / 모바일 적용 전략 (중요)

이 리뉴얼 디자인은 **반응형(Responsive)** 입니다 — 하나의 HTML/CSS가 화면 폭에 따라
PC·모바일에 자동 대응합니다(모바일 기준 375px, 980px 이하에서 GNB가 햄버거로 전환).

카페24는 **PC 스킨과 모바일 스킨을 따로** 둘 수도, 하나로 합칠 수도 있어 두 경우로 나뉩니다:

- **권장 · 반응형 스킨(PC=모바일 통합)** — 관리자 → 디자인 → 스킨 설정에서 "반응형/통합"으로
  운영하면, 이 디자인 **한 벌만 적용**하면 PC·모바일 모두 자동 반영됩니다. (별도 모바일 작업 불필요)
- **적응형 스킨(PC·모바일 분리)** — 현재 몰이 PC/모바일 스킨이 분리돼 있다면 둘 중 하나:
  1. 반응형 스킨으로 전환 후 한 벌 적용 (가장 깔끔), 또는
  2. **모바일 스킨에도 동일한 HTML/CSS를 한 번 더 적용**(같은 파일을 모바일 `m/` 스킨에 복사).
     이때도 디자인은 동일하므로 추가 디자인 작업 없이 "같은 코드 복붙"이면 됩니다.

> 즉 분리돼 있어도 **같은 디자인을 모바일 스킨에 그대로 적용**할 수 있게 반응형으로 만들어 뒀습니다.
> 적용 시 위 1)번(반응형 통합)을 권장합니다.

## 모렌비(Morenvy) 배너코드 — 디자인 + 관리자 교체 병행

아래 파일들은 **우리 디자인을 모렌비 배너의 [HTML] 필드에 넣어**, 디자인은 유지하면서
이미지/영상/문구/링크는 모렌비 관리자에서 코드 수정 없이 교체할 수 있게 한 코드입니다.
관리자(arfino) → 배너관리자 → 해당 배너영역 → 1번 배너 → 우측 **[HTML]** 필드에 통째로 붙여넣기.

| 파일 | 배너영역(영역ID) | 비고 |
|------|------|------|
| [morenvy-topbar.html](morenvy-topbar.html) | 상단 공지 띠배너 (`e11a`) | 문구 `{#text_1}`, 링크 `{#link_1}` |
| [morenvy-hero.html](morenvy-hero.html) | 메인 배너 1 (`78b4`) | 브랜드 필름. PC `{#video_1}`(16/9) + 모바일 `{#video_2}`(9/16) = youtu.be/pXa7K_1Dp8I |
| [morenvy-collection.html](morenvy-collection.html) | 컬렉션 (`6472`) | 컬렉션 필름 `{#video_1}` = youtu.be/2mZ-iviYfXA |

> 변수 규칙(모렌비 가이드 준수): 이미지/영상은 경로변수(`{#ImgSrc}`)가 아니라
> **완성형 태그 변수**(`{#imgTag_1}`, `{#video_1}`)를 사용. 영상 자동재생은 음소거(mute) 필요.
> 로더 스크립트는 앱 설치 시 자동 삽입되므로 별도 발급 코드 불필요.

## 푸터 Social 영역

푸터에 **Social** 링크 영역을 추가하기 위한 코드입니다.

| 파일 | 용도 |
|------|------|
| [footer-social.html](footer-social.html) | **세로형 컬럼** (SHOP / CONTENT / HELP 옆에 추가) — 기본 권장 |
| [footer-social-inline.html](footer-social-inline.html) | **가로형 한 줄** (하단 © 카피라이트 줄용, 좁은 영역) |

## 링크

| 채널 | URL |
|------|-----|
| Instagram | https://www.instagram.com/nectarofficial_com/ |
| Kakaotalk | https://pf.kakao.com/_xixiexen |
| Youtube | https://www.youtube.com/@NECTAR_OFFICIAL |

> 모든 링크는 새 탭(`target="_blank"`) + 보안(`rel="noopener"`) 처리됨.

## 적용 방법 (Cafe24 관리자)

1. **Cafe24 관리자 로그인** → 상단 메뉴 **[디자인(PC/모바일)]** → **디자인 보관함** → 사용 중 스킨 **[편집]**
2. 좌측 파일 트리에서 **레이아웃 / 공통 → `footer.html`** (또는 footer 모듈) 열기
3. `#footer` 영역 안에서 원하는 위치를 찾습니다:
   - 세로 컬럼으로 넣을 경우 → 기존 메뉴 컬럼(예: `.section2`의 카테고리 목록) **다음**에
   - 하단 한 줄로 넣을 경우 → 카피라이트/회사정보(`.section1`) 줄 **옆**에
4. 해당 위치에 `footer-social.html`(또는 `footer-social-inline.html`) **전체 내용을 그대로 붙여넣기**
5. **저장** → 화면 우측 미리보기로 확인 → 이상 없으면 **실서버 반영(적용)**

### 모바일 스킨 별도 적용
Cafe24는 PC/모바일 스킨이 분리돼 있습니다. 모바일에도 보이게 하려면
**모바일 스킨의 `footer.html`** 에도 동일하게 한 번 더 붙여넣으세요.
(가로형 `footer-social-inline.html` 이 모바일 폭에 더 자연스럽습니다.)

## 색상 / 스타일 기준 (브랜드 일치)

- 타이틀: `#1a1a1a`, 대문자, letter-spacing `.16em`
- 링크 기본: `#8a857e` (회색) / hover: `#c7172a` (브랜드 레드)
- 모서리 라운드 없음(브랜드 가이드: sharp corners)

스타일을 푸터 공통 CSS로 빼고 싶으면 각 파일의 `<style>` 블록을 스킨 CSS 파일로
옮기고 HTML 본문(`<div>...`)만 footer.html 에 남기면 됩니다.
