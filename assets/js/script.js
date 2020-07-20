const dropdownMenu = document.querySelector('[data-dropdown]');
const menuButton = document.querySelector('[data-menu="button"]');
const menuList = document.querySelector('[data-menu="list"]');

const newsletterForm = document.querySelector('#newsletterForm');
const inputNome = document.querySelector('#nome');
const inputEmail = document.querySelector('#email');
const message = document.querySelector('.newsletter__message');


function handleDropdown(event) {
  // event.preventDefault();
  this.classList.toggle('active');
};

function openMenu(event) {
  event.preventDefault();
  menuList.classList.toggle('active');
  menuButton.classList.toggle('active');
}

function subscribeNewsletter(event){
  event.preventDefault();
  if(inputNome.value && inputEmail.value){
    message.classList.add('active');
  }
}

newsletterForm.addEventListener('submit', subscribeNewsletter);

['touchstart', 'click'].forEach(userEvent => {
  dropdownMenu.addEventListener(userEvent, handleDropdown);
  menuButton.addEventListener(userEvent, openMenu);
});