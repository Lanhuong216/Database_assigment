// Filename - server.js

// importing mysql module
const mysql = require('mysql2');

// configurations for creating mysql connection
const connection = mysql.createConnection({
    host: 'autorack.proxy.rlwy.net',
    port: 34252,
    database: 'railway',
    user: 'root',
    password: 'KCIvbUEsQOsCVxYveGALhIamuPGtlOKm'
});
module.exports = connection;