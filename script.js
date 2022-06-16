let $ = document;

let searchBtn = $.querySelector("#search-btn");
let cartBtn = $.querySelector("#cart-btn");
let loginBtn = $.querySelector("#login-btn");
let menuBtn = $.querySelector("#menu-btn");
let searchForm = $.querySelector(".search-form-container");
let cartForm = $.querySelector(".shopping-cart-container");
let loginForm = $.querySelector(".login-form-container");
let navbar = $.querySelector(".header .navbar");

searchBtn.onclick = () => {
  searchForm.classList.toggle("active");
  cartForm.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
};
cartBtn.onclick = () => {
  searchForm.classList.remove("active");
  cartForm.classList.toggle("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
};
loginBtn.onclick = () => {
  searchForm.classList.remove("active");
  cartForm.classList.remove("active");
  loginForm.classList.toggle("active");
  navbar.classList.remove("active");
};
menuBtn.onclick = () => {
  searchForm.classList.remove("active");
  cartForm.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.toggle("active");
};

window.onkeydown = (e) => {
  if (e.code === "Escape") {
    searchForm.classList.remove("active");
    cartForm.classList.remove("active");
    loginForm.classList.remove("active");
    navbar.classList.remove("active");
  }
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

$.querySelector(".home").onmousemove = (e) => {
  let x = (window.innerWidth - e.pageX * 2) / 90;
  let y = (window.innerHeight - e.pageY * 2) / 90;

  $.querySelector(
    ".home .home-parallax-img"
  ).style.transform = `translateX(${y}px) translateY(${x}px)`;
  $.querySelector(
    ".home .home-parallax-img2"
  ).style.transform = `translateX(${y}px) translateY(${x}px)`;
};

$.querySelector(".home").onmouseleave = () => {
  $.querySelector(
    ".home .home-parallax-img"
  ).style.transform = `translateX(0px) translateY(0px)`;
  $.querySelector(
    ".home .home-parallax-img2"
  ).style.transform = `translateX(0px) translateY(0px)`;
};


// dark mode

let switchBtn = $.querySelector('.switch input')
switchBtn.addEventListener('click',function changeTheme() {
    $.body.classList.toggle('dark')
    
    if ($.body.className.includes('dark')) {
        localStorage.setItem('theme','dark')
    } else {
        localStorage.setItem('theme','light')
        
    }
    
})

window.onload = function () {
    let localStorageTheme = localStorage.getItem('theme')
    if (localStorageTheme === 'dark') {
        $.body.classList.add('dark')
    }
}