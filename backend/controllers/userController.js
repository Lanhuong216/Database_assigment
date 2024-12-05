const { poolPromise, sql } = require('../config/db');

// Lấy danh sách tất cả người dùng
const getUsers = async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query('SELECT * FROM Users');
    res.json(result.recordset);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Thêm một người dùng mới
const addUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    const pool = await poolPromise;
    await pool
      .request()
      .input('name', sql.NVarChar, name)
      .input('email', sql.NVarChar, email)
      .query('INSERT INTO Users (Name, Email) VALUES (@name, @email)');
    res.status(201).send('User added successfully');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

module.exports = { getUsers, addUser };
