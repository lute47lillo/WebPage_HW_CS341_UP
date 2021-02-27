//Lute Lillo Portero
//Create a test to check if my array of objects has been properly created.

const orders = require('../routes/orders');

var arrayOfObjects = [{
    "topping": "cherry",
    "quantity": 2
  }, {
    "topping": "plain",
    "quantity": 6
  }, {
    "topping": "chocolate",
    "quantity": 3
  }];


test('Check for JSON objects', () =>{
    
    expect(arrayOfObjects).toEqual(          // Check if my array is equal to
        expect.arrayContaining([      // an array containing
          expect.objectContaining({   // an object that contains
            topping: 'plain'               // the topping plain
        })
        ])
      )
});

