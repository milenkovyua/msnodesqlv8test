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
    function createComplexTypeTT(pool) {
        tableTypes.add('testschema.complexTypeTT', [
            {name: 'param1', type: 'Int'},
            {name: 'param2', type: 'Int'},
            {name: 'param3', type: 'Int'},
            {name: 'param4', type: 'Decimal', params: [19, 4]},
            {name: 'param5', type: 'Decimal', params: [19, 4]},
            {name: 'param6', type: 'NVarChar', params: [36]},
            {name: 'param7', type: 'NVarChar', params: [250]},
            {name: 'param8', type: 'NVarChar', params: [250]},
            {name: 'param9', type: 'Decimal', params: [19, 4]},
            {name: 'param10', type: 'Decimal', params: [19, 4]},
            {name: 'param11', type: 'Bit'},
            {name: 'param12', type: 'Bit'}
        ]);

        return pool.query(`
        IF TYPE_ID(N'testschema.complexTypeTT') IS NULL
        CREATE TYPE [testschema].[complexTypeTT] AS TABLE (
            [param1] INT,
            [param2] INT,
            [param3] INT,
            [param4] DECIMAL(19, 4),
            [param5] DECIMAL(19, 4),
            [param6] NVARCHAR(36),
            [param7] NVARCHAR(250),
            [param8] NVARCHAR(250),
            [param9] DECIMAL(19, 4),
            [param10] DECIMAL(19, 4),
            [param11] BIT,
            [param12] BIT
        )
        `);
    },
];
