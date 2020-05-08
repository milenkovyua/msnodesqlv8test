const tableTypes = require('./tableTypes');
const sql = require(process.env.DB_DRIVER);

module.exports = function createTypeArrayList(pool) {
    tableTypes.add('testschema.arrayList', [
        {name: 'value', type: 'NVarChar', params: [100]}
    ]);
    return pool.query(`
    IF TYPE_ID(N'testschema.arrayList') IS NULL
    CREATE TYPE [testschema].[arrayList] AS TABLE ([value] [nvarchar] (100))
    `);
};
