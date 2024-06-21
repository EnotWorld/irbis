const express = require('express');
const router = express.Router();
const { query } = require('../db'); // Импортируем функцию для выполнения запросов к базе данных
// Маршрут для получения новостей
router.get('/news', (req, res) => {
  const sql = 'SELECT * FROM news'; // SQL-запрос для выборки всех новостей
  // Выполняем SQL-запрос с использованием функции query из db.js
  query(sql)
    .then(news => {
      console.log(news);
      res.json(news); // Отправляем данные в формате JSON
    })
    .catch(error => {
      console.error('Ошибка при получении новостей:', error);
      res.status(500).json({ error: 'Ошибка при получении новостей' });
    });
});


module.exports = router;
