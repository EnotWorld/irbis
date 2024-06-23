const express = require('express');
const router = express.Router();
const {db_connection } = require('../db'); // Импортируем функцию для выполнения запросов к базе данных
// Маршрут для получения новостей

router.get('/news', async (req, res) => {
  try {
    const [rows, fields] = await db_connection.query("SELECT * FROM news"); // Выполнение запроса
    res.json(rows); // Отправка новостей в ответ
  } catch (error) {
    console.error('Ошибка при получении новостей:', error);
    res.status(500).json({ error: 'Ошибка при получении новостей' });
  }
});




module.exports = router;
