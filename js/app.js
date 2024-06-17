let header = document.querySelector(".header-top");
let toggleBtn = document.querySelector(".header-top__nav__btn-hamburger");
let headerList = document.querySelector(".header-top__nav__list");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.classList.add("header__shrink");
  } else {
    header.classList.remove("header__shrink");
  }
});

toggleBtn.addEventListener("click",()=>{
  headerList.classList.toggle("header__list-show");
})