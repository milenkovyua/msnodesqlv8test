module.exports = [
    function createProcedureWithComplexTVP(pool) {
        return pool.query(`
        CREATE OR ALTER PROCEDURE [testschema].[complex.TypeProc]
            @tvpParam [testschema].[complexTypeTT] READONLY
        AS
        BEGIN TRY
            
            SELECT 'firstResultSet' AS resultSetName
            SELECT * from @tvpParam

        END TRY
        BEGIN CATCH
            IF @@TRANCOUNT > 0
                ROLLBACK TRANSACTION
            EXEC core.error
        END CATCH
        `);
    }
];
