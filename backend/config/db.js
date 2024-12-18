// Filename - server.js

// importing mysql module
const mysql = require('mysql2');

// configurations for creating mysql connection
const connection = mysql.createConnection({
    host: 'junction.proxy.rlwy.net',
    port: 38200,
    database: 'railway',
    user: 'root',
    password: 'uvmJxwfhghmZjRJvAkviWMZYqJuRmSGR'
});
module.exports = connection;