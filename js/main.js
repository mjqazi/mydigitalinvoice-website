/**
 * My Digital Invoice - Landing Page JavaScript
 * Pure vanilla JS for Hostinger static hosting
 * v3 - Performance + robustness: defer-safe, event delegation, no inline onclick dependency
 */

(function() {
  'use strict';

  // ==========================================
  // Update Current Year in Footer
  // ==========================================
  var yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // ==========================================
  // Navigation Toggle (Mobile)
  // ==========================================
  var navToggle = document.getElementById('nav-toggle');
  var navMenu = document.getElementById('nav-menu');

  if (navToggle && navMenu) {
    function getFocusableElements() {
      return navMenu.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])');
    }

    function handleFocusTrap(e) {
      if (!navMenu.classList.contains('active')) return;
      var focusableElements = getFocusableElements();
      if (focusableElements.length === 0) return;
      var firstElement = focusableElements[0];
      var lastElement = focusableElements[focusableElements.length - 1];

      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement || document.activeElement === navToggle) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            navToggle.focus();
          }
        }
      }

      if (e.key === 'Escape') {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.focus();
      }
    }

    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
      var isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      if (!isExpanded) {
        var focusableElements = getFocusableElements();
        if (focusableElements.length > 0) {
          setTimeout(function() { focusableElements[0].focus(); }, 100);
        }
      }
    });

    document.addEventListener('keydown', handleFocusTrap);
  }

  // ==========================================
  // Sticky Header on Scroll
  // ==========================================
  var header = document.getElementById('header');

  function handleScroll() {
    if (header) {
      if (window.scrollY > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // ==========================================
  // Smooth Scroll for Anchor Links
  // ==========================================
  document.addEventListener('click', function(e) {
    var anchor = e.target.closest && e.target.closest('a[href^="#"]');
    if (!anchor) return;
    var targetId = anchor.getAttribute('href');
    if (targetId && targetId !== '#') {
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (navMenu) {
          navMenu.classList.remove('active');
        }
        if (navToggle) {
          navToggle.classList.remove('active');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      }
    }
  });

  // ==========================================
  // FAQ Accordion (Only one open at a time)
  // ==========================================
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function(item) {
    item.addEventListener('toggle', function() {
      if (item.open) {
        faqItems.forEach(function(otherItem) {
          if (otherItem !== item) otherItem.open = false;
        });
      }
    });
  });

  // ==========================================
  // Counter Animation for Stats
  // ==========================================
  function animateCounter(counter) {
    var target = parseInt(counter.getAttribute('data-count'), 10);
    var duration = 2000;
    var step = target / (duration / 16);
    var current = 0;
    function updateCounter() {
      current += step;
      if (current < target) {
        counter.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    }
    updateCounter();
  }

  var counters = document.querySelectorAll('[data-count]');
  if (counters.length > 0 && 'IntersectionObserver' in window) {
    var counterObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(function(counter) { counterObserver.observe(counter); });
  } else {
    counters.forEach(animateCounter);
  }

  // ==========================================
  // 3D Tilt Effect for Pricing Cards (desktop only, reduced motion respected)
  // ==========================================
  var prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isDesktop = window.matchMedia && window.matchMedia('(min-width: 1024px)').matches;

  if (!prefersReducedMotion && isDesktop) {
    var tiltCards = document.querySelectorAll('.pricing-card');
    tiltCards.forEach(function(card) {
      var glare = document.createElement('div');
      glare.className = 'card-glare';
      card.appendChild(glare);

      card.addEventListener('mousemove', function(e) {
        var rect = card.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        var rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -4;
        var rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 4;
        card.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) scale3d(1.005, 1.005, 1.005)';
        card.style.setProperty('--mouse-x', (x / rect.width) * 100 + '%');
        card.style.setProperty('--mouse-y', (y / rect.height) * 100 + '%');
      });

      card.addEventListener('mouseleave', function() {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      });

      card.addEventListener('mouseenter', function() {
        card.style.transition = 'transform 0.15s ease-out, box-shadow 0.3s ease';
      });
    });
  }

  // ==========================================
  // Mobile Pricing Accordion (event delegation — robust)
  // ==========================================
  document.addEventListener('click', function(e) {
    var header = e.target.closest && e.target.closest('.pricing-tier-header');
    if (!header) return;
    var tier = header.closest('.pricing-tier');
    if (!tier) return;

    var isActive = tier.classList.contains('active');
    if (isActive) {
      tier.classList.remove('active');
      return;
    }

    var accordion = tier.closest('.mobile-pricing-accordion');
    if (accordion) {
      accordion.querySelectorAll('.pricing-tier').forEach(function(t) {
        t.classList.remove('active');
      });
    }
    tier.classList.add('active');
  });

  // ==========================================
  // Product Preview Screenshot Tab Switching (event delegation)
  // ==========================================
  function initPreviewTabs() {
    var tabContainer = document.querySelector('.preview-tabs');
    if (!tabContainer) return;

    // Ensure first tab active by default if none marked
    if (!tabContainer.querySelector('.preview-tab.active')) {
      var firstTab = tabContainer.querySelector('.preview-tab');
      if (firstTab) firstTab.classList.add('active');
    }
    if (!document.querySelector('.screenshot-container.active')) {
      var firstScreenshot = document.querySelector('.screenshot-container');
      if (firstScreenshot) firstScreenshot.classList.add('active');
    }

    tabContainer.addEventListener('click', function(e) {
      var tab = e.target.closest && e.target.closest('.preview-tab');
      if (!tab) return;

      var targetId = 'tab-' + tab.getAttribute('data-tab');
      document.querySelectorAll('.preview-tab').forEach(function(t) { t.classList.remove('active'); });
      document.querySelectorAll('.screenshot-container').forEach(function(s) { s.classList.remove('active'); });
      tab.classList.add('active');
      var targetEl = document.getElementById(targetId);
      if (targetEl) targetEl.classList.add('active');
    });
  }
  initPreviewTabs();

  // ==========================================
  // Comparison Table Scroll Indicator
  // ==========================================
  function initComparisonTableScroll() {
    var tableContainer = document.querySelector('.comparison-table-container');
    var tableWrapper = document.querySelector('.comparison-table-wrapper');
    var scrollHint = document.querySelector('.scroll-hint');

    if (tableWrapper && tableContainer) {
      function checkScrollPosition() {
        var scrollLeft = tableWrapper.scrollLeft;
        var scrollWidth = tableWrapper.scrollWidth;
        var clientWidth = tableWrapper.clientWidth;
        var isAtEnd = scrollLeft + clientWidth >= scrollWidth - 10;

        if (isAtEnd) {
          tableContainer.classList.add('scrolled-end');
          if (scrollHint) scrollHint.style.display = 'none';
        } else {
          tableContainer.classList.remove('scrolled-end');
        }
      }

      tableWrapper.addEventListener('scroll', checkScrollPosition, { passive: true });
      window.addEventListener('resize', checkScrollPosition, { passive: true });
      checkScrollPosition();
    }
  }
  initComparisonTableScroll();

  // ==========================================
  // Exit Intent Popup (desktop only, one-time per session)
  // ==========================================
  var exitPopup = document.getElementById('exit-intent-popup');
  if (exitPopup && !sessionStorage.getItem('exitShown')) {
    var exitDesktop = window.matchMedia && window.matchMedia('(min-width: 1024px)').matches;
    if (exitDesktop) {
      var exitHandler = function(e) {
        if (e.clientY < 10) {
          exitPopup.classList.add('active');
          sessionStorage.setItem('exitShown', '1');
          document.removeEventListener('mouseout', exitHandler);
          if (typeof gtag === 'function') {
            gtag('event', 'popup_shown', { event_category: 'exit_intent' });
          }
        }
      };
      document.addEventListener('mouseout', exitHandler);
    }

    // Close popup
    document.addEventListener('click', function(e) {
      if (e.target.matches && (e.target.matches('.exit-popup-close') || e.target.closest('.exit-popup-close'))) {
        exitPopup.classList.remove('active');
      }
      if (e.target === exitPopup) {
        exitPopup.classList.remove('active');
      }
    });
  }

})();

// ==========================================
// Backwards-compatible global for any inline onclick="togglePricingTier(this)" callers
// ==========================================
window.togglePricingTier = function(headerEl) {
  var tier = headerEl.closest('.pricing-tier');
  if (!tier) return;
  var isActive = tier.classList.contains('active');
  if (isActive) {
    tier.classList.remove('active');
    return;
  }
  var accordion = tier.closest('.mobile-pricing-accordion');
  if (accordion) {
    accordion.querySelectorAll('.pricing-tier').forEach(function(t) { t.classList.remove('active'); });
  }
  tier.classList.add('active');
};
