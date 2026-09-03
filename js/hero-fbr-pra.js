(function () {
  "use strict";

  var stage = document.querySelector(".dual-hero-stage");
  var modal = document.getElementById("dual-invoice-modal");
  if (!stage || !modal) return;

  var switchButtons = Array.prototype.slice.call(stage.querySelectorAll("[data-authority-switch]"));
  var invoiceButtons = Array.prototype.slice.call(stage.querySelectorAll("[data-invoice-open]"));
  var closeButton = modal.querySelector(".dual-modal-close");
  var lastTrigger = null;
  var activeAuthority = "fbr";
  var autoTimer = null;
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var invoiceData = {
    fbr: {
      authority: "FBR Digital Invoice",
      portalTitle: "FBR invoice transmitted and recorded.",
      portalCopy: "Preview the QR-coded invoice, submission response and audit record held against the original transaction.",
      status: "FBR TRANSMITTED",
      invoiceNumber: "INV-000125",
      taxLabel: "Sales tax",
      taxValue: "27,000",
      total: "252,000"
    },
    pra: {
      authority: "PRA eIMS Invoice",
      portalTitle: "PRA invoice transmitted and recorded.",
      portalCopy: "Preview the Punjab service invoice, QR record and PRA eIMS reporting status from the same operating portal.",
      status: "PRA TRANSMITTED",
      invoiceNumber: "INV-000126",
      taxLabel: "PRA tax",
      taxValue: "36,000",
      total: "236,000"
    }
  };

  function setText(selector, value) {
    modal.querySelectorAll(selector).forEach(function (target) {
      target.textContent = value;
    });
  }

  function focusableElements() {
    return Array.prototype.slice.call(modal.querySelectorAll('button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'));
  }

  function setAuthority(authority, fromUser) {
    if (!invoiceData[authority]) return;
    activeAuthority = authority;
    stage.setAttribute("data-active-authority", authority);
    switchButtons.forEach(function (button) {
      var selected = button.getAttribute("data-authority-switch") === authority;
      button.classList.toggle("is-active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });

    var portalAuthority = stage.querySelector("[data-portal-authority]");
    var portalStatus = stage.querySelector("[data-portal-status]");
    var portalRows = stage.querySelectorAll("[data-row-status]");
    if (portalAuthority) portalAuthority.textContent = authority.toUpperCase() + " Invoicing Portal";
    if (portalStatus) portalStatus.textContent = authority.toUpperCase() + " reporting live";
    portalRows.forEach(function (row) { row.textContent = "Transmitted"; });

    if (fromUser) restartAutoCycle();
  }

  function populateModal(authority) {
    var data = invoiceData[authority];
    setText("[data-modal-authority]", data.authority);
    setText("[data-modal-title]", data.portalTitle);
    setText("[data-modal-copy]", data.portalCopy);
    setText("[data-modal-status]", data.status);
    setText("[data-modal-invoice-number]", data.invoiceNumber);
    setText("[data-modal-tax-label]", data.taxLabel);
    setText("[data-modal-tax-value]", data.taxValue);
    setText("[data-modal-total]", data.total);
    modal.setAttribute("data-authority", authority);
  }

  function openModal(authority, trigger) {
    lastTrigger = trigger || null;
    setAuthority(authority, true);
    populateModal(authority);
    document.body.classList.add("dual-invoice-open");
    modal.hidden = false;
    requestAnimationFrame(function () {
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      window.setTimeout(function () { closeButton.focus(); }, reduceMotion ? 0 : 700);
    });
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("dual-invoice-open");
    window.setTimeout(function () {
      modal.hidden = true;
      if (lastTrigger) lastTrigger.focus();
    }, reduceMotion ? 0 : 380);
  }

  function restartAutoCycle() {
    if (autoTimer) window.clearInterval(autoTimer);
    if (reduceMotion) return;
    autoTimer = window.setInterval(function () {
      if (!modal.classList.contains("is-open") && !stage.matches(":hover")) {
        setAuthority(activeAuthority === "fbr" ? "pra" : "fbr", false);
      }
    }, 5200);
  }

  switchButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      setAuthority(button.getAttribute("data-authority-switch"), true);
    });
  });

  invoiceButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      openModal(button.getAttribute("data-invoice-open"), button);
    });
  });

  closeButton.addEventListener("click", closeModal);
  modal.addEventListener("click", function (event) {
    if (event.target === modal) closeModal();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal.classList.contains("is-open")) closeModal();
    if (event.key === "Tab" && modal.classList.contains("is-open")) {
      var focusable = focusableElements();
      if (!focusable.length) return;
      var first = focusable[0];
      var last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  if (!reduceMotion && window.matchMedia("(min-width: 1051px)").matches) {
    var shell = stage.querySelector(".dual-portal-shell");
    var bounds = null;
    var tiltFrame = null;
    var pointerX = 0;
    var pointerY = 0;

    function refreshBounds() {
      bounds = stage.getBoundingClientRect();
    }

    function renderTilt() {
      tiltFrame = null;
      if (!bounds) refreshBounds();
      var x = (pointerX - bounds.left) / bounds.width - .5;
      var y = (pointerY - bounds.top) / bounds.height - .5;
      shell.style.transform = "perspective(1200px) rotateY(" + (x * 1.2) + "deg) rotateX(" + (-y * .8) + "deg)";
    }

    stage.addEventListener("pointerenter", refreshBounds);
    stage.addEventListener("pointermove", function (event) {
      pointerX = event.clientX;
      pointerY = event.clientY;
      if (!tiltFrame) tiltFrame = requestAnimationFrame(renderTilt);
    });
    stage.addEventListener("pointerleave", function () {
      if (tiltFrame) cancelAnimationFrame(tiltFrame);
      tiltFrame = null;
      bounds = null;
      shell.style.transform = "translateZ(0)";
    });
    window.addEventListener("resize", function () { bounds = null; }, { passive: true });
  }

  setAuthority("fbr", false);
  restartAutoCycle();
})();
