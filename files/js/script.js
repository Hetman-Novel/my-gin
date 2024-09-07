document.addEventListener('DOMContentLoaded', function () {

   const showBlockForm = document.getElementById('show-block-form');
   if (showBlockForm) {
      showBlockForm.addEventListener('click', () => {
         document.querySelector('.categories__blockForm').classList.add('show');
      })
      document.querySelector('.categories__blockForm button[type=submit]').addEventListener('click', () => {
         showBlockForm.classList.remove('show');
      })
      const categoriesBlockFormSubmit = document.querySelector('.categories__blockForm input[type=submit]');
      if (categoriesBlockFormSubmit) {
         categoriesBlockFormSubmit.addEventListener('click', () => {
            showBlockForm.classList.remove('show');
         });
      }
   }

   const boxes = document.querySelectorAll('.js-same-height');
   if (boxes) {
      let height = 0;
      for (var i = 0; i < boxes.length; i++) {
         var current_height = boxes[i].offsetHeight;
         if (current_height > height) {
            height = current_height;
         }
      }
      for (var i = 0; i < boxes.length; i++) {
         boxes[i].style.height = height + 'px';
      }
   }
});