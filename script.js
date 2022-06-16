let $ = document;

let searchBtn = $.querySelector("#search-btn");
let cartBtn = $.querySelector("#cart-btn");
let loginBtn = $.querySelector("#login-btn");
let searchForm = $.querySelector(".search-form-container");
let cartForm = $.querySelector(".shopping-cart-container");
let loginForm = $.querySelector(".login-form-container");
let navbar = document.querySelector(".header .navbar");

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
