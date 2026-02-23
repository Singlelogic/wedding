document.addEventListener('DOMContentLoaded', function() {
  const rsvpForm = document.querySelector('.rsvp-form');

//  if (rsvpForm) {
//    rsvpForm.addEventListener('submit', function(e) {
//      e.preventDefault();
//
//      // Сбор данных формы
//      const formData = new FormData(rsvpForm);
//      const data = Object.fromEntries(formData);
//
//      // В реальном проекте здесь был бы fetch запрос к серверу
//      console.log('Данные формы:', data);
//
//      // Сообщение пользователю
//      alert('Спасибо за ваш ответ! Мы очень ждем вас на нашей свадьбе!');
//
//      // Сброс формы
//      rsvpForm.reset();
//    });
//  }

  // Плавная прокрутка
  const scrollButton = document.querySelector('.scroll-button');
  if (scrollButton) {
    scrollButton.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  }
});