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
            connection.query(`SELECT O.*, C.name
FROM Order_Bill O, Customer C
WHERE O.customer_id = C.customer_id AND  O.status = 'error';`, function (err, result) {
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


const getExportOrder = async (req, res) => {
    try {
        connection.connect(function (err) {
            if (err) throw err;
            connection.query(`SELECT * FROM Issue_bill`, function (err, result) {
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
const getSpecificOrder = async (req, res) => {
    const id = String(req.params.id)
    try {
        connection.connect(function (err) {
            if (err) throw err;
            connection.query(`SELECT 
    ob.order_id, 
    pb.color AS product_color, 
    pb.quantity AS product_quantity, 
    p.sell_price_per_product AS product_price,
    pb.size AS product_size,
    pb.product_id, 
    ob.total_price, 
    ob.voucher_used, 
    ob.payment AS order_payment,
    c.name AS customer_name,
    c.phone_number AS customer_phone,
    c.birth_date AS customer_birth_date,
    c.sex AS customer_sex
FROM 
    Order_Bill ob
JOIN 
    Product_buy pb 
ON 
    ob.order_id = pb.order_id
JOIN 
    Customer c
ON 
    ob.customer_id = c.customer_id
JOIN
	Product p
ON
    p.product_id=pb.product_id
WHERE 
    ob.order_id = ?;`, [id], function (err, result) {
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
const postOrder = async (req, res) => {
    console.log(req.body)
    // Validate required fields
    /* if (!nameMar) {
        return res.status(400).json({ message: "Required fields are missing." });
    } */

    // Send success response
    res.status(201).json({
        message: "Marketing program added successfully!",
        data: "newMarketingProgram"
    });
}
module.exports = { getOrder, getExportOrder, getDefectiveOrder, getSpecificOrder, postOrder };
