// app.js

const express = require('express');
const path = require('path');
const session = require('express-session');
const db_connection = require('./db'); // Импортируем подключение к базе данных
const apiRoutes = require('./routes/api'); // Импортируем маршруты API

const app = express();

// Middleware для обслуживания статических файлов из папки 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Middleware для работы с сессиями
app.use(session({
  secret: 'secret-key', // Секретный ключ для подписи сессионных cookie
  resave: false,
  saveUninitialized: true
}));

// Middleware для обработки данных формы
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Для парсинга JSON данных из тела запроса

// Middleware для проверки авторизации
// Функция для проверки авторизации
// function checkAuth(req, res, next) {
//   if (req.url === '/login.html' || req.session.authenticated) {
//     // Если пользователь находится на странице login.html или авторизован, продолжаем обработку запроса
//     next();
//   } else {
//     // Если пользователь не авторизован, перенаправляем на страницу login.html
//     res.redirect('/login.html');
//   }
// }
//
// // Подключение middleware для проверки авторизации ко всем маршрутам API
// app.use('/login', checkAuth);


// Маршрут для страницы login.html (отображение страницы логина)
app.get('/login.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Маршрут для страницы admin.html (отображение страницы администратора)
app.get('/admin.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

// Маршрут для добавления новости в базу данных
// Обработчик POST запроса на добавление новости
app.post('/add-news', (req, res) => {
  const { title, content, publishDate } = req.body;
  console.log('Полученные данные:', { title, content, publishDate }); // Логирование полученных данных

  // SQL запрос для добавления новости в таблицу news
  const sql = 'INSERT INTO news (title, content, publish_date) VALUES (?, ?, ?)';
  const values = [title, content, publishDate];

  // Выполнение SQL запроса
  db_connection.query(sql, values, (err, result) => {
    if (err) {
      console.error('Ошибка при добавлении новости:', err);
      res.status(500).send('Ошибка сервера при добавлении новости');
      return;
    }

    console.log('Новость успешно добавлена:', result);
    res.status(200).send('Новость успешно добавлена в базу данных');
  });
});

// Используем middleware для проверки авторизации на всех страницах кроме login.html
// app.use(checkAuth);

// Используем маршруты API
app.use('/api', apiRoutes);

// Маршрут для index.html
app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Маршрут для admin.html
app.get('/admin.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

// Порт, на котором будет работать сервер
const PORT = process.env.PORT || 3000;

// Запускаем сервер
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});