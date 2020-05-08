const tableTypes = require('./tableTypes');
const sql = require(process.env.DB_DRIVER);

module.exports = function callSimpleTVPProcedure(pool) {
    const arrayList = tableTypes.get('testschema.arrayList');
    arrayList.rows.add('firstArgRow');
    arrayList.rows.add('secondArgRow');
    arrayList.rows.add('thirdArgRow');
    const request = pool.request();
    request.input('data', arrayList); // could be called with sql.TVP  as second parameter and arrayList as third
    return request.execute('[testschema].[simple.tvp]');
};
