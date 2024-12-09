const connection = require('../config/db')

// Lấy danh sách tất cả nhân viên
const getEmp = async (req, res) => {
  try {
    connection.connect(function (err) {
      if (err) throw err;
      connection.query(`SELECT 
    E.*, 
    CASE 
        WHEN P.employee_ID IS NOT NULL THEN 'Part_time'
        WHEN F.employee_ID IS NOT NULL THEN F.Position
        ELSE 'Unknown'
    END AS EmployeeType
FROM 
    Employee E
LEFT JOIN 
    Part_time P ON E.employee_ID = P.employee_ID
LEFT JOIN 
    Full_time F ON E.employee_ID = F.employee_ID;`, function (err, result) {
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

module.exports = { getEmp };
