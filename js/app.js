let toggleBtn = document.querySelector(".header-top__nav__btn-hamburger");
let headerList = document.querySelector(".header-top__nav__list");

toggleBtn.addEventListener("click",()=>{
  headerList.classList.toggle("togle");
});