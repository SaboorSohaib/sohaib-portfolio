const menuBtn = document.querySelector('.menu');
const closeBtn = document.querySelector('.close-btn');
const nav = document.querySelector('.top-nav');

menuBtn.addEventListener('click', () => {
  nav.classList.add('menu-show');
});

closeBtn.addEventListener('click', () => {
  nav.classList.remove('menu-show');
});

document.querySelector('.menu').addEventListener('click', () => {
  nav.style.display = 'block';
});

document.querySelectorAll('.top-nav').forEach((n) => (
  n.addEventListener('click', () => {
    menuBtn.classList.remove('menu-show');
    nav.classList.remove('menu-show');
  })));

