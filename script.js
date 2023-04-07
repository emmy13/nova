let navbarLink = document.querySelector(".navbar-link");
let navbarToggle = document.querySelector(".navbar-toggle");
let link = document.querySelectorAll(".link");
let clicked = false;
navbarToggle.addEventListener("click", function() {
if(clicked == false) {
  navbarLink.style.display = "block";
  setTimeout(() => {
    navbarLink.classList.toggle("show");
  }, 100)
  clicked = true;
}else {
  navbarLink.classList.toggle("show");
  setTimeout(() => {
    navbarLink.style.display = "none";
  }, 500)
  clicked = false;
}
})
for(let i = 0; i < link.length; i++) {
    link[i].addEventListener("click", function(e) {
        for(let i = 0; i < link.length; i++) {
            link[i].classList.remove("active");
        }
        e.target.classList.add("active");
    })
}


let specialHour = document.querySelector(".special-hour"),
    specialMinute = document.querySelector(".special-minute"),
    specialSecond = document.querySelector(".special-second");

setInterval(specialTimer, 1000);
function specialTimer() {
    let date = new Date();
    let hour = date.getHours(),
        minute = date.getMinutes(),
        second = date.getSeconds();
    specialHour.innerHTML = hour;
    specialMinute.innerHTML = minute;
    specialSecond.innerHTML = second;
}


let specialSlide = document.querySelectorAll(".special-slide");
for(let i = 0; i < specialSlide.length; i++) {
    specialSlide[i].style.backgroundImage = `url(images/gallery-${i}.jpg)`
}

var swiper = new Swiper(".special-slideshow", {
    slidesPerView: 3,
    spaceBetween: 30,
    // slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
    breakpoints: {
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "@1.10": {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        "@1.50": {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
  });


var swiper = new Swiper(".most-popular-slide-box", {
  effect: "cards",
  grabCursor: true,
})

let mostPopularSlide = document.querySelectorAll(".most-popular-slide");
for(let i = 0; i < mostPopularSlide.length; i++) {
  mostPopularSlide[i].style.backgroundImage = `url(images/popular-${i}.jpg)`
}

var swiper = new Swiper(".comment-slideshow", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  grabCursor: true,
  loopFillGroupWithBlank: true,
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
      slidesPerGroup: 3,
    },
    "@1.10": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});