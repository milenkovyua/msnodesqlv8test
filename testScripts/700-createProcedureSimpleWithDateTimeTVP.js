module.exports = function createProcedureSimpleWithDateTimeTVP(pool) {
    return pool.query(`
    CREATE OR ALTER PROCEDURE [testschema].[simple.withDateTimeTVP]
        @tvpParam [testschema].[withDateTimeTypeTT] READONLY
    AS
    BEGIN TRY
        
        SELECT 'firstResultSet' AS resultSetName
        SELECT * from @tvpParam
        
        SELECT 'secondResultSet' AS resultSetName
        SELECT * from @tvpParam
        
        SELECT 'thirdResultSet' AS resultSetName
        SELECT * from @tvpParam

    END TRY
    BEGIN CATCH
        IF @@TRANCOUNT > 0
            ROLLBACK TRANSACTION
        EXEC core.error
    END CATCH
    `);
};
