const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const modalBackground = document.querySelector('.modal-background');
const logo = document.querySelector('.logo');
const header = document.querySelector('.site-header');

function closeMenu() {
  mobileMenu.classList.remove('active');
  hamburger.classList.remove('active');
  modalBackground.classList.remove('active');
  logo.classList.remove('hidden');
}

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
  modalBackground.classList.toggle('active');
  logo.classList.toggle('hidden');
});

modalBackground.addEventListener('click', () => closeMenu());

const navLinks = document.querySelectorAll('.mobile-menu .nav-item');
navLinks.forEach(item => {
  item.addEventListener('click', () => closeMenu())
});

document.addEventListener('scroll', (e) => {
  if (window.scrollY > 80) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }
});
