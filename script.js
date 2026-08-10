/* ============================================================
   CarbonSynqEarth — All Interactivity & Animations
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {
  lucide.createIcons();

  /* ---------------- Mobile Menu ---------------- */
  var menuBtn = document.getElementById('menu-btn');
  var menuClose = document.getElementById('menu-close');
  var mobileMenu = document.getElementById('mobile-menu');

  function openMenu() {
    mobileMenu.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    if (menuBtn) menuBtn.setAttribute('aria-expanded', 'true');
  }
  function closeMenu() {
    mobileMenu.classList.add('hidden');
    document.body.style.overflow = '';
    if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');
  }

  if (menuBtn) menuBtn.addEventListener('click', openMenu);
  if (menuClose) menuClose.addEventListener('click', closeMenu);
  if (mobileMenu) {
    mobileMenu.addEventListener('click', function (e) {
      if (e.target === mobileMenu || e.target.hasAttribute('data-close-menu')) {
        closeMenu();
      }
    });
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileMenu && !mobileMenu.classList.contains('hidden')) {
      closeMenu();
    }
  });

  /* ---------------- Desktop Navigation Dropdowns ---------------- */
  var dropdowns = document.querySelectorAll('[data-dropdown]');
  var hideTimer = null;

  dropdowns.forEach(function (wrap) {
    wrap.addEventListener('mouseenter', function () {
      clearTimeout(hideTimer);
      dropdowns.forEach(function (w) {
        if (w !== wrap) w.classList.remove('open');
      });
      wrap.classList.add('open');
    });
    wrap.addEventListener('mouseleave', function () {
      hideTimer = setTimeout(function () {
        wrap.classList.remove('open');
      }, 150);
    });
  });

  document.querySelectorAll('[data-dropdown-toggle]').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var wrap = btn.closest('[data-dropdown]');
      var isOpen = wrap.classList.contains('open');
      dropdowns.forEach(function (w) {
        w.classList.remove('open');
      });
      if (!isOpen) wrap.classList.add('open');
    });
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('[data-dropdown]')) {
      dropdowns.forEach(function (w) {
        w.classList.remove('open');
      });
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      dropdowns.forEach(function (w) {
        w.classList.remove('open');
      });
    }
  });

  /* ---------------- Intersection Observer Entrance Motion ---------------- */
  var revealElements = document.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window && revealElements.length > 0) {
    var revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    revealElements.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    revealElements.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  /* ---------------- Industries & Use Cases ---------------- */
  var sectors = {
    manufacturing: {
      icon: 'factory',
      name: 'Manufacturing',
      tagline: 'Plant-level precision at enterprise scale',
      description:
        'Manufacturing emissions span stationary combustion, purchased electricity, process emissions and logistics. With multiple plants, thousands of invoices and varying fuel mixes, tracking a credible footprint without a central system creates blind spots that derail compliance and net-zero commitments.',
      primaryUsers: ['Sustainability Managers', 'Plant Managers', 'Operations Team'],
      challenges: [
        { icon: 'file-text', label: 'Manual invoice collection' },
        { icon: 'calculator', label: 'Scope 1-3 calculations' },
        { icon: 'database', label: 'Centralized data' },
        { icon: 'clock', label: 'Fast ESG reporting' },
        { icon: 'shield-alert', label: 'Compliance readiness' }
      ],
      solution: [
        'AI invoice processing & extraction',
        'Automatic Scope 1, 2 & 3 calculations',
        'Real-time emissions dashboard by plant',
        'CSRD, ISSB & BRSR audit reporting',
        'Multi-facility energy monitoring'
      ],
      keyValue: [
        { value: '90%', label: 'Less manual effort' },
        { value: 'Real-time', label: 'Visibility across plants' },
        { value: 'Audit-ready', label: 'Reports on demand' },
        { value: '50% Faster', label: 'ESG reporting cycles' }
      ]
    },
    banking: {
      icon: 'landmark',
      name: 'Banking & Finance',
      tagline: 'Financed emissions, decoded',
      description:
        'Financial institutions measure emissions not just from operations but from the portfolios they finance. Measuring financed emissions (Scope 3 Category 15) across lending, investment and funds requires consistent counterparty data, PCAF-aligned methodology and portfolio-level visibility — a heavy lift with spreadsheets.',
      primaryUsers: ['ESG Officers', 'Credit Risk Teams', 'Portfolio Managers'],
      challenges: [
        { icon: 'layers', label: 'Financed emissions complexity' },
        { icon: 'files', label: 'Counterparty data gaps' },
        { icon: 'book-open', label: 'PCAF alignment' },
        { icon: 'trending-up', label: 'Investor disclosures' },
        { icon: 'network', label: 'Portfolio aggregation' }
      ],
      solution: [
        'PCAF-aligned financed emissions calculator',
        'Portfolio-level carbon risk dashboards',
        'TCFD & CSRD disclosure packs',
        'Automated counterparty data onboarding',
        'Scenario modeling for sustainable lending'
      ],
      keyValue: [
        { value: 'Automated', label: 'Portfolio-wide scans' },
        { value: 'Investor-grade', label: 'Disclosures' },
        { value: 'Less effort', label: 'Counterparty onboarding' },
        { value: 'Informed', label: 'Risk & lending decisions' }
      ]
    },
    universities: {
      icon: 'school',
      name: 'Universities',
      tagline: 'Campus-wide sustainability, campus-wide clarity',
      description:
        'Higher education institutions run energy-intensive campuses — laboratories, housing, fleets and daily commuting. Building a credible greenhouse gas inventory across hundreds of buildings while supporting research and engaging the campus community is a perennial challenge.',
      primaryUsers: ['Sustainability Directors', 'Facilities & Energy Managers', 'Research & Admin Teams'],
      challenges: [
        { icon: 'building-2', label: 'Multi-building energy tracking' },
        { icon: 'flask-conical', label: 'Lab & fleet emissions' },
        { icon: 'file-spreadsheet', label: 'Scattered utility bills' },
        { icon: 'graduation-cap', label: 'Academic reporting standards' },
        { icon: 'users', label: 'Campus stakeholder alignment' }
      ],
      solution: [
        'Campus-wide consolidated dashboards',
        'Automated utility bill ingestion',
        'Commute & business travel tracking',
        'Research-grade carbon accounting',
        'Public engagement & accreditation data'
      ],
      keyValue: [
        { value: 'Single view', label: 'Of campus footprint' },
        { value: 'Faster', label: 'Annual reporting' },
        { value: 'Credible', label: 'Scope 1-2-3 data' },
        { value: 'Ready', label: 'For accreditations & rankings' }
      ]
    },
    exporters: {
      icon: 'globe',
      name: 'Exporters',
      tagline: 'Trade-ready carbon disclosures',
      description:
        'Exporters face CBAM and customer-driven carbon disclosure demands at the border and at the negotiation table. Product- and shipment-level footprints increasingly determine market access, contracts and margins — yet the data sits scattered across sites, suppliers and spreadsheets.',
      primaryUsers: ['Export Managers', 'Compliance & Trade Teams', 'Finance & Operations'],
      challenges: [
        { icon: 'ship', label: 'CBAM compliance' },
        { icon: 'file-question', label: 'Customer carbon surveys' },
        { icon: 'boxes', label: 'Product-level footprint gaps' },
        { icon: 'map-pinned', label: 'Multi-site operations' },
        { icon: 'truck', label: 'Supplier data collection' }
      ],
      solution: [
        'Product-level carbon footprint calculations',
        'CBAM-aligned export reporting packs',
        'Automated customer questionnaire responses',
        'Supply chain carbon data workflows',
        'Shipment-level emissions verification'
      ],
      keyValue: [
        { value: 'Protected', label: 'Global market access' },
        { value: 'Winning', label: 'Customer disclosures' },
        { value: 'Faster', label: 'Questionnaire turnarounds' },
        { value: 'Data-backed', label: 'Pricing decisions' }
      ]
    }
  };

  var sectorButtons = document.querySelectorAll('[data-sector]');
  var panel = document.getElementById('industry-panel');

  function renderIndustry(key) {
    var d = sectors[key];
    if (!d || !panel) return;

    var challenges = d.challenges
      .map(function (c) {
        return '<span class="challenge-chip"><i data-lucide="' + c.icon + '"></i>' + c.label + '</span>';
      })
      .join('');

    var solutions = d.solution
      .map(function (s) {
        return '<li class="solution-item"><i data-lucide="circle-check"></i>' + s + '</li>';
      })
      .join('');

    var users = d.primaryUsers
      .map(function (u) {
        return '<span class="user-chip">' + u + '</span>';
      })
      .join('');

    var values = d.keyValue
      .map(function (v) {
        return (
          '<div class="value-chip"><span class="vc-value">' +
          v.value +
          '</span><span class="vc-label">' +
          v.label +
          '</span></div>'
        );
      })
      .join('');

    panel.innerHTML =
      '<div class="flex items-start gap-4">' +
      '<span class="sector-big-icon" aria-hidden="true"><i data-lucide="' + d.icon + '"></i></span>' +
      '<div>' +
      '<h3 class="text-xl font-bold text-text-dark tracking-tight">' + d.name + '</h3>' +
      '<p class="text-sm font-semibold text-eco-dark mt-0.5">' + d.tagline + '</p>' +
      '</div>' +
      '</div>' +
      '<p class="mt-5 text-[15px] leading-relaxed text-slate-600 max-w-none">' + d.description + '</p>' +
      '<div class="mt-6">' +
      '<h4 class="text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-3">Primary Users</h4>' +
      '<div class="flex flex-wrap gap-2">' + users + '</div>' +
      '</div>' +
      '<div class="mt-8 grid md:grid-cols-2 gap-8">' +
      '<div>' +
      '<h4 class="text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-3">Key Challenges</h4>' +
      '<div class="flex flex-wrap gap-2">' + challenges + '</div>' +
      '</div>' +
      '<div>' +
      '<h4 class="text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-3">CarbonSynq Solutions</h4>' +
      '<ul class="space-y-2.5">' + solutions + '</ul>' +
      '</div>' +
      '</div>' +
      '<div class="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3">' + values + '</div>';

    lucide.createIcons();
  }

  sectorButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      sectorButtons.forEach(function (b) {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      renderIndustry(btn.getAttribute('data-sector'));
    });
  });

  renderIndustry('manufacturing');

  /* ---------------- FAQ Accordion ---------------- */
  document.querySelectorAll('.faq-question').forEach(function (q) {
    q.addEventListener('click', function () {
      var item = q.closest('.faq-item');
      var answer = item.querySelector('.faq-answer');
      var isOpen = item.classList.contains('open');

      document.querySelectorAll('.faq-item.open').forEach(function (openItem) {
        if (openItem !== item) {
          openItem.classList.remove('open');
          openItem.querySelector('.faq-answer').style.maxHeight = null;
          openItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        }
      });

      if (isOpen) {
        item.classList.remove('open');
        answer.style.maxHeight = null;
        q.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        q.setAttribute('aria-expanded', 'true');
      }
    });
  });
});

/* ============================================================
   Enterprise Analytics Dashboard Logic
   ============================================================ */
document.addEventListener('DOMContentLoaded', function () {
  var yearPills = document.querySelectorAll('[data-year]');
  var dashBars = document.querySelectorAll('[data-bar]');
  var kicker = document.getElementById('donut-kicker');
  var donutValue = document.getElementById('donut-value');

  if (!kicker || !donutValue) return;

  function resetDonut() {
    var activeYear = document.querySelector('.dash-pill.active');
    kicker.textContent = 'Avg ' + (activeYear ? activeYear.getAttribute('data-year') : '2026');
    donutValue.textContent = '100%';
  }

  yearPills.forEach(function (pill) {
    pill.addEventListener('click', function () {
      yearPills.forEach(function (p) {
        p.classList.remove('active');
      });
      pill.classList.add('active');
      dashBars.forEach(function (b) {
        b.classList.remove('active');
      });
      resetDonut();
    });
  });

  dashBars.forEach(function (bar) {
    bar.addEventListener('click', function () {
      var wasActive = bar.classList.contains('active');
      dashBars.forEach(function (b) {
        b.classList.remove('active');
      });
      if (wasActive) {
        resetDonut();
      } else {
        bar.classList.add('active');
        kicker.textContent = bar.getAttribute('data-month');
        donutValue.textContent = bar.getAttribute('data-value');
      }
    });
    bar.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        bar.click();
      }
    });
  });
});

/* ============================================================
   Parallax Motion Logic
   ============================================================ */
document.addEventListener('DOMContentLoaded', function () {
  var parallaxEls = document.querySelectorAll('[data-parallax]');
  if (!parallaxEls.length) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var ticking = false;

  function update() {
    var vh = window.innerHeight || document.documentElement.clientHeight;
    parallaxEls.forEach(function (el) {
      var section = el.closest('section');
      if (!section) return;
      var rect = section.getBoundingClientRect();
      var travel = rect.height * 0.15;
      var fromCenter = rect.top + rect.height / 2 - vh / 2;
      var y = -fromCenter * 0.15;
      y = Math.max(-travel, Math.min(travel, y));
      el.style.transform = 'translate3d(0, ' + y + 'px, 0)';
    });
    ticking = false;
  }

  function requestTick() {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(update);
    }
  }

  window.addEventListener('scroll', requestTick, { passive: true });
  window.addEventListener('resize', requestTick, { passive: true });
  update();
});

/* ============================================================
   MASTER ANIMATION SPECIFICATION PASS — JAVASCRIPT LOGIC
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------- 1. Navigation Scroll Shrink & Active Section Observer ---------------- */
  const headerMockup = document.querySelector('.header-mockup');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.mockup-nav-link');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 80) {
      if (headerMockup) headerMockup.classList.add('header-scrolled');
    } else {
      if (headerMockup) headerMockup.classList.remove('header-scrolled');
    }
  }, { passive: true });

  if ('IntersectionObserver' in window && sections.length > 0) {
    const navObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(function (link) {
            const href = link.getAttribute('href');
            if (href === '#' + id || href === '/' + id) {
              link.classList.add('nav-active');
            } else {
              link.classList.remove('nav-active');
            }
          });
        }
      });
    }, { threshold: 0.3 });

    sections.forEach(function (sec) { navObserver.observe(sec); });
  }

  /* ---------------- 2. Stats Bar Count-Up & Landed Pulse Signal ---------------- */
  const statElements = document.querySelectorAll('.stat-number, .stat-counter');
  if (statElements.length) {
    const statObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-target'), 10);
          const prefix = el.getAttribute('data-prefix') || '';
          const suffix = el.getAttribute('data-suffix') || '';

          if (isReducedMotion) {
            el.textContent = prefix + target + suffix;
            obs.unobserve(el);
            return;
          }

          const duration = 1200; // 1.2s ease-out
          const startTime = performance.now();

          function updateCount(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentCount = Math.floor(easeProgress * target);
            el.textContent = prefix + currentCount + suffix;

            if (progress < 1) {
              requestAnimationFrame(updateCount);
            } else {
              el.textContent = prefix + target + suffix;
              // One-time landing nudge & soft eco-green glow signal
              el.classList.add('stat-landed');
            }
          }

          requestAnimationFrame(updateCount);
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.3 });

    statElements.forEach(function (el) { statObserver.observe(el); });
  }

  /* ---------------- 3. How It Works Traveling Light Effect ---------------- */
  const howItWorksSec = document.getElementById('how-it-works');
  const connectorDot = document.querySelector('.connector-dot');
  if (howItWorksSec && connectorDot && !isReducedMotion) {
    const dotObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          connectorDot.style.transition = 'left 1.8s cubic-bezier(0.4, 0, 0.2, 1)';
          connectorDot.style.left = '100%';
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    dotObserver.observe(howItWorksSec);
  }

  /* ---------------- 4. FAQ Accordion Height Animation ---------------- */
  const faqButtons = document.querySelectorAll('[data-accordion-target]');
  faqButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const targetId = btn.getAttribute('data-accordion-target');
      const targetEl = document.querySelector(targetId);
      const icon = btn.querySelector('.faq-chevron, svg');
      const parentItem = btn.closest('.faq-item, div');

      if (!targetEl) return;

      const isOpen = targetEl.style.maxHeight && targetEl.style.maxHeight !== '0px';

      // Close open items
      document.querySelectorAll('.faq-answer, [id^="faq-"]').forEach(function (ans) {
        if (ans !== targetEl) {
          ans.style.maxHeight = '0px';
          ans.style.opacity = '0';
          const siblingItem = ans.closest('.faq-item, div');
          if (siblingItem) siblingItem.classList.remove('active');
          const siblingIcon = siblingItem ? siblingItem.querySelector('.faq-chevron, svg') : null;
          if (siblingIcon) siblingIcon.style.transform = 'rotate(0deg)';
        }
      });

      if (isOpen) {
        targetEl.style.maxHeight = '0px';
        targetEl.style.opacity = '0';
        if (parentItem) parentItem.classList.remove('active');
        if (icon) icon.style.transform = 'rotate(0deg)';
      } else {
        if (parentItem) parentItem.classList.add('active');
        targetEl.style.maxHeight = targetEl.scrollHeight + 'px';
        targetEl.style.opacity = '1';
        if (icon) icon.style.transform = 'rotate(180deg)';
      }
    });
  });

  /* ---------------- 5. Use Cases Sector Tab Cross-Fade ---------------- */
  const sectorBtns = document.querySelectorAll('[data-sector-target]');
  const sectorPanels = document.querySelectorAll('[data-sector-panel]');
  
  sectorBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const targetSector = btn.getAttribute('data-sector-target');
      
      sectorBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

      sectorPanels.forEach(function (panel) {
        panel.classList.add('panel-fading');
        setTimeout(function () {
          if (panel.getAttribute('data-sector-panel') === targetSector) {
            panel.classList.remove('hidden');
            setTimeout(function () { panel.classList.remove('panel-fading'); }, 20);
          } else {
            panel.classList.add('hidden');
          }
        }, 150);
      });
    });
  });

  /* ---------------- 6. Chart Scroll Trigger & Eased Donut Count-Up ---------------- */
  const analyticsSec = document.getElementById('analytics');
  const donutVal = document.getElementById('donut-value');

  if (analyticsSec) {
    const chartObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          analyticsSec.classList.add('charts-animated');

          // Eased Donut Center Count-up over ~1.8s matching shared cubic-bezier(0.22, 1, 0.36, 1)
          if (donutVal) {
            if (isReducedMotion) {
              donutVal.textContent = '100%';
            } else {
              const start = performance.now();
              const duration = 1800;
              function stepDonut(now) {
                const elapsed = now - start;
                const progress = Math.min(elapsed / duration, 1);
                // Cubic-bezier(0.22, 1, 0.36, 1) ease-out expo curve
                const eased = 1 - Math.pow(1 - progress, 3.5);
                const currentVal = Math.floor(eased * 100);
                donutVal.textContent = currentVal + '%';
                if (progress < 1) {
                  requestAnimationFrame(stepDonut);
                } else {
                  donutVal.textContent = '100%';
                }
              }
              requestAnimationFrame(stepDonut);
            }
          }

          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.38 }); // Threshold set at 0.38-0.4 for optimal scroll triggering

    chartObserver.observe(analyticsSec);
  }

});
