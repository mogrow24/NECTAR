/* NECTAR 프리뷰 가드 (GitHub Pages 전용)
   - 미러 페이지가 라이브(cafe24/nectarofficial)로 자동 이동(redirect)하는 것 차단
   - 외부 앱스크립트(모렌비/리뷰/푸시/채널 등) 로딩 차단
   - <base href="https://nectarofficial.com/"> 때문에 내부 GNB/링크가 라이브로
     빠지는 문제를 잡아, 동일한 프리뷰 파일로 이동시킴
   ※ 실제 카페24 스킨에는 포함하지 않습니다. 프리뷰에서만 사용. */
(function () {
  try {
    var bad = /(nectarofficial\.com|\.cafe24\.com|hyapps\.com|alphwidget\.com|api-serv\.net|channel\.io|poxo\.com|cafe24img\.com)/i;

    // 1) 외부 앱스크립트 비활성화 (미러 페이지의 자동 로더)
    window.CAFE24 = window.CAFE24 || {};
    window.CAFE24.APPSCRIPT_ASSIGN_DATA = [];
    window.EC_APPSCRIPT_ASSIGN_DATA = [];

    // 2) 프로그램적 자동 이동 차단
    var L = window.location;
    ['assign', 'replace'].forEach(function (m) {
      try { var o = L[m].bind(L); L[m] = function (u) { if (bad.test('' + u)) return; return o(u); }; } catch (e) {}
    });
    var _open = window.open;
    window.open = function (u) { if (bad.test('' + u)) return null; return _open.apply(window, arguments); };

    // 프리뷰에 존재하는 정적 페이지(파일명 소문자)
    var PAGES = {
      'index.html': 1, 'category-all.html': 1, 'category-gift.html': 1,
      'collection.html': 1, 'about.html': 1, 'contact.html': 1,
      'experience.html': 1, 'stockist.html': 1
    };

    // 라이브로 해석된 URL → 동일한 프리뷰 파일(상대경로) 매핑. 없으면 null(=차단).
    function mapToLocal(u) {
      var seg = (u.pathname || '').split('/').filter(Boolean);
      var q = u.searchParams;
      if (seg.length === 0) return '../renewal/index.html';            // 홈(/) → 리뉴얼 홈
      var last = seg[seg.length - 1].toLowerCase();
      if (last === 'detail.html' && q.get('product_no')) return 'product-' + q.get('product_no') + '.html';
      if (last === 'list.html' && q.get('cate_no')) {
        var c = q.get('cate_no');
        return c === '46' ? 'category-all.html' : 'category-' + c + '.html';
      }
      if (PAGES[last]) return last;
      if (/^category-[\w-]+\.html$/.test(last) || /^product-\d+\.html$/.test(last)) return last;
      return null;
    }

    // 3) 링크 클릭 가로채기
    document.addEventListener('click', function (e) {
      var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
      if (!a) return;
      var raw = a.getAttribute('href') || '';
      // 인페이지 앵커 / 비탐색 스킴은 통과
      if (!raw || raw.charAt(0) === '#' || /^(javascript:|mailto:|tel:)/i.test(raw)) return;

      var resolved;
      try { resolved = new URL(a.href); } catch (err) { return; }

      // 라이브/외부 도메인으로 해석되는 경우만 처리 (그 외 내부 링크는 그대로 통과)
      var isBad = bad.test(resolved.host) || bad.test(raw);
      if (!isBad) return;

      e.preventDefault();
      e.stopPropagation();

      var local = mapToLocal(resolved);
      if (local) {
        // <base> 영향을 받지 않도록 현재 실제 위치 기준으로 이동
        window.location.href = new URL(local, window.location.href).href;
      }
      // local 이 없으면(로그인/장바구니 등) 프리뷰에 머무름
    }, true);
  } catch (e) {}
})();
