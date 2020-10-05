module.exports = function createSimpleDecimalProcedure(pool) {
    return pool.query(`
    CREATE OR ALTER PROCEDURE [testschema].[simple.decimal]
        @dec DECIMAL(19, 4) NULL
    AS
    BEGIN TRY
        
        SELECT 'firstResultSet' AS resultSetName
        select @dec
        
        SELECT 'secondResultSet' AS resultSetName
        select @dec
        
        SELECT 'thirdResultSet' AS resultSetName
        select @dec

    END TRY
    BEGIN CATCH
        IF @@TRANCOUNT > 0
            ROLLBACK TRANSACTION
        EXEC core.error
    END CATCH

    `);
};
