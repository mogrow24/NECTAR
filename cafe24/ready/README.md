# NECTAR 리스킨 — 붙여넣기용 코드 (cafe24/ready/)

연동값(`{$...}`·`module`)은 전부 유지하고 **모양만 NECTAR 디자인**으로 바꾼 코드.
복제본(작업용 스킨)에서 각 파일을 열어 **전체선택(Ctrl+A) → 삭제 → 붙여넣기 → 저장**.

## 적용 매핑

| ready 파일 | 카페24에서 열 파일 |
|---|---|
| [mundane-header-ready.html](mundane-header-ready.html) | mundane/html/layout/**header.html** |
| [mundane-footer-ready.html](mundane-footer-ready.html) | mundane/html/layout/**footer.html** |
| [WF_MainProduct_11-ready.html](WF_MainProduct_11-ready.html) | mundane/html/wireframe/**WF_MainProduct_11.html** |
| [WF_ProductList_11-ready.html](WF_ProductList_11-ready.html) | mundane/html/wireframe/**WF_ProductList_11.html** |
| [WF_ProductDetail_11-ready.html](WF_ProductDetail_11-ready.html) | mundane/html/wireframe/**WF_ProductDetail_11.html** |
| [layout-unified-ready.html](layout-unified-ready.html) | 레이아웃→basic→**layout.html** 과 **detail_layout.html** (둘 다 동일하게) |

> 헤더/푸터를 먼저 적용한 뒤 layout-unified 를 적용해야 상품 페이지가 홈과 같은 헤더/푸터로 통일됩니다.
> (layout-unified 가 mundane header.html/footer.html 을 @import 하기 때문)

## 확인 방법
편집창 분할보기는 더미라 `{$변수}`·깨진이미지·2겹테두리가 보입니다(정상).
**상단 [미리보기] 버튼**으로 복제본 스킨 + 실제 데이터 렌더링을 확인하세요.

## 메뉴 / 카테고리 번호
SHOP=Object(45) · COLLECTION=42 · EXPERIENCE=44 · ABOUT/STOCKIST=콘텐츠페이지 · CONTACT
(상세는 skin-source/README.md 참고)

## 미세조정 남은 것 (미리보기 확인 후)
- 상품카드 테두리/간격, 상세 2단 비율, 옵션 select 높이 등은 실데이터 미리보기 보고 조정
