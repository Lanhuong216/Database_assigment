// Import các thư viện cần thiết
const express = require('express');
require('dotenv').config(); // Đọc cấu hình từ file .env
const connection = require('./config/db')
const app = express();
var cors = require('cors');
// Khởi chạy server
const PORT = 3000;
app.use(cors());
app.get('/api/post', async (req, res) => {
  try {
    connection.connect(function (err) {
      if (err) throw err;
      connection.query("SELECT * FROM Employee", function (err, result) {
        if (err) throw err;
        console.log(result);
        res.send(result)
      });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
})
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
