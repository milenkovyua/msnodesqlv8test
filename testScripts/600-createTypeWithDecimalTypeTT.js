const tableTypes = require('./tableTypes');

module.exports = function createTypeWithDecimalTypeTT(pool) {
    tableTypes.add('testschema.withDecimalTypeTT', [
        {name: 'percentage', type: 'Numeric', params: [19, 4]}
    ]);

    return pool.query(`
    IF TYPE_ID(N'testschema.withDecimalTypeTT') IS NULL
    CREATE TYPE [testschema].[withDecimalTypeTT] AS TABLE (
        [percentage] DECIMAL(19, 4)
    )
    `);
};