const sql = require('mssql');
require('dotenv').config();

const config = {
    user: process.env.DB_USER || 'td',
    password: process.env.DB_PASS || '123',
    server: process.env.DB_SERVER || 'localhost',
    database: process.env.DB_NAME || 'HCSDL',
    options: {
        encrypt: true,
        trustServerCertificate: true,
    },
};

sql.connect(config)
    .then(pool => {
        console.log('Kết nối SQL Server thành công');
        return pool.request().query('SELECT * FROM Employee');
    })
    .then(result => {
        console.log(result.recordset);
    })
    .catch(err => {
        console.error('Lỗi kết nối:', err);
    });
