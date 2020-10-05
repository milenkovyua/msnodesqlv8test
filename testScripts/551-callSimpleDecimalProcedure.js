const tableTypes = require('./tableTypes');
const sql = require(process.env.DB_DRIVER);

module.exports = function callSimpleDecimalProcedure(pool) {
    const request = pool.request();
    request.input('dec', sql.Float(19, 4), 22.45);
    // request.input('dec', sql.Decimal(19, 4), 22.45);
    return request.execute('[testschema].[simple.decimal]');
};
