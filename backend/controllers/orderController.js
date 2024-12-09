const connection = require('../config/db')

// Lấy danh sách tất cả nhân viên
const getOrder = async (req, res) => {
    try {
        connection.connect(function (err) {
            if (err) throw err;
            connection.query(`SELECT O.*, C.name
FROM Order_Bill O, Customer C
Where O.customer_id = C.customer_id;`, function (err, result) {
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

const getDefectiveOrder = async (req, res) => {
    try {
        connection.connect(function (err) {
            if (err) throw err;
            connection.query(`SELECT *
FROM Order_Bill
WHERE status = 'error';`, function (err, result) {
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

module.exports = { getOrder, getDefectiveOrder };
