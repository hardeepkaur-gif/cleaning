(function () {
  'use strict';

  /* ---- Sticky Header ---- */
  const header = document.getElementById('header');
  const stickyHeader = document.getElementById('stickyHeader');
  const headerHeight = header ? header.offsetHeight : 0;

  window.addEventListener('scroll', function () {
    if (window.scrollY > headerHeight + 100) {
      stickyHeader.classList.add('visible');
    } else {
      stickyHeader.classList.remove('visible');
    }
  });

  /* ---- Mobile Menu ---- */
  const menuToggler = document.getElementById('menuToggler');
  const mainMenu = document.getElementById('mainMenu');

  if (menuToggler && mainMenu) {
    menuToggler.addEventListener('click', function () {
      mainMenu.classList.toggle('open');
    });

    mainMenu.querySelectorAll('.dropdown > a').forEach(function (link) {
      link.addEventListener('click', function (e) {
        if (window.innerWidth <= 991) {
          e.preventDefault();
          link.parentElement.classList.toggle('open');
        }
      });
    });

    mainMenu.querySelectorAll('a:not(.dropdown > a)').forEach(function (link) {
      link.addEventListener('click', function () {
        mainMenu.classList.remove('open');
      });
    });
  }

  /* ---- Active Nav on Scroll ---- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.main-menu__list > li > a[href^="#"]');

  window.addEventListener('scroll', function () {
    let current = '';
    sections.forEach(function (section) {
      const top = section.offsetTop - 200;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(function (link) {
      const li = link.parentElement;
      li.classList.remove('current');
      if (link.getAttribute('href') === '#' + current) {
        li.classList.add('current');
      }
    });
  });

  /* ---- Hero Slider ---- */
  const slides = document.querySelectorAll('.main-slider__slide');
  const dotsContainer = document.querySelector('.main-slider__dots');
  const prevBtn = document.querySelector('.main-slider__arrow.prev');
  const nextBtn = document.querySelector('.main-slider__arrow.next');
  let currentSlide = 0;
  let slideInterval;

  if (slides.length && dotsContainer) {
    slides.forEach(function (_, i) {
      const dot = document.createElement('button');
      dot.classList.add('main-slider__dot');
      if (i === 0) dot.classList.add('active');
      dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
      dot.addEventListener('click', function () { goToSlide(i); });
      dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.main-slider__dot');

    function goToSlide(index) {
      slides[currentSlide].classList.remove('active');
      dots[currentSlide].classList.remove('active');
      currentSlide = (index + slides.length) % slides.length;
      slides[currentSlide].classList.add('active');
      dots[currentSlide].classList.add('active');
    }

    function nextSlide() { goToSlide(currentSlide + 1); }
    function prevSlide() { goToSlide(currentSlide - 1); }

    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);

    function startAuto() {
      slideInterval = setInterval(nextSlide, 6000);
    }

    function resetAuto() {
      clearInterval(slideInterval);
      startAuto();
    }

    startAuto();

    const slider = document.querySelector('.main-slider');
    if (slider) {
      slider.addEventListener('mouseenter', function () { clearInterval(slideInterval); });
      slider.addEventListener('mouseleave', startAuto);
    }

    dots.forEach(function (dot, i) {
      dot.addEventListener('click', resetAuto);
    });
  }

  /* ---- Counter Animation ---- */
  const counters = document.querySelectorAll('.about-stat__num[data-count]');
  let counted = false;

  function animateCounters() {
    if (counted) return;
    const aboutSection = document.getElementById('about');
    if (!aboutSection) return;

    const rect = aboutSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      counted = true;
      counters.forEach(function (counter) {
        const target = parseInt(counter.getAttribute('data-count'), 10);
        let current = 0;
        const step = Math.ceil(target / 40);
        const timer = setInterval(function () {
          current += step;
          if (current >= target) {
            counter.textContent = target;
            clearInterval(timer);
          } else {
            counter.textContent = current;
          }
        }, 40);
      });
    }
  }

  window.addEventListener('scroll', animateCounters);
  animateCounters();

  /* ---- Quote Form ---- */
  const quoteForm = document.getElementById('quoteForm');
  if (quoteForm) {
    quoteForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = quoteForm.querySelector('button[type="submit"]');
      const originalText = btn.childNodes[0].textContent;
      btn.childNodes[0].textContent = 'Submitted! We\'ll contact you soon.';
      btn.style.background = 'var(--primary)';
      quoteForm.reset();
      setTimeout(function () {
        btn.childNodes[0].textContent = originalText;
        btn.style.background = '';
      }, 3000);
    });
  }
})();
