if (!process.env.DB_DRIVER) {
    require('dotenv').config();
}

const sqlcon = require('./connection');
const tests = require('./testScripts');
var bluebird = require("bluebird");

async function runTests() {
    const pool = await sqlcon.getConnection();

    const errors = {};
    const results = {};

    await bluebird.each(tests, async (test, i) => {
        try {
            console.log(`${i}${" ".repeat(3-String(i).length)}- ${test.name}:${" ".repeat(51-test.name.length)}start`);
            const testResult = await test(pool);
            // if the test does not throw error, we consider it successful
            console.log(`${i}${" ".repeat(3-String(i).length)}- ${test.name}:${" ".repeat(51-test.name.length)}success`);
            results[test.name] = testResult;
        } catch (err) {
            // otherwise it goes to failed tests
            console.log(`${i}${" ".repeat(3-String(i).length)}- ${test.name}:${" ".repeat(51-test.name.length)}fail`);
            errors[test.name] = err;
        }
    });

    if (process.env.LIST_ERRORS && process.env.LIST_ERRORS !== 'false') {
        console.log(JSON.stringify(errors))
    }

    if (process.env.LIST_RESULTS && process.env.LIST_RESULTS !== 'false') {
        console.log(JSON.stringify(results))
    }
};

runTests();