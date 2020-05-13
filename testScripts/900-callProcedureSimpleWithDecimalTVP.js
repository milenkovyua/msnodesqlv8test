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
    // This will transform the data before passing it to SQL Server instance
    function callProcedureSimpleWithDecimalTVPFail(pool) {
        const tvpParam = tableTypes.get('testschema.withDecimalTypeTT');
        tvpParam.rows.add(30.11); // percentage
        tvpParam.rows.add(27.22); // percentage
        tvpParam.rows.add(28); // percentage
        const request = pool.request();
        request.input('tvpParam', /*sql.TVP,*/ tvpParam);
        return request.execute('[testschema].[simple.withDecimalTVP]');
    },
]
