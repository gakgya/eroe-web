const mysql = require('mysql');
 
const db = mysql.createPool({
    host: 'http://gakgya.iptime.org/phpmyadmin/',
    user: 'user',
    password: '',
    database: 'mysql'
});
 
module.exports = db;
