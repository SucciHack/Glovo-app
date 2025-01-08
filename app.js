let lastScrollTop = 0;
const navbar = document.querySelector('.scrollNav');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scroll Down
    navbar.style.display = 'block';
  } else {
    // Scroll Up
    navbar.style.display = 'none';
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});