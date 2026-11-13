document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const fullscreenBtn = document.getElementById('fullscreenBtn');
  const counterEl = document.getElementById('slideCounter');
  const progressBar = document.getElementById('progressBar');

  let currentIndex = 0;
  const totalSlides = slides.length;

  function updateDeck(index) {
    if (index < 0 || index >= totalSlides) return;
    currentIndex = index;

    slides.forEach((slide, idx) => {
      slide.classList.toggle('active', idx === currentIndex);
    });

    // بروزرسانی شمارنده و نوار پیشرفت
    counterEl.textContent = `${currentIndex + 1} از ${totalSlides}`;
    const progress = ((currentIndex + 1) / totalSlides) * 100;
    progressBar.style.width = `${progress}%`;

    // ذخیره اسلاید فعلی در URL برای رفرش بدون پرش
    window.location.hash = `slide-${currentIndex + 1}`;
  }

  function nextSlide() {
    if (currentIndex < totalSlides - 1) updateDeck(currentIndex + 1);
  }

  function prevSlide() {
    if (currentIndex > 0) updateDeck(currentIndex - 1);
  }

  // رویداد کلیک دکمه‌ها
  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  // کنترل با کیبورد (فلش‌ها، اسپیس و کلید F برای تمام‌صفحه)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' || e.key === ' ' || e.key === 'PageDown') {
      e.preventDefault();
      nextSlide(); // در زبان فارسی جهت حرکت رو به جلو به سمت چپ است
    } else if (e.key === 'ArrowRight' || e.key === 'PageUp') {
      e.preventDefault();
      prevSlide();
    } else if (e.key.toLowerCase() === 'f') {
      toggleFullScreen();
    }
  });

  // قابلیت تمام‌صفحه برای زمان ارائه به مدیرعامل
  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }

  fullscreenBtn.addEventListener('click', toggleFullScreen);

  // خواندن اسلاید از Hash در صورت رفرش صفحه
  const hash = window.location.hash.replace('#slide-', '');
  const initialSlide = parseInt(hash, 10);
  if (
    !isNaN(initialSlide) &&
    initialSlide >= 1 &&
    initialSlide <= totalSlides
  ) {
    updateDeck(initialSlide - 1);
  } else {
    updateDeck(0);
  }
});
