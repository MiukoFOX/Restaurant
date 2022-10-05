//Инициализация
new Swiper('.image-slider', {
  //Стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  //Выравнивание высоты
  autoHeight: true,
  //Кол-во для показа
  slidesPerView: 1,
  //Сколько пролистывать
  slidesPerGroup: 1,
  //Слайд в центре
  centeredSlides: true,
  //Бесконечность
  loop: true,
  //Эффект тень
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },

  //Миниатюры
  thumbs:{
    swiper:{
      el:'.image-mini-slider',
      slidesPerView:4,
    }
  }
});



$(document).ready(function() {
  $('.header-burger').click(function(event) {
    $('.header-burger,.header-menu').toggleClass('active');
    $('body').toggleClass('lock')
  });
});