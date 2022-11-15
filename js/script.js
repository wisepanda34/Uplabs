window.addEventListener('DOMContentLoaded', () => {
   const menu = document.querySelector('.header_menu'),
      menuItem = document.querySelectorAll('.menu_item'),
      hamburger = document.querySelector('.hamburger');

   hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('header_active');
   });

   menuItem.forEach(item => {
      item.addEventListener('click', () => {
         hamburger.classList.toggle('hamburger_active');
         menu.classList.toggle('header_active');
      })
   })
});

new Swiper('.meet_slider', {

   navigation: {
      nextEl: '.meet_next',
      prevEl: '.meet_prev'
   },
   pagination: {
      el: '.swiper-pagination',
      //Буллеты
      clickable: true,

      //Количество слайдов для показа на экране
      slidesPerView: 2,

      //Отключение функционала, если слайдов меньше, чем...
      watchOverFlow: true,

      //Отступ между слайдами
      spaceBetween: 30,

      //Количество пролистываемых слайдов
      slidesPerGroup: 3,


   },
});

