const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware для парсинга body запросов
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware для сессий
app.use(session({
  secret: 'secret-key', // Секретный ключ для подписи куки сессии
  resave: false,
  saveUninitialized: false
}));

// Простая база данных пользователей
const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' }
];

// Роут для страницы авторизации
app.get('/login', (req, res) => {
  res.send(`
        <form action="/login" method="post">
            <div>
                <label>Username:</label>
                <input type="text" name="username" required>
            </div>
            <div>
                <label>Password:</label>
                <input type="password" name="password" required>
            </div>
            <button type="submit">Login</button>
        </form>
    `);
});

// Обработка POST запроса для авторизации
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    req.session.authenticated = true;
    req.session.username = username;
    res.redirect('/profile');
  } else {
    res.send('Invalid username or password');
  }
});

// Роут для страницы профиля (требующей авторизации)
app.get('/profile', (req, res) => {
  if (req.session.authenticated) {
    res.send(`Welcome, ${req.session.username}! <a href="/logout">Logout</a>`);
  } else {
    res.redirect('/login');
  }
});

// Роут для выхода (удаление сессии)
app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/login');
    }
  });
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
