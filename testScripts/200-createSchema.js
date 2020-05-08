module.exports = function createSchema(pool) {
    return pool.query(`
    IF NOT EXISTS (
        SELECT  *
        FROM    sys.schemas
        WHERE   name = N'testschema'
    )
    EXEC('CREATE SCHEMA [testschema]');`);
};
