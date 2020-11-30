'use strict';
document.documentElement.style.setProperty('--animate-duration', '0.3s');

// Modal
let activeModal = (event) => {
  let targetElement = event.target,
    parentElementId = targetElement.closest('div.card').id,
    particle = document.getElementById('particles-js'),
    modal = document.getElementById(`${parentElementId}Modal`),
    modalContainer = document.querySelector('html');
  
  particle.classList.add('is-hidden');
  modal.classList.add('is-active');
  modalContainer.classList.add('is-clipped');
}
let deactiveModal = (event) => {
  let targetElement = event.target,
  targetId = targetElement.closest('div.modal').id,
  modal = document.getElementById(targetId),
  particle = document.getElementById('particles-js'),
  modalContainer = document.querySelector('html');

  particle.classList.remove('is-hidden');
  modal.classList.remove('is-active');
  modalContainer.classList.remove('is-clipped');
}

// Navbar
let burger = document.querySelector('.burger'),
  nav = document.querySelector('.navbar-menu');

function navMenuToggle() {
  burger.classList.toggle('is-active');
  nav.classList.toggle('is-active');
};