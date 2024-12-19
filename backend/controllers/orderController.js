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
                res.send(result)
            });
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}
const postOrder = async (req, res) => {
    console.log(Object.keys(req.body).length)
    try {
        connection.connect(function (err) {
            if (err) throw err;
            let customerId = ""
            let orderId = ""
            let totalPrice = 0
            req.body.forEach(element => {
                //query customerId
                const selectQuery = `
                    SELECT customer_id 
                    FROM Customer
                    WHERE name = ? AND address = ? AND phone_number = ?;
                    `;
                connection.query(selectQuery, [element.customer_name, element.address, element.phone_number], function (err, select) {
                    if (err) throw err;
                    if (select.length === 0) {
                        const insertQuery = `INSERT INTO Customer (name, address, phone_number, email)
                         VALUES (?, ?, ?, ?); `
                        connection.query(insertQuery, [element.customer_name, element.address, element.phone_number, element.email], function (err, insert) {
                            if (err) throw err;
                            connection.query(`SELECT customer_id FROM Customer WHERE customer_id=(SELECT max(customer_id) FROM Customer);`, function (err, newResult) {
                                if (err) throw err;
                                customerId = newResult[0].customer_id;
                                if (element === req.body[0]) {
                                    insertOrderBill(customerId, (orderId) => {
                                        // Use orderId here for further processing
                                        insertProductBuy(customerId, orderId, element.quantity, element.productId, element.size, element.color)
                                    });
                                } else {
                                    selectOrderBill((orderId) => {
                                        // Use orderId here for further processing
                                        insertProductBuy(customerId, orderId, element.quantity, element.productId, element.size, element.color)
                                    });
                                }

                            });
                        })
                    } else {
                        customerId = select[0].customer_id
                        insertOrderBill(customerId, (orderId) => {
                            // Use orderId here for further processing
                            insertProductBuy(customerId, orderId, element.quantity, element.productId, element.size, element.color)
                        });
                    }
                });
            });
            res.status(200).send('Done');
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}
function insertOrderBill(customerId, callback) {
    const orderQuery = `
        INSERT INTO Order_Bill (customer_id, payment, status, shop_id, employee_create, total_price)
        VALUES (?, '1', 'done', 'BR1', 'EM1', 0);
    `;
    connection.query(orderQuery, [customerId], function (err, result) {
        if (err) throw err;

        // Get the newly created order_id
        connection.query(
            `SELECT order_id FROM Order_Bill WHERE order_id = (SELECT MAX(order_id) FROM Order_Bill);`,
            function (err, selectOrderId) {
                if (err) throw err;
                const orderId = selectOrderId[0].order_id;
                callback(orderId)
            }
        );
    });
}
function selectOrderBill(callback) {
    connection.query(
        `SELECT order_id FROM Order_Bill WHERE order_id = (SELECT MAX(order_id) FROM Order_Bill);`,
        function (err, selectOrderId) {
            if (err) throw err;
            const orderId = selectOrderId[0].order_id;
            callback(orderId)
        }
    );
}
function insertProductBuy(customerId, orderId, quantity, productId, size, color) {
    connection.query(`INSERT INTO Product_buy (customer_id, order_id, quantity, product_id, size, color)
                     VALUES (?, ?, ?, ?, ?, ?);`, [customerId, orderId, quantity, productId, size, color], function (err, insertProduct) {
        connection.query(`SELECT sell_price_per_product FROM Product WHERE product_id=?`, [productId], function (err, result) {
            connection.query(`SELECT total_price FROM Order_Bill WHERE order_id = ?`, [orderId], function (err, price) {
                let total_price = price.reduce((total, item) => {
                    return total + (parseFloat(result[0].sell_price_per_product) * parseInt(quantity));
                }, 0);
                connection.query(`UPDATE Order_Bill
                SET total_price=?
                WHERE order_id=?`, [total_price * 1000, orderId])
            })

        })
    })

}
module.exports = { getOrder, getExportOrder, getDefectiveOrder, getSpecificOrder, postOrder };
