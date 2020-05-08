module.exports = function simpleSelect(pool) {
    return pool.query(`select (42) as [num], ('hi') as [str]`);
};
