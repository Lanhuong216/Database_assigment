const { Pool } = require("pg");

// The secret connection string you copied earlier
const connectionString =
    "mysql -hautorack.proxy.rlwy.net -uroot -pKCIvbUEsQOsCVxYveGALhIamuPGtlOKm --port 34252 --protocol=TCP railway";

const pool = new Pool({
    connectionString,
});

module.exports = pool;