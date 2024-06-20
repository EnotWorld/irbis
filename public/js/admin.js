document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('newsForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение отправки формы

    // Получаем значения полей формы
    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();
    const publishDate = document.getElementById('publishDate').value;

    // Проверяем, что все обязательные поля заполнены
    if (title === '' || content === '' || publishDate === '') {
      alert('Пожалуйста, заполните все обязательные поля.');
      return; // Останавливаем отправку формы
    }

    // Создаем объект с данными для отправки на сервер
    const formData = {
      title: title,
      content: content,
      publishDate: publishDate
    };

    // Пример отправки данных на сервер (может отличаться в зависимости от используемых технологий)
    fetch('/add-news', {
      method: 'POST', // Метод запроса
      headers: {
        'Content-Type': 'application/json' // Указываем тип содержимого
      },
      body: JSON.stringify(formData) // Преобразуем данные в JSON и отправляем
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Ошибка при отправке данных на сервер.');
        }
        return response.json(); // Получаем и обрабатываем ответ от сервера (если нужно)
      })
      .then(data => {
        // Обрабатываем успешный ответ от сервера, если необходимо
        console.log('Данные успешно отправлены:', data);
        // Опционально: очищаем форму или выполняем другие действия
        form.reset(); // Сбрасываем значения полей формы
      })
      .catch(error => {
        console.error('Ошибка:', error.message);
        // Обрабатываем ошибку при отправке данных
        console.log('Произошла ошибка при отправке данных на сервер.');
        form.reset(); // Сбрасываем значения полей формы
      });
  });
});
