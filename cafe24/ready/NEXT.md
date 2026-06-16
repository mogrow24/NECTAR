# 내일 이어서 할 작업 (NECTAR 카페24 리스킨)

복제본(작업용 스킨)에서 진행. 모든 붙여넣기 코드는 `cafe24/ready/`, 원본 백업은 `cafe24/skin-source/`.
원칙: **연동값({$...}·module)은 유지, 모양/메뉴만 NECTAR 디자인.**

## ✅ 어제까지 완료 (적용+확정)
- 헤더 `mundane/html/layout/header.html` ← mundane-header-ready.html
- 푸터 `mundane/html/layout/footer.html` ← mundane-footer-ready.html
- 상품목록 `mundane/html/wireframe/WF_ProductList_11.html` ← WF_ProductList_11-ready.html
  (얇은 그리드선 / 좌상단 뱃지 / 이미지 contain / 상품명16 / 가격20 볼드+원, 별점없음)
- 홈 상품 `WF_MainProduct_11.html` ← WF_MainProduct_11-ready.html (목록과 동일 카드)

## 🟡 1순위 — 상품상세 확인·확정
파일: `WF_ProductDetail_11.html` ← WF_ProductDetail_11-ready.html (코드는 완성됨)
구조: 상단 좌(대표이미지)/우(구매창) 반반 + 상세설명 전체폭 아래 + 리뷰/Q&A/관련상품.

**할 일:** 반드시 **일반 유리잔 상품**으로 확인 (Floral Water Glass, Velora 등).
- 어제 IAán(Experience)만 보여서 깨져 보였음 → Experience는 편집형이라 원래 안 맞음.
- 일반 상품 보는 법:
  1) 편집기 상단에서 **미리보기 상품 변경**(툴바 스크린샷 주면 위치 안내), 또는
  2) 디자인 보관함 → 복제본 **미리보기(눈 아이콘)** → 팝업차단 해제 → 유리잔 상품 클릭
- 확인 후 어색하면 스크린샷 → 조정.

## 🟡 2순위 — Experience 상품(IAán EP.01/02) 별도 처리
- 전체화면 편집형 콘텐츠라 일반 상세 레이아웃과 안 맞음.
- 방향 택1: (a) Experience 전용 레이아웃 따로 만들기 / (b) 해당 상품만 원본 유지.

## ⬜ 3순위 — 공통 레이아웃 통일 (맨 마지막)
파일: 레이아웃 → 기본 레이아웃(basic) → **`layout.html`** 과 **`detail_layout.html`** 둘 다
← layout-unified-ready.html (동일 코드 양쪽에)
효과: 상품목록·상세·장바구니 등 모든 페이지에 **홈과 같은 고정 헤더/푸터** 적용.
※ 헤더/푸터가 mundane에 적용된 뒤 해야 함(이미 됨). 적용 후 장바구니·주문 정상인지 확인.

## 참고
- 카테고리 번호: Object(SHOP)=45, Collection=42, Experience=44, All46/Best47/Glass48/Essential49/Limited53/Gift51 (skin-source/README.md)
- 편집창 분할보기는 더미라 {$변수}·깨진이미지 정상. 실데이터는 미리보기로 확인.
- 문제 시 각 파일 원본은 skin-source/ 에서 복구.
