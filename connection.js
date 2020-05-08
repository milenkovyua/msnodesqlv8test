const sql = require(process.env.DB_DRIVER);

const portInstanceOption = {};

if ( process.env.DB_INSTANCE ) {
    portInstanceOption.instanceName = process.env.DB_INSTANCE
} else if ( process.env.DB_PORT ) {
    portInstanceOption.port = process.env.DB_PORT
}

const config = {
    server: process.env.DB_HOST,
    options: {
        ...portInstanceOption
    }
};

if (process.env.TRUSTED_DB_CON && process.env.TRUSTED_DB_CON !== 'false') {
    config.options.trustedConnection = true;
} else {
    config.user = process.env.DB_USER;
    config.password = process.env.DB_PASSWORD;
}

if (process.env.DB_NAME) {
    config.database = process.env.DB_NAME;
}

let pool = null;

module.exports = {
    getConnection: async function() {
        if (!pool) {
            console.log(JSON.stringify(config))
            pool = new sql.ConnectionPool(config);
            try {
                await pool.connect();
                return pool;
            } catch (err) {
                throw err;
            }
        } else if (pool.connected) {
            return pool;
        } else {
            return null;
        }
    }
}