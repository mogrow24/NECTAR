# 카페24 스킨 원본 백업 + 구조 메모

실서버(nectarofficial.com) 스킨에서 그대로 받아온 **원본**입니다. (수정 금지 / 복구용)

## 받아온 파일

| 파일 | 카페24 경로 | 내용 |
|---|---|---|
| `header.html` | /layout/basic/header.html | 테마 헤더(로고·햄버거·아이콘·카테고리) |
| `topbanner.html` | /layout/basic/topbanner.html | 상단 띠배너(#topBanner) |
| `footer.html` | /layout/basic/footer.html | 회사정보 푸터(Layout_footer) |
| `main-layout.html` | /layout/basic/main.html | **홈 레이아웃** — /mundane 테마 import |
| `layout-common.html` | /layout/basic/layout.html | **공통 레이아웃**(간단 사이드바) |
| `detail-layout.html` | /layout/basic/detail_layout.html(추정) | **공통 레이아웃**(풀 사이드바: 검색필터·게시판·로그인 등) |

## ⭐ 핵심 발견 — 레이아웃이 두 갈래로 나뉨

1. **홈(메인)** → `main.html` → `/mundane/html/layout/header.html`·`footer.html` 불러옴
   → **NECTAR 커스텀 테마** (실제 화면의 NECTAR 헤더는 여기서 나옴)
2. **상품목록·상품상세·장바구니·회원 등** → `layout.html` / `detail_layout.html`
   → **카페24 기본 디자인 그대로** (하단 `hosting by cafe24` 로고, 기본 헤더, 좌측 사이드바)

즉 홈만 디자인됐고 **상품 페이지들은 아직 기본 스킨** 상태일 가능성이 큼.

## 내일 할 일 (확인 + 통일)

1. **어느 헤더가 진짜 보이는지 확정**
   - 홈은 `/mundane/html/layout/header.html` 을 씀 → 이 파일을 받아야 함
   - 우리가 1차로 만든 `header-ready.html`(= /layout/basic/header.html 교체본)이
     실제로 어디에 반영되는지 검증
2. **공통/상세 레이아웃**(`layout.html`·`detail_layout.html`)의 헤더·푸터·사이드바를
   NECTAR 디자인으로 교체 → 상품 페이지도 홈과 통일
3. 아직 못 받은 **내용(content) 파일**:
   - `/mundane/html/layout/header.html`, `footer.html` (홈 실제 헤더/푸터)
   - `/mundane/html/layout/main.html` (홈 본문: 히어로·상품 슬라이더)
   - `/mundane/html/wireframe/WF_ProductList_11.html` (상품목록 그리드)
   - `/mundane/html/wireframe/WF_ProductDetail_11.html` (상품상세)

## ⭐ 실제 카테고리 번호 (mundane-category.html 에서 확정)

| 메뉴 | URL | cate_no |
|---|---|---|
| Collection (The Red Invitation) | /Collection.html?cate_no=42 | 42 |
| Experience | /Experience.html?cate_no=44 | 44 |
| Object (Shop 상위) | /product/list.html?cate_no=45 | 45 |
| └ All | /product/list.html?cate_no=46 | 46 |
| └ Bestseller | /product/list.html?cate_no=47 | 47 |
| └ Glassware | /product/list.html?cate_no=48 | 48 |
| └ Essential | /product/list.html?cate_no=49 | 49 |
| └ Limited Edition | /product/list.html?cate_no=53 | 53 |
| └ Gifts | /product/list.html?cate_no=51 | 51 |
| Brand → About / Stockist | /About.html , /Stockist.html | - |
| Contact | /Contact.html | - |

→ **TODO(내일):** `header-ready.html`·`footer-ready.html` 의 SHOP 링크를
실제 번호로 교체 (SHOP=Object → `/product/list.html?cate_no=45` 또는 46=All).
라이브 메뉴 라벨은 Collection/Experience/Object/Brand/Contact 구조.

## 받은 wireframe / 메뉴 파일
- WF_MainBanner_11.html (홈 히어로), WF_MainProduct_11.html (홈 상품)
- WF_ProductList_11.html (카테고리 목록), WF_SearchResult_11.html (검색결과)
- WF_ProductDetail_11.html (상품상세), WF_ArchiveList_11.html (룩북/outfit)
- mundane-category.html (메뉴 + 카테고리 번호)

## 아직 안 받음 (필요시 내일)
- 상품상세 부속: `/mundane/html/product/detail/*.html` (정보·옵션·버튼·리뷰 등 다수)
- svg 아이콘: `/mundane/html/svg/*.html` (우리 디자인 아이콘으로 대체 가능)
