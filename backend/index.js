// Import các thư viện cần thiết
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); // Đọc cấu hình từ file .env

// Kết nối với SQL Server qua db.js
const { poolPromise, sql } = require('./config/db');

// Tạo ứng dụng Express
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API Routes

// Route: Lấy danh sách người dùng
app.get('/api/users', async (req, res) => {
  try {
    const pool = await poolPromise; // Kết nối đến SQL Server
    const result = await pool.request().query('SELECT * FROM Users'); // Lấy dữ liệu từ bảng Users
    res.json(result.recordset); // Gửi dữ liệu về client
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Route: Thêm người dùng mới
app.post('/api/users', async (req, res) => {
  const { name, email } = req.body; // Lấy dữ liệu từ request body
  try {
    const pool = await poolPromise; // Kết nối đến SQL Server
    await pool
      .request()
      .input('name', sql.NVarChar, name) // Gán giá trị name
      .input('email', sql.NVarChar, email) // Gán giá trị email
      .query('INSERT INTO Users (Name, Email) VALUES (@name, @email)'); // Thực thi câu lệnh SQL
    res.status(201).send('User added successfully'); // Trả kết quả thành công
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Khởi chạy server
const PORT = process.env.PORT || 5000; // Lấy PORT từ file .env hoặc mặc định là 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
