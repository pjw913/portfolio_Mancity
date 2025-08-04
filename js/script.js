


var swiper1 = new Swiper(".k1", {
    slidesPerView: "auto",
    spaceBetween: 0,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper2 = new Swiper(".k2", {
    slidesPerView: "auto",
    spaceBetween: 0,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper3 = new Swiper(".k3", {
    slidesPerView: "auto",
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper4 = new Swiper(".k4", {
    slidesPerView: "auto",
    spaceBetween: 0,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });

  const mainMenu = document.querySelectorAll('.gnb>ul>li');

  const toggle = document.querySelector('.toggle_btn');
  const gnb = document.querySelector('.gnb');
  const gnbClose = document.querySelector('.closeBtn');
  let toggleState = true;

  toggle.addEventListener('click', ()=>{
    gnb.style.transition = 'all 0.5s ease';
    if(toggleState){
      gnb.style.left = 0;
      toggleState = false;
    }else{
      gnb.style.left = '-70vw';
      gnb.addEventListener('transitionend', ()=>{ gnb.style.transition = '' }, { once:true });
      toggleState = true;
    }
  });

  gnbClose.addEventListener('click', ()=>{
    gnb.style.left = '-70vw';
    gnb.addEventListener('transitionend', ()=>{ gnb.style.transition = '' }, { once:true });
    toggleState = true;
  });



