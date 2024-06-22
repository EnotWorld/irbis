const mysql = require('mysql2');

// Настройки подключения
const db_connection = mysql.createConnection({
  host: 'amdreag1.beget.tech',
  user: 'amdreag1_irbis',
  database: 'amdreag1_irbis',
  password: '32W8xZNnhnCo'
});
const pool = mysql.createPool({
  keepAliveInitialDelay: 10000, // 0 by default.
  enableKeepAlive: true, // false by default.
  maxIdle: 0
});

// Подключение к базе данных
db_connection.connect((err) => {
  if (err) {
    console.error('Ошибка подключения к базе данных:', err.stack);
    return;
  }
  console.log('Подключено к базе данных как id ' + db_connection.threadId);
});

// Функция для выполнения запросов в базу данных
function query(sql, args) {
  return new Promise((resolve, reject) => {
    db_connection.query(sql, args, (err, rows) => {
      if (err) return console.error(err);
      resolve(rows);
    });
  });
}


module.exports = {
  db_connection,
  query
};