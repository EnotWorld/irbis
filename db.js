const mysql = require('mysql2/promise');

// Настройки подключения
const db_connection = mysql.createPool({
  host: 'amdreag1.beget.tech',
  user: 'amdreag1_irbis',
  database: 'amdreag1_irbis',
  password: '32W8xZNnhnCo',
  waitForConnections: true,
  connectionLimit: 10, // Максимальное количество соединений в пуле
  queueLimit: 0

});

module.exports = {
  db_connection,
};