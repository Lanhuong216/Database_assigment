const connection = require('../config/db')

const getProduct = async (req, res) => {
    try {
        connection.connect(function (err) {
            if (err) throw err;
            connection.query(`SELECT P.*, C.location
FROM Product P, Inventory C
Where P.inventory_id = C.inventory_id;`, function (err, result) {
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

const getSupplier = async (req, res) => {
    try {
        connection.connect(function (err) {
            if (err) throw err;
            connection.query(`SELECT * FROM Supplier`, function (err, result) {
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

const getInventory = async (req, res) => {
    try {
        connection.connect(function (err) {
            if (err) throw err;
            connection.query(`SELECT 
    E.*, F.describle, 
    CASE 
        WHEN P.product_id IS NOT NULL THEN E.quantity_import - P.quantity
        ELSE E.quantity_import
    END AS remain_quantity
FROM 
    Product_import E
LEFT JOIN 
    Product_buy P ON E.product_id = P.product_id
JOIN 
    Product F ON E.product_id= F.product_id;
`, function (err, result) {
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
const getProductId = async (req, res) => {
    const id = String(req.params.id)
    try {
        connection.connect(function (err) {
            if (err) throw err;
            connection.query(`SELECT * FROM Product WHERE product_id=?`, [id], function (err, result) {
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
module.exports = { getSupplier, getProduct, getInventory, getProductId };
