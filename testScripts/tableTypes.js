const sql = require(process.env.DB_DRIVER);

const tableTypes = {};

module.exports = {
    add: function(name, type) {
        tableTypes[name] = type;
    },
    get: function(name) {
        const tt = new sql.Table(name);
        tableTypes[name].forEach(columnData => {
            if (columnData.params) {
                tt.columns.add(columnData.name, (sql[columnData.type])(...columnData.params));
            } else {
                tt.columns.add(columnData.name, sql[columnData.type])
            }
            
        });
        return tt;
    }
}