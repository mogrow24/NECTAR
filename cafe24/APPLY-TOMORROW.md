# 카페24 적용 가이드 (헤더·탑배너·푸터) — 내일 이어서

## 무엇을 하는가
카페24 **연동값(장바구니 수량·로그인 상태·회사정보 등)은 그대로 유지**하고,
**모양만 우리 NECTAR 디자인**으로 교체합니다.

## 준비된 파일

| 붙여넣을 파일 | 카페24에서 열 파일 | 비고 |
|---|---|---|
| [header-ready.html](header-ready.html) | 레이아웃 → 기본 레이아웃(basic) → **header.html** | 장바구니 수량 `{$basket_count}` 실시간 연동 유지 |
| [topbanner-ready.html](topbanner-ready.html) | 레이아웃 → 기본 레이아웃(basic) → **topbanner.html** | 레드 띠배너. 문구는 모듈에서 수정 가능 |
| [footer-ready.html](footer-ready.html) | 레이아웃 → 기본 레이아웃(basic) → **footer.html** (= '레이아웃 (하단 회사…)') | 회사정보 `{$...}` 연동 유지 |

> 원본 백업은 [skin-source/](skin-source/) 에 있음 (header.html / topbanner.html / footer.html).
> 문제 생기면 해당 원본 내용으로 되돌리면 즉시 복구됩니다.

## 적용 순서 (각 파일 동일)
1. 카페24 관리자 → **디자인(PC)** → **디자인 보관함** → 사용중 스킨 **[편집]**
2. 왼쪽 **전체화면보기** → **레이아웃** → **기본 레이아웃(basic)** 에서 대상 파일 더블클릭
3. 편집창에서 **전체 선택(Ctrl+A) → 삭제** → 준비된 `*-ready.html` 내용 **전체 붙여넣기**
4. **저장** → 우측 **미리보기**로 확인 → 이상 없으면 실서버 반영
5. header → topbanner → footer 순서로 3개 모두 반복

## ⚠️ 적용 후 반드시 확인할 것
- **GNB 메뉴 링크 6개**가 실제 페이지로 가는지 (SHOP / COLLECTION / ABOUT / STOCKIST / EXPERIENCE / CONTACT)
  - 특히 **SHOP** 은 `/product/list.html`(전체상품)로 임시 연결 → 원하는 카테고리 주소로 바꿀 수 있음
  - COLLECTION/ABOUT/STOCKIST/EXPERIENCE/CONTACT 는 라이브 페이지 `/Collection.html` 등으로 연결 (대소문자 주의)
- **장바구니 숫자**가 실제 담은 개수로 표시되는지
- **모바일(980px 이하)** 에서 햄버거 메뉴 열리는지
- PC/모바일 스킨이 분리돼 있으면 **모바일 스킨에도 동일하게 한 번 더** 붙여넣기

## 다음 작업 (그 다음 단계)
- 메인(index) / 상품목록(category) / 상품상세(product) 페이지 리스킨
- 우리 디자인 그리드/레이아웃 + 카페24 상품 진열 모듈 연동
