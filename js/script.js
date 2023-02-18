/* eslint-disable linebreak-style */
console.log('I work');
const menuBtn = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile_nav');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('is_active');
  mobileNav.classList.toggle('is_active');
});

// button take me to other subsite
const moreSpellsButton = document.querySelector('#moreSpellsButton').onclick = function() {
  window.location.href = "/mod/More_spells.html";
};
const beyondLifeButton = document.querySelector('#beyondLifeButton').onclick = function() {
  window.location.href = "/mod/Beyond_life.html";
};

const homeButton = document.querySelector('#home').onclick = function() {
  window.location.href = "/index.html"
}