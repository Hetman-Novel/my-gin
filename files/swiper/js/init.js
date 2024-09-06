document.addEventListener('DOMContentLoaded', function () {
   const lazyImages = document.querySelectorAll('img[loading="lazy"]'); // Получаем все изображения с атрибутом loading="lazy"
   function addLoadedClass(image) { // Функция для добавления класса к родителю изображения после его загрузки
      const parentElement = image.parentElement;
      if (image.complete) { // Проверяем, загружено ли изображение
         parentElement.classList.add('loaded');
      } else {
         image.addEventListener('load', function() { // Добавляем событие load, чтобы добавить класс после загрузки изображения
            parentElement.classList.add('loaded');
         });
      }
   }
   lazyImages.forEach(addLoadedClass); // Перебираем все изображения и вызываем функцию addLoadedClass для каждого
});

/* === */

let categoriesSlider = document.getElementById('categories-slider')
if (categoriesSlider) {
   new Swiper(categoriesSlider, {
      navigation: {
         prevEl: '#categories__slider-button-prev',
         nextEl: '#categories__slider-button-next',
      },
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      spaceBetween: 27,
      watchOverflow: false,
      freeMode: true,
      loop: false,
      speed: 800,
      effect: 'slide',
      breakpoints: {
         0: {
            spaceBetween: 15,
         },
         576: {
            spaceBetween: 20,
         },
         993: {
            spaceBetween: 27,
         }
      },
   
   });
}