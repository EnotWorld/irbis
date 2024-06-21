const mysql = require('mysql');

// Настройки подключения
const connection = mysql.createConnection({
  host: 'amdreag1.beget.tech',
  user: 'amdreag1_irbis',
  database: 'amdreag1_irbis',
  password: '32W8xZNnhnCo'
});

// Подключение к базе данных
connection.connect((err) => {
  if (err) {
    console.error('Ошибка подключения к базе данных:', err.stack);
    return;
  }
  console.log('Подключено к базе данных как id ' + connection.threadId);
});

// Функция для выполнения запросов в базу данных
function query(sql, args) {
  return new Promise((resolve, reject) => {
    connection.query(sql, args, (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
}

module.exports = {
  connection,
  query
};
