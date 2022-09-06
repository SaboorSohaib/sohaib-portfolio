const menuBtn = document.querySelector('.menu');
const closeBtn = document.querySelector('.close-btn');
const nav = document.querySelector('.top-nav');

menuBtn.addEventListener('click', () => {
  nav.classList.add('menu-show');
});

closeBtn.addEventListener('click', () => {
  nav.classList.remove('menu-show');
});
