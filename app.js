const express = require('express');
const path = require('path');
const session = require('express-session');
const apiRoutes = require('./routes/api'); // Импортируем маршруты API
const bodyParser = require('body-parser');
const cors = require('cors');
const { authenticate } = require('./auth'); // Импортируем функцию authenticate из auth.js
const { db_connection } = require('./db'); // Импортируем подключение к базе данных

const app = express();
const corsOptions = {
  origin: "*",
  credentials: true,
  method: ["GET", "POST", "PUT", "DELETE"],
}

app.use(cors(corsOptions));
// Middleware для обслуживания статических файлов из папки 'public'
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});
// Middleware для работы с сессиями
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({
  secret: 'my-secret-key', // Секретный ключ для подписи куки сессии
  resave: false,
  saveUninitialized: false
}));


// Middleware для проверки аутентификации
function requireLogin(req, res, next) {
  if (req.url === '/login.html' && req.session.authenticated) {
    return next();
  } else {
    return res.redirect('/login.html');
  }
}
app.get('/admin.html', requireLogin, (req, res) => {
  console.log('asd');
  res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});
// Маршрут для страницы admin.html (отображение страницы администратора)

// Маршрут для добавления новости в базу данных
// Обработчик POST запроса на добавление новости
app.post('/add-news', async (req, res) => {
  const { title, content, publishDate } = req.body;
  console.log('Полученные данные:', { title, content, publishDate }); // Логирование полученных данных

  // SQL запрос для добавления новости в таблицу news
  const sql = 'INSERT INTO news (title, content, publish_date) VALUES (?, ?, ?)';
  const values = [title, content, publishDate];

  // Выполнение SQL запроса
  try {
    const [result] = await db_connection.execute(sql, values);
    console.log('Новость успешно добавлена:', result);
    res.status(200).send('Новость успешно добавлена в базу данных');
  } catch (error) {
    console.error('Ошибка при добавлении новости:', error.message);
    res.status(500).send('Ошибка сервера при добавлении новости');
  }
});

// Используем middleware для проверки авторизации на всех страницах кроме login.html
// app.use(checkAuth);

// Используем маршруты API
app.use('/api', apiRoutes);

// Маршрут для index.html
app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Используем функцию authenticate из auth.js
  if (authenticate(username, password)) {
    req.session.user = username; // Сохраняем пользователя в сессии
    res.redirect('/admin.html');
  } else {
    res.send(`
        <html>
            <head>
                <title>Alert Example</title>
            </head>
            <body>
                <script>
                    alert('Неверные имя пользователя или пароль.');
                    window.location.href = '/login.html'; 
                    // Здесь можно добавить перенаправление на другую страницу или другие действия
                </script>
            </body>
        </html>
    `);
    res.redirect('/login.html');
  }
});

// Порт, на котором будет работать сервер
const PORT = process.env.PORT || 3000;

// Запускаем сервер
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
