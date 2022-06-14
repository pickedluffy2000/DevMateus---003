const mysql = require("mysql2");

const connection = mysql.createConnection({
host: 'localhost',
user: 'user',
database: 'oneacademy',
password: 'password'
});

module.exports = connection;