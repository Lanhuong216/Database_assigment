const connection = require('../config/db')

// Lấy danh sách tất cả nhân viên
const getCus = async (req, res) => {
    try {
        connection.connect(function (err) {
            if (err) throw err;
            connection.query(`SELECT * FROM Customer;`, function (err, result) {
                if (err) throw err;
                console.log(result);
                res.send(result)
            });
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}



module.exports = { getCus };
