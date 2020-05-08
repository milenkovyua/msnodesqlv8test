const tableTypes = require('./tableTypes');

module.exports = [
    // This will be successfully called because of only one row
    function callProcedureSimpleWithDecimalTVPSuccess(pool) {
        const tvpParam = tableTypes.get('testschema.withDecimalTypeTT');
        tvpParam.rows.add(30.1); // percentage
        const request = pool.request();
        request.input('tvpParam', /*sql.TVP,*/ tvpParam);
        return request.execute('[testschema].[simple.withDecimalTVP]');
    },
    // This will fail and crash the node.js process instance
    function callProcedureSimpleWithDecimalTVPFail(pool) {
        const tvpParam = tableTypes.get('testschema.withDecimalTypeTT');
        tvpParam.rows.add(30.1); // percentage
        tvpParam.rows.add(27.2); // percentage
        const request = pool.request();
        request.input('tvpParam', /*sql.TVP,*/ tvpParam);
        return request.execute('[testschema].[simple.withDecimalTVP]');
    },
]
