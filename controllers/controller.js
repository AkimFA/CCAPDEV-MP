const db = require('../models/db.js');
const Transaction = require('../models/TransactionModel.js');
const app = require('../routes/routes.js');

const controller = {

    getFavicon: function (req, res) {
        res.status(204);
    },

    /*
    TODO:   This function is executed when the client sends an HTTP GET
            request to path `/`. This displays `index.hbs` with all
            transactions currently stored in the database.
    */
            getIndex: function(req, res) {
                res.render('home');
                // db.findMany({}, {}, function(transactions){
                //     res.render('main', {transactions}); // This is to load the page initially
                // });
            },

    /*
    TODO:   This function is executed when the client sends an HTTP GET
            request to path `/getCheckRefNo`. This function checks if a
            specific reference number is stored in the database. If the number
            is stored in the database, it returns an object containing the
            reference number, otherwise, it returns an empty string.
    */
    getCheckRefNo: function(req, res) {
        var ref = req.query.refno
        console.log(req.query)
        db.findOne(Transaction, {refno : ref}, {}, function(result){
            // console.log(result);
            res.send(result);
        });
    },

    /*
    TODO:   This function is executed when the client sends an HTTP GET
            request to path `/getAdd`. This function adds the transaction
            sent by the client to the database, then appends the new
            transaction to the list of transactions in `index.hbs`.
    */
    getAdd: function(req, res) {
        
        var iName = req.query.name;
        var iRefno = req.query.refno;
        var iAmount = req.query.amount;


        var user = {
            username: iName,
            password: iRefno
        };

        db.insertOne(Transaction, transaction, function(result)
        {
            res.send(result)
        });
    },

    /*
    TODO:   This function is executed when the client sends an HTTP GET
            request to path `/getDelete`. This function deletes the transaction
            from the database, then removes the transaction from the list of
            transactions in `index.hbs`.
    */
    getDelete: function (req, res) {
        // console.log(req.query.refno)
        db.deleteOne(Transaction, {refno: req.query.refno}, function(result){
            res.send(result)
        })
    }

}

module.exports = controller;
