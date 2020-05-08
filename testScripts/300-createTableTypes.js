const tableTypes = require('./tableTypes');

module.exports = [
    function createTypeArrayList(pool) {
        tableTypes.add('testschema.arrayList', [
            {name: 'value', type: 'NVarChar', params: [100]}
        ]);
        return pool.query(`
        IF TYPE_ID(N'testschema.arrayList') IS NULL
        CREATE TYPE [testschema].[arrayList] AS TABLE ([value] [nvarchar] (100))
        `)
    },
    function createTypeWithDecimalTypeTT(pool) {
        tableTypes.add('testschema.withDecimalTypeTT', [
            {name: 'percentage', type: 'Numeric', params: [19, 4]}
        ]);

        return pool.query(`
        IF TYPE_ID(N'testschema.withDecimalTypeTT') IS NULL
        CREATE TYPE [testschema].[withDecimalTypeTT] AS TABLE (
            [percentage] DECIMAL(19, 4)
        )
        `);
    },
    function createTypeWithDateTimeTT(pool) {
        tableTypes.add('testschema.withDateTimeTypeTT', [
            {name: 'createdOn', type: 'DateTime2'}
        ]);

        return pool.query(`
        IF TYPE_ID(N'testschema.withDateTimeTypeTT') IS NULL
        CREATE TYPE [testschema].[withDateTimeTypeTT] AS TABLE (
            [createdOn] DATETIME2
        )
        `);
    },
];
