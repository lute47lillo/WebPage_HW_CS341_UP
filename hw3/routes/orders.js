//Lute Lillo Portero

const { json } = require('express');
var express = require('express');
var router = express.Router();
var dmbs = require("./dmbs.js");

//Create the array of objects to be send as the request. Old homework 4.
/*var arrayOfObjects = [{
  "topping": "cherry",
  "quantity": 2
}, {
  "topping": "plain",
  "quantity": 6
}, {
  "topping": "chocolate",
  "quantity": 3
}];*/


/* POST orders listing to the client request */
router.post('/', function(req, res, next) {
    
    //requesting the month selected by the user.
    var monthVar = req.body.monthSelect;

    //res.send(arrayOfObjects); //original part homework 4

    dmbs.dbquery("SELECT * FROM ORDERS WHERE MONTH='" + monthVar + "'", function(err, data){
         
      send_data(data, res);
  });
   

});

function send_data(data, res){
  var arrayOfObjects = [];

  //send data in json form
  for(var i = 0; i<data.length; i++){
    //pushing into the array of objects
    arrayOfObjects.push({Topping: data[i].TOPPING, Quantity: data[i].QUANTITY});
  }
  
  //sending the objects into the database
  res.send(arrayOfObjects);
  
  console.log("data sent");
}

/* GET users listing. OLD Part 4 of the homework*/
/*router.get('/', function(req, res, next) {
  res.send('Orders page');
});*/

module.exports = router;