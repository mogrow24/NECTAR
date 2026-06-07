/* NECTAR 프리뷰 가드 (GitHub Pages 전용)
   - 미러 페이지가 라이브(cafe24/nectarofficial)로 자동 이동(redirect)하는 것 차단
   - 외부 앱스크립트(모렌비/리뷰/푸시/채널 등) 로딩 차단
   - 라이브·외부 도메인으로 가는 링크 클릭도 프리뷰 안에 머물게 차단
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

    // 3) 라이브/외부 도메인으로 가는 링크 클릭 차단 (프리뷰 안에 머무름)
    document.addEventListener('click', function (e) {
      var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
      if (!a) return;
      var href = a.getAttribute('href') || '';
      if (bad.test(href)) { e.preventDefault(); e.stopPropagation(); }
    }, true);
  } catch (e) {}
})();
