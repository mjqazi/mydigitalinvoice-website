/* MDI pinwheel "Assemble" reveal for pages without the homepage ecosystem script: plays when the mark scrolls into view, on hover, and every 6 seconds while visible. */
(function () {
  "use strict";
  var marks = Array.prototype.slice.call(document.querySelectorAll(".mdi-pw--assemble"));
  if (!marks.length) return;
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var visible = new Set();
  function play(mark) {
    mark.classList.remove("is-assembling");
    void mark.getBoundingClientRect();            // restart the CSS animation
    mark.classList.add("is-assembling");
  }
  marks.forEach(function (mark) {
    var host = mark.closest("a, button, .dual-modal-brand, .mdi-eco-brand, .dual-portal-logo, .dual-risk-route-core") || mark;
    host.addEventListener("mouseenter", function () { play(mark); });
  });
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { if (!visible.has(e.target)) play(e.target); visible.add(e.target); }
        else visible.delete(e.target);
      });
    }, { threshold: 0.6 });
    marks.forEach(function (m) { io.observe(m); });
  } else {
    marks.forEach(function (m) { visible.add(m); play(m); });
  }
  window.setInterval(function () {
    if (document.hidden) return;
    visible.forEach(play);
  }, 6000);
})();
