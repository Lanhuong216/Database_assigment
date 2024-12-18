const connection = require('../config/db')

// Lấy danh sách tất cả nhân viên
const postNew = (req, res) => {
    const nameMar = req.body;
    console.log(req.body)
    // Validate required fields
    if (!nameMar) {
        return res.status(400).json({ message: "Required fields are missing." });
    }

    // Send success response
    res.status(201).json({
        message: "Marketing program added successfully!",
        data: "newMarketingProgram"
    });
}

module.exports = { postNew };
