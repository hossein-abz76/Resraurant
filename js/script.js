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
let paymentBtn = $.querySelector("#payment-btn");

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

let countDate = new Date("jun 30 , 2022 00:00:00").getTime();

function countDown() {
  let now = new Date().getTime();
  gap = countDate - now;

  let second = 1000;
  let minutes = second * 60;
  let hour = minutes * 60;
  let day = hour * 24;

  let d = Math.floor(gap / day);
  let h = Math.floor((gap % day) / hour);
  let m = Math.floor((gap % hour) / minutes);
  let s = Math.floor((gap % minutes) / second);

  document.getElementById("days").innerText = d;
  document.getElementById("hours").innerText = h;
  document.getElementById("minutes").innerText = m;
  document.getElementById("second").innerText = s;
}

setInterval(function () {
  countDown();
}, 1000);

/* countDown section ended */

/* add/remove alert section started */
let alertContainer = $.querySelector(".alert-container");

function addAlertHandler() {
  alertContainer.insertAdjacentHTML(
    "beforeend",
    `<div class="added-alert"><span>سفارش شما با موفقیت به سبد خرید اضافه شد.</span></div>`
  );
  setTimeout(function () {
    $.querySelector(".added-alert").classList.add("hidden");
  }, 2000);
}
function removeAlertHandler() {
  alertContainer.insertAdjacentHTML(
    "beforeend",
    `<div class="removed-alert"><span>سفارش شما با موفقیت از سبد خرید پاک شد.</span></div>`
  );
  setTimeout(function () {
    $.querySelector(".removed-alert").classList.add("hidden");
  }, 2000);
}
/* add/remove alert section ended */


/* popular section started */

let popularContainer = $.getElementById('popular-container')

let foodArray = [
  {id : 1, title: 'گیوزا ژاپنی', price: '235000',oldPrice: '250000', count: 1,star: 5, favorite: true, cat: 'launch', img: 'img/food-1.png'},
  {id : 2, title: 'برگر قارچ و پنیر', price: '110000',oldPrice: '', count: 1,star: 3, favorite: true, cat: 'burger', img: 'img/food-2.png'},
  {id : 3, title: 'پیتزا ایتالیایی', price: '100000',oldPrice: '', count: 1,star: 3, favorite: true, cat: 'pizza', img: 'img/food-3.png'},
  {id : 4, title: 'همبرگر سیاه', price: '110000',oldPrice: '130000', count: 1,star: 5, favorite: true, cat: 'burger', img: 'img/food-4.png'},
  {id : 5, title: 'پیتزا ریحان', price: '125000',oldPrice: '', count: 1,star: 3, favorite: true, cat: 'pizza', img: 'img/food-5.png'},
  {id : 6, title: 'پیتزا سبزیجات', price: '90000',oldPrice: '', count: 1,star: 3, favorite: true, cat: 'pizza', img: 'img/food-6.png'},
  {id : 7, title: 'دوبل برگر', price: '75000',oldPrice: '', count: 1,star: 5, favorite: true, cat: 'launch', img: 'img/food-7.png'},
  {id : 8, title: 'پیتزا مخلوط', price: '95000',oldPrice: '', count: 1,star: 3, favorite: true, cat: 'burger', img: 'img/food-8.png'},
  {id : 9, title: 'برگر مرغ', price: '85000',oldPrice: '', count: 1,star: 3, favorite: false, cat: 'burger', img: 'img/menu-1.png'},
  {id : 10, title: 'پیتزا بروکلی', price: '135000',oldPrice: '', count: 1,star: 3, favorite: false, cat: 'burger', img: 'img/menu-2.png'},
  {id : 11, title: 'اسنک پنیری', price: '55000',oldPrice: '', count: 1,star: 3, favorite: false, cat: 'pizza', img: 'img/menu-3.png'},
  {id : 12, title: 'ساندویچ سرد', price: '75000',oldPrice: '', count: 1,star: 3, favorite: false, cat: 'launch', img: 'img/menu-4.png'},
  {id : 13, title: 'سیب زمینی سرخ کرده', price: '45000',oldPrice: '', count: 1,star: 3, favorite: false, cat: 'dinner', img: 'img/menu-5.png'},
  {id : 14, title: 'پیتزا ویژه', price: '155000',oldPrice: '', count: 1,star: 3, favorite: false, cat: 'pizza', img: 'img/menu-6.png'},
  
]
let isFavorite = foodArray.filter(function (food) {
  return food.favorite === true
})
isFavorite.forEach(function (food) {
  popularContainer.insertAdjacentHTML('beforeend',`<div class="box">
  <a href="second-page.html?id=${food.id}" class="fas fa-external-link-alt" target="_blank"></a>
  <div class="image">
    <img src="${food.img}" alt="${food.title}" />
  </div>
  <div class="content">
    <h3>${food.title}</h3>
    <div class="stars">
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star-half-alt"></i>
      <span> ${food.star} </span>
    </div>
    <div class="price">${food.price} تومان <span>${food.oldPrice}</span></div>
    <a class="btn"  onclick="addFoodToUserBasket(${food.id})">افزودن به سبد</a>
  </div>
</div>`)

})

/* popular section ended */


/* menu section started */

let menuContainer = $.getElementById('menu-container')
let isMenu = foodArray.filter(function (food) {
  return food.favorite === false
})
isMenu.forEach(function (food) {
  menuContainer.insertAdjacentHTML('beforeend',`<a href="second-page.html?id=${food.id}" class="box" onclick="addFoodToUserBasket(${food.id})" target="_blank">
  <img src="${food.img}" alt="${food.title}" />
  <div class="content">
    <h3>${food.title}</h3>
    <div class="price">${food.price} تومان </div>
  </div>
</a>`)
})

/* menu section ended */

let userBasket = []

function addFoodToUserBasket(foodId) {
  let isFoodExistInBasket = userBasket.some(function (food) {
    if (food.id === foodId) {
      return true;
    }
  });

  if (isFoodExistInBasket) {
    userBasket.find(function (food) {
      if (food.id === foodId) {
        food.count++;
      }
    });

    basketFoodGenerator(userBasket);
    setIntoLocalStorage(userBasket)
    calTotalPrice(userBasket);

  } else {
    let mainFood = foodArray.find(function (food) {
      return food.id === foodId
    })

  userBasket.push(mainFood)
  basketFoodGenerator(userBasket)
  setIntoLocalStorage(userBasket)
  calTotalPrice(userBasket)
  

}}

function setIntoLocalStorage(items) {
  localStorage.setItem('foods',JSON.stringify(items))
} 

function getFromLocalStorage() {
  let localStorageFoods = localStorage.getItem('foods')

  if (localStorageFoods) {
    userBasket = JSON.parse(localStorageFoods)
    basketFoodGenerator(userBasket)
  }
  
}

let cartContainer = $.getElementById('cart-container')

function basketFoodGenerator(userBasket) {
  cartContainer.innerHTML = ''
  userBasket.forEach(function (food) {
    
    cartContainer.insertAdjacentHTML("beforeend", `<div class="box">
    <i class="fas fa-times" onclick="removeFoodFromCart(${food.id})"></i>
    <img src="${food.img}" alt="${food.title}" />
    <div class="content" id='content'>
      <h3>${food.title}</h3>
      <span> تعداد : </span>
      <input type="number" name="" value="${food.count}" id="unique${food.id}" onchange="updateFoodCount(${food.id}, event.target.value)"/>
      <br />
      <span> قیمت : </span>
      <span class="price"> ${food.price * food.count} تومان </span>
    </div>
  </div>`)
  

  })
}



/* totalPrice section started */

let totalPrice = $.getElementById('total-price')
let beforeDiscount = $.getElementById('before-ِdiscount')   
let discount = $.querySelector('.discount-price')

function calTotalPrice(userBasket) {
  
  let beforeDiscountValue = 0
  let discountValue = 0  
  let totalPriceValue = 0
  let totalOldPrice = 0
  let totalWithoutOldPrice = 0

  userBasket.forEach(function (food) {
    totalPriceValue += food.count * food.price
    if (food.oldPrice == '') {
      food.oldPrice = 0
    }
    totalOldPrice += food.count * food.oldPrice
    
  })

  let withoutOldPrice = userBasket.filter(function (food) {
    return food.oldPrice == ''
  })
  withoutOldPrice.forEach(function (food) {
    totalWithoutOldPrice += food.count * food.price
    
  })
  beforeDiscountValue = totalWithoutOldPrice + totalOldPrice
  discountValue = beforeDiscountValue - totalPriceValue
  
  totalPrice.innerHTML = totalPriceValue + ' تومان'
  beforeDiscount.innerHTML = beforeDiscountValue + ' تومان'
  discount.innerHTML = discountValue + ' تومان'

  setIntoLocalStorageTotalPrice(beforeDiscountValue,discountValue,totalPriceValue)
}

function setIntoLocalStorageTotalPrice(item1,item2,item3) {
  localStorage.setItem('beforeDiscount',item1)
  localStorage.setItem('discount',item2)
  localStorage.setItem('totalPrice',item3)
} 

function getFromLocalStorageTotalPrice() {
  let localStorageTotalBeforeDiscountPrice = localStorage.getItem('beforeDiscount')
  let localStorageTotalDiscountPrice = localStorage.getItem('discount')
  let localStorageTotalPrice = localStorage.getItem('totalPrice')

  if (localStorageTotalBeforeDiscountPrice) {
    beforeDiscount.innerHTML = localStorageTotalBeforeDiscountPrice + ' تومان'
  }
  if (localStorageTotalDiscountPrice) {
    discount.innerHTML = localStorageTotalDiscountPrice + ' تومان'
  }
  if (localStorageTotalPrice) {
    totalPrice.innerHTML = localStorageTotalPrice + ' تومان'
  }
}

paymentBtn.onclick = () => {
  userBasket = []
  basketFoodGenerator(userBasket)
  calTotalPrice(userBasket)
  localStorage.removeItem('foods')
  localStorage.removeItem('beforeDiscount')
  localStorage.removeItem('discount')
  localStorage.removeItem('totalPrice')
}

function removeFoodFromCart(foodId) {
  userBasket = userBasket.filter(function (food) {
    food.count = 1
    return food.id != foodId
  })
  basketFoodGenerator(userBasket)
  setIntoLocalStorage(userBasket)
  calTotalPrice(userBasket)
}

function updateFoodCount(foodId, newCount) {

  userBasket.forEach(function (food) {
    if (food.id === foodId) {
      food.count = newCount
    }
  })

  basketFoodGenerator(userBasket)
  setIntoLocalStorage(userBasket)
  calTotalPrice(userBasket)
}

window.onload = function () {
  getFromLocalStorage()
  getFromLocalStorageTotalPrice()
  loaderElem.classList.add('hidden')
  let localStorageTheme = localStorage.getItem("theme");
  if (localStorageTheme === "dark") {
    $.body.classList.add("dark");
  }
};

/* totalPrice section ended */