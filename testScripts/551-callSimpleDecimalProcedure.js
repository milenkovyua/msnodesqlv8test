const tableTypes = require('./tableTypes');
const sql = require(process.env.DB_DRIVER);

module.exports = function callSimpleDecimalProcedure(pool) {
    const request = pool.request();
    // const dec = sql.Decimal(19, 4);
    // // dec.value=
    request.input('dec', sql.Float(19, 4), 22.45); // could be called with sql.TVP  as second parameter and arrayList as third
    // request.input('dec', sql.Decimal(19, 4), 22.45); // could be called with sql.TVP  as second parameter and arrayList as third
    return request.execute('[testschema].[simple.decimal]');
};
