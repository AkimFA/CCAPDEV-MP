
const { Int32 } = require('mongodb');
var mongoose = require('mongoose');

/*
    TODO:   Complete the TransactionSchema which will contain the name,
            reference number, and the amount of a transaction in the database.
*/

var TransactionSchema = new mongoose.Schema({
    name: String,
    refno: Number,
    amount: Number
});

module.exports = mongoose.model('Transaction', TransactionSchema);
