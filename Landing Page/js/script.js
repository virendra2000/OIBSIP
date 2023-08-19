const mnuBtnBurger = document.querySelector('.mnu-btn-burger');
const mnuBtnClose = document.querySelector('.mnu-btn-close');
const navMenu = document.querySelector('.navmenu');
const header = document.querySelector('.home');

window.addEventListener("resize", function() {
  if (window.matchMedia("(max-width: 900px)").matches) {
    navMenu.style.display = "none";
    mnuBtnBurger.style.display = 'inline-block';
    mnuBtnBurger.addEventListener('click', () => {
      // header.classList.add('menu-open');
      mnuBtnBurger.style.display = 'none';
      mnuBtnClose.style.display = 'inline-block';
      navMenu.style.display = "block";
    });
    
    mnuBtnClose.addEventListener('click', () => {
      // header.classList.remove('menu-open');
      mnuBtnBurger.style.display = 'inline-block';
      mnuBtnClose.style.display = 'none';
      navMenu.style.display = "none";
    });
  } else {
      navMenu.style.display = "flex";
      mnuBtnClose.style.display = 'none';
  }
})