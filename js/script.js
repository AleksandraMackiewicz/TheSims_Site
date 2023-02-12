/* eslint-disable linebreak-style */
console.log('I work');
const menuBtn = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile_nav')

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('is_active');
  mobileNav.classList.toggle('is_active');
});