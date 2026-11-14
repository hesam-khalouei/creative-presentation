document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const fullscreenBtn = document.getElementById('fullscreenBtn');
  const counterEl = document.getElementById('slideCounter');
  const progressBar = document.getElementById('progressBar');
  const slideDotsContainer = document.getElementById('slideDots');

  let currentIndex = 0;
  const totalSlides = slides.length;

  // ساخت نقاط ناوبری (Dots) با کلاس‌های Tailwind
  slides.forEach((_, idx) => {
    const dot = document.createElement('button');
    dot.className = 'h-2 rounded-full transition-all duration-300 bg-white/20 hover:bg-primary-400 w-2';
    dot.title = `اسلاید ${idx + 1}`;
    dot.addEventListener('click', () => updateDeck(idx));
    slideDotsContainer.appendChild(dot);
  });

  const dots = slideDotsContainer.querySelectorAll('button');

  function updateDeck(index) {
    if (index < 0 || index >= totalSlides) return;
    currentIndex = index;

    slides.forEach((slide, idx) => {
      slide.classList.toggle('active', idx === currentIndex);
    });

    // آپدیت نقطه‌های وضعیت
    dots.forEach((dot, idx) => {
      if (idx === currentIndex) {
        dot.className = 'h-2 w-8 rounded-full transition-all duration-300 bg-primary-500 shadow-glow-primary';
      } else {
        dot.className = 'h-2 w-2 rounded-full transition-all duration-300 bg-white/20 hover:bg-white/40';
      }
    });

    // شمارنده فارسی و نوار پیشرفت
    const toPersianNum = (n) => n.toString().replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
    counterEl.textContent = `${toPersianNum(currentIndex + 1)} از ${toPersianNum(totalSlides)}`;
    
    const progress = ((currentIndex + 1) / totalSlides) * 100;
    progressBar.style.width = `${progress}%`;

    window.location.hash = `slide-${currentIndex + 1}`;
  }

  const nextSlide = () => currentIndex < totalSlides - 1 && updateDeck(currentIndex + 1);
  const prevSlide = () => currentIndex > 0 && updateDeck(currentIndex - 1);

  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  document.addEventListener('keydown', (e) => {
    if (['ArrowLeft', ' ', 'PageDown'].includes(e.key)) {
      e.preventDefault();
      nextSlide();
    } else if (['ArrowRight', 'PageUp'].includes(e.key)) {
      e.preventDefault();
      prevSlide();
    } else if (e.key.toLowerCase() === 'f') {
      toggleFullScreen();
    }
  });

  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }

  fullscreenBtn.addEventListener('click', toggleFullScreen);

  const hash = window.location.hash.replace('#slide-', '');
  const initialSlide = parseInt(hash, 10);
  if (!isNaN(initialSlide) && initialSlide >= 1 && initialSlide <= totalSlides) {
    updateDeck(initialSlide - 1);
  } else {
    updateDeck(0);
  }
});