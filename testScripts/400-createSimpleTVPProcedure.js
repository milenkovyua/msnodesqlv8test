module.exports = function createSimpleTVPProcedure(pool) {
    return pool.query(`
    CREATE OR ALTER PROCEDURE [testschema].[simple.tvp]
        @data [testschema].[arrayList] READONLY
    AS
    BEGIN TRY
        
        SELECT 'firstResultSet' AS resultSetName
        select * from @data
        
        SELECT 'secondResultSet' AS resultSetName
        select * from @data
        
        SELECT 'thirdResultSet' AS resultSetName
        select * from @data

    END TRY
    BEGIN CATCH
        IF @@TRANCOUNT > 0
            ROLLBACK TRANSACTION
        EXEC core.error
    END CATCH

    `);
};
