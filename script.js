let $ = document;

let searchForm = $.querySelector(".search-form-container");
let searchBtn = $.querySelector("#search-btn");
let cartForm = $.querySelector(".shopping-cart-container");
let loginForm = $.querySelector(".login-form-container");
let navbar = document.querySelector(".header .navbar");

searchBtn.onclick = () => {
  searchForm.classList.toggle("active");
//   cartForm.classList.remove("active");
//   loginForm.classList.remove("active");
//   navbar.classList.remove("active");
  console.log('click');
};

