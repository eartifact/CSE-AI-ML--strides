let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains_behind = document.getElementById("mountains_behind");
let text = document.getElementById("text");
let btn = document.getElementById("btn");
let mountains_front = document.getElementById("mountains_front");
let header = document.querySelector("header");

window.addEventListener("scroll", function () {
    let value = window.scrollY;
    stars.style.left = value + "px";
    moon.style.top = value * 0.5 + "px";
    mountains_behind.style.top = value * 0.5 + "px";
    mountains_front.style.top = value * 0 + "px";
    text.style.marginRight = value * 4 + "px";
    text.style.marginTop = value * 0.2+ "px";
    btn.style.marginTop = value * 1.5 + "px";
    header.style.top = value * 0.5 + "px";
});


//<<<<<---------------------Count Down Code ---------------------------------->>>>>>>

function countdown() {
    const targetDate = new Date('March 2, 2024 00:00:00').getTime();
    
    const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;
    
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById('days').innerText = formatTime(days);
    document.getElementById('hours').innerText = formatTime(hours);
    document.getElementById('minutes').innerText = formatTime(minutes);
    document.getElementById('seconds').innerText = formatTime(seconds);
    
    if (distance < 0) {
        clearInterval(interval);
        document.getElementById('countdown').innerText = 'EXPIRED';
    }
    }, 1000);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();

//<<<<<<---------------- Carosal Code ------------------------>>>>>>

var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: true
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        640: {
        slidesPerView: 2
    },
    768: {
        slidesPerView: 1
    },
    1024: {
        slidesPerView: 2
    },
    1560: {
        slidesPerView: 3
    }
    }
});

//<<<<-------------Event Section Code-------------->>>>

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  
  // header container
  ScrollReveal().reveal(".header__container h1", scrollRevealOption);
  
  ScrollReveal().reveal(".header__container h4", {
    ...scrollRevealOption,
    delay: 500,
  });
  
  ScrollReveal().reveal(".header__container .btn", {
    ...scrollRevealOption,
    delay: 1000,
  });
  
  // about container
  ScrollReveal().reveal(".about_container .section_header", scrollRevealOption);
  ScrollReveal().reveal(".about_container .section_subheader", {
    ...scrollRevealOption,
    delay: 500,
  });
  
  ScrollReveal().reveal(".about_container .about_flex", {
    ...scrollRevealOption,
    delay: 1000,
  });
  
  ScrollReveal().reveal(".about__container .btn", {
    ...scrollRevealOption,
    delay: 1500,
  });
  
  // discover container
  ScrollReveal().reveal(".discover__card", {
    ...scrollRevealOption,
    interval: 500,
  });
  
  ScrollReveal().reveal(".discover_card_content", {
    ...scrollRevealOption,
    interval: 500,
    delay: 200,
  });
  
  // blogs container
  ScrollReveal().reveal(".blogs__card", {
    duration: 1000,
    interval: 400,
  });
  
  // journals container
  ScrollReveal().reveal(".journals__card", {
    ...scrollRevealOption,
    interval: 400,
  });