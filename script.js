let $ = document;

// loader section started

const loaderElem = document.querySelector('.loader-container')


// loader section ended

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

let switchBtn = $.querySelector(".switch input");
switchBtn.addEventListener("click", function changeTheme() {
  $.body.classList.toggle("dark");

  if ($.body.className.includes("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

window.onload = function () {
  loaderElem.classList.add('hidden')
  let localStorageTheme = localStorage.getItem("theme");
  if (localStorageTheme === "dark") {
    $.body.classList.add("dark");
  }
};

/* scrollTop section started */

let goUpBtn = $.querySelector("#go-up");
let circle = $.querySelector(".circle");

window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY;
  let documentHeight = document.body.clientHeight;
  let windowHeight = window.innerHeight;
  let scrollPercent = scrollTop / (documentHeight - windowHeight);
  let scrollPercentRounded = Math.round(scrollPercent * 100);
  circle.style.background = `linear-gradient(to bottom,var(--main-color) ${scrollPercentRounded}%,transparent 0%)`;
});

goUpBtn.addEventListener("click", function scrollTopHandler() {
  window.scrollTo(0, 0);
});

$.addEventListener("scroll", function () {
  if ($.documentElement.scrollTop > 0) {
    circle.classList.add("visible");
  } else {
    circle.classList.remove("visible");
  }
});

/* scrollTop section ended */


/* countDown section started */

let countDate = new Date('jun 30 , 2022 00:00:00').getTime()

function countDown() {
    let now = new Date().getTime()
    gap = countDate - now

    let second = 1000
    let minutes = second * 60
    let hour = minutes * 60
    let day = hour * 24

    let d = Math.floor(gap / day)
    let h = Math.floor((gap % day) / hour)
    let m = Math.floor((gap % hour) / minutes)
    let s = Math.floor((gap % minutes) / second)

    document.getElementById('days').innerText = d
    document.getElementById('hours').innerText = h
    document.getElementById('minutes').innerText = m
    document.getElementById('second').innerText = s
    
}

setInterval(function () {
    countDown()
},1000)


/* countDown section ended */
