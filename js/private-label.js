(function () {
  'use strict';

  document.querySelectorAll('[data-copy-code]').forEach(function (copyButton) {
    copyButton.addEventListener('click', function () {
      var code = copyButton.getAttribute('data-copy-code') || '';
      var label = copyButton.querySelector('.pl-copy-label');
      function confirmCopy() {
        if (label) label.textContent = 'Copied!';
        window.setTimeout(function () { if (label) label.textContent = 'Copy'; }, 1800);
      }
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(code).then(confirmCopy, confirmCopy);
      } else {
        var helper = document.createElement('textarea');
        helper.value = code;
        helper.setAttribute('readonly', '');
        helper.style.position = 'fixed';
        helper.style.opacity = '0';
        document.body.appendChild(helper);
        helper.select();
        try { document.execCommand('copy'); } catch (error) { /* Copy remains available to select manually. */ }
        document.body.removeChild(helper);
        confirmCopy();
      }
    });
  });

  var preview = document.getElementById('pl-portal-preview');
  var brandInput = document.getElementById('pl-brand-name');
  var domainInput = document.getElementById('pl-domain-name');
  var status = document.getElementById('pl-studio-status');

  if (preview && brandInput && domainInput) {
    var brandTargets = preview.querySelectorAll('[data-pl-brand]');
    var domainTargets = preview.querySelectorAll('[data-pl-domain]');
    var initialsTarget = preview.querySelector('[data-pl-initials]');

    function cleanBrand(value) {
      return value.trim().replace(/\s+/g, ' ').slice(0, 32) || 'Your Firm Digital';
    }

    function cleanDomain(value) {
      return value.trim().replace(/^https?:\/\//i, '').replace(/\/$/, '').replace(/[^a-z0-9.-]/gi, '').slice(0, 48) || 'invoice.yourfirm.pk';
    }

    function initials(value) {
      var words = value.split(' ').filter(Boolean);
      if (!words.length) return 'YF';
      return (words[0].charAt(0) + (words[1] ? words[1].charAt(0) : words[0].charAt(1) || '')).toUpperCase();
    }

    function updatePreview() {
      var brand = cleanBrand(brandInput.value);
      var domain = cleanDomain(domainInput.value);
      brandTargets.forEach(function (target) { target.textContent = brand; });
      domainTargets.forEach(function (target) { target.textContent = domain; });
      if (initialsTarget) initialsTarget.textContent = initials(brand);
      if (status) status.textContent = 'Preview updated for ' + brand + '.';
    }

    brandInput.addEventListener('input', updatePreview);
    domainInput.addEventListener('input', updatePreview);

    document.querySelectorAll('.pl-swatch').forEach(function (button) {
      button.addEventListener('click', function () {
        document.querySelectorAll('.pl-swatch').forEach(function (swatch) {
          swatch.classList.remove('is-active');
          swatch.setAttribute('aria-pressed', 'false');
        });
        button.classList.add('is-active');
        button.setAttribute('aria-pressed', 'true');
        preview.style.setProperty('--brand', button.getAttribute('data-pl-color'));
        preview.style.setProperty('--brand-deep', button.getAttribute('data-pl-deep'));
        if (status) status.textContent = 'Brand color updated.';
      });
    });
  }

  var homeTabs = document.querySelectorAll('[data-pl-home-tab]');
  var homePanels = document.querySelectorAll('[data-pl-home-panel]');
  if (homeTabs.length && homePanels.length) {
    function activateHomePanel(name, focusTab) {
      homeTabs.forEach(function (tab) {
        var active = tab.getAttribute('data-pl-home-tab') === name;
        tab.classList.toggle('is-active', active);
        tab.setAttribute('aria-selected', active ? 'true' : 'false');
        tab.setAttribute('tabindex', active ? '0' : '-1');
        if (active && focusTab) tab.focus();
      });
      homePanels.forEach(function (panel) {
        var active = panel.getAttribute('data-pl-home-panel') === name;
        panel.hidden = !active;
      });
    }

    homeTabs.forEach(function (tab, index) {
      tab.addEventListener('click', function () {
        activateHomePanel(tab.getAttribute('data-pl-home-tab'), false);
      });
      tab.addEventListener('keydown', function (event) {
        if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
        event.preventDefault();
        var direction = event.key === 'ArrowRight' ? 1 : -1;
        var next = (index + direction + homeTabs.length) % homeTabs.length;
        activateHomePanel(homeTabs[next].getAttribute('data-pl-home-tab'), true);
      });
    });
    activateHomePanel('brand', false);
  }
})();
