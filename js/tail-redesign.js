(function () {
  "use strict";

  var preview = document.querySelector(".product-v2");
  if (!preview) return;

  var buttons = Array.prototype.slice.call(preview.querySelectorAll("[data-product-view]"));
  var panels = Array.prototype.slice.call(preview.querySelectorAll("[data-product-panel]"));

  function showView(view) {
    buttons.forEach(function (button) {
      var active = button.getAttribute("data-product-view") === view;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-selected", String(active));
      button.setAttribute("tabindex", active ? "0" : "-1");
    });

    panels.forEach(function (panel) {
      var active = panel.getAttribute("data-product-panel") === view;
      panel.hidden = !active;
      panel.classList.toggle("is-active", active);
    });
  }

  buttons.forEach(function (button, index) {
    var view = button.getAttribute("data-product-view");
    var panel = preview.querySelector('[data-product-panel="' + view + '"]');
    var buttonId = "product-v2-tab-" + view;
    var panelId = "product-v2-panel-" + view;

    button.id = buttonId;
    button.setAttribute("aria-controls", panelId);
    panel.id = panelId;
    panel.setAttribute("aria-labelledby", buttonId);

    button.addEventListener("click", function () {
      showView(view);
    });

    button.addEventListener("keydown", function (event) {
      if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
      event.preventDefault();
      var direction = event.key === "ArrowRight" ? 1 : -1;
      var next = (index + direction + buttons.length) % buttons.length;
      buttons[next].focus();
      showView(buttons[next].getAttribute("data-product-view"));
    });
  });

  showView("dashboard");
})();
