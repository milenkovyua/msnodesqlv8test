const tableTypes = require('./tableTypes');

module.exports = [
    // This will be successfully called because of only one row
    function callProcedureSimpleWithDateTimeTVPSuccess(pool) {
        const tvpParam = tableTypes.get('testschema.withDateTimeTypeTT');
        tvpParam.rows.add(new Date('2020-05-08')); // date
        const request = pool.request();
        request.input('tvpParam', /*sql.TVP,*/ tvpParam);
        return request.execute('[testschema].[simple.withDateTimeTVP]');
    },
    // This will fail because we have two rows in the TVP table
    function callProcedureSimpleWithDateTimeTVPFail(pool) {
        const tvpParam = tableTypes.get('testschema.withDateTimeTypeTT');
        tvpParam.rows.add(new Date('2020-05-07')); // date
        tvpParam.rows.add(new Date('2020-05-08')); // date
        const request = pool.request();
        request.input('tvpParam', /*sql.TVP,*/ tvpParam);
        return request.execute('[testschema].[simple.withDateTimeTVP]');
    },
]
