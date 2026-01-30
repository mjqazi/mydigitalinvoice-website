/**
 * My Digital Invoice - Landing Page JavaScript
 * Pure vanilla JS for Hostinger static hosting
 */

(function() {
  'use strict';

  // ==========================================
  // Navigation Toggle (Mobile)
  // ==========================================
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
    });
  }

  // ==========================================
  // Sticky Header on Scroll
  // ==========================================
  const header = document.getElementById('header');

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
  handleScroll(); // Check on initial load

  // ==========================================
  // Smooth Scroll for Anchor Links
  // ==========================================
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');

      if (targetId && targetId !== '#') {
        e.preventDefault();
        const target = document.querySelector(targetId);

        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });

          // Close mobile menu if open
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
  });

  // ==========================================
  // FAQ Accordion (Only one open at a time)
  // ==========================================
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(function(item) {
    item.addEventListener('toggle', function() {
      if (item.open) {
        faqItems.forEach(function(otherItem) {
          if (otherItem !== item) {
            otherItem.open = false;
          }
        });
      }
    });
  });

  // ==========================================
  // Counter Animation for Stats
  // ==========================================
  function animateCounter(counter) {
    const target = parseInt(counter.getAttribute('data-count'), 10);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

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

  // Use Intersection Observer to animate counters when visible
  const counters = document.querySelectorAll('[data-count]');

  if (counters.length > 0 && 'IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function(counter) {
      counterObserver.observe(counter);
    });
  } else {
    // Fallback for browsers without IntersectionObserver
    counters.forEach(animateCounter);
  }

  // ==========================================
  // Update Current Year in Footer
  // ==========================================
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // ==========================================
  // 3D Tilt Effect for Pricing Cards
  // ==========================================
  function initTiltEffect() {
    const cards = document.querySelectorAll('.pricing-card');

    cards.forEach(function(card) {
      // Add glare element
      const glare = document.createElement('div');
      glare.className = 'card-glare';
      card.appendChild(glare);

      card.addEventListener('mousemove', function(e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Calculate rotation (max 4 degrees for subtle effect)
        const rotateX = ((y - centerY) / centerY) * -4;
        const rotateY = ((x - centerX) / centerX) * 4;

        // Apply transform (subtle tilt with minimal scale)
        card.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) scale3d(1.005, 1.005, 1.005)';

        // Update glare position
        const glareX = (x / rect.width) * 100;
        const glareY = (y / rect.height) * 100;
        card.style.setProperty('--mouse-x', glareX + '%');
        card.style.setProperty('--mouse-y', glareY + '%');
      });

      card.addEventListener('mouseleave', function() {
        // Smoothly reset transform
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      });

      card.addEventListener('mouseenter', function() {
        card.style.transition = 'transform 0.15s ease-out, box-shadow 0.3s ease';
      });
    });
  }

  // Initialize tilt effect when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTiltEffect);
  } else {
    initTiltEffect();
  }

  // ==========================================
  // Comparison Table Scroll Indicator
  // ==========================================
  function initComparisonTableScroll() {
    const tableContainer = document.querySelector('.comparison-table-container');
    const tableWrapper = document.querySelector('.comparison-table-wrapper');
    const scrollHint = document.querySelector('.scroll-hint');

    if (tableWrapper && tableContainer) {
      function checkScrollPosition() {
        const scrollLeft = tableWrapper.scrollLeft;
        const scrollWidth = tableWrapper.scrollWidth;
        const clientWidth = tableWrapper.clientWidth;
        const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 10;

        if (isAtEnd) {
          tableContainer.classList.add('scrolled-end');
          if (scrollHint) {
            scrollHint.style.display = 'none';
          }
        } else {
          tableContainer.classList.remove('scrolled-end');
        }
      }

      tableWrapper.addEventListener('scroll', checkScrollPosition, { passive: true });
      window.addEventListener('resize', checkScrollPosition, { passive: true });
      checkScrollPosition(); // Initial check
    }
  }

  // Initialize comparison table scroll when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initComparisonTableScroll);
  } else {
    initComparisonTableScroll();
  }

  // ==========================================
  // Floating Call Button - Periodic Expansion
  // ==========================================
  function initFloatingCallButton() {
    const floatingCall = document.getElementById('floatingCall');
    if (!floatingCall) return;

    // Expand every 5 seconds, stay expanded for 3 seconds
    function expandButton() {
      floatingCall.classList.add('expanded');

      setTimeout(function() {
        floatingCall.classList.remove('expanded');
      }, 3000); // Collapse after 3 seconds
    }

    // Initial expansion after 2 seconds
    setTimeout(expandButton, 2000);

    // Then expand every 8 seconds (5 sec collapsed + 3 sec expanded)
    setInterval(expandButton, 8000);
  }

  // Initialize floating call button when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFloatingCallButton);
  } else {
    initFloatingCallButton();
  }

})();
