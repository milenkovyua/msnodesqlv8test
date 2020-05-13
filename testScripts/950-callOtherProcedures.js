const tableTypes = require('./tableTypes');
const testData = require('./testingData');
module.exports = [
    // This will be successfully called because of only one row
    function callProcedureWithComplexTVP(pool) {
        const tvpParam = tableTypes.get('testschema.complexTypeTT');
        for (let i=0; i< testData.length; i++) {
            tvpParam.rows.add(...testData[i]); // percentage
        }
        const request = pool.request();
        request.input('tvpParam', /*sql.TVP,*/ tvpParam);
        return request.execute('[testschema].[complex.TypeProc]');
    }
]
