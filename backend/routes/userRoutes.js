const express = require('express');
const { getUsers, addUser } = require('../controllers/userController');

const router = express.Router();

router.get('/', getUsers); // Lấy danh sách người dùng
router.post('/', addUser); // Thêm người dùng mới

module.exports = router;
