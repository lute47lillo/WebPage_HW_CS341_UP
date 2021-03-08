/*
Lute Lillo Portero
*/


var express = require('express');
var router = express.Router();
var dmbs = require("./dmbs.js");

router.post('/', function(req, res, next) {

   //Set the order to a specific day.
    var orderID = Math.random() * (1000 - 100) + 100;
    var month = 'AUG';
    var day = 25;

    //request data 
    var quantity = req.body.Quantity;
    var topping = req.body.Topping;
    var special_notes = req.body.Notes;

    //Querying the data into the google cloud sql database
    dmbs.dbquery("INSERT INTO ORDERS (ORDERID, MONTH, DAY, QUANTITY, TOPPING, NOTES) VALUES ('"+
        orderID +"', '"+ month +"', '"+ day +"', '"+ quantity +"', '"+ topping +"', '"+ special_notes +"')",
        function(err, data){ }
    );
});

module.exports = router;
