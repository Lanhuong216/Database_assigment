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

// executing connection
connection.connect(function (err) {
    if (err) throw err;
    connection.query("SELECT * FROM Employee", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});
