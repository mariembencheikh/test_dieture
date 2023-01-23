const {readFileSync} = require('fs');

let loadTransaction = () => JSON.parse(readFileSync('transaction.json'));

module.exports = {loadTransaction}