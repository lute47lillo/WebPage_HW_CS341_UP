//Lute Lillo Portero


//Handles events of the webpage
eventHandler = function (month){
     //Get values of the order
     var number_toppings = $("#number option:selected").attr('value');
     var type_topping = $('input[name="topping"]:checked').val();
                
     //Check if no type was selected from the radio button group.
     if(type_topping==undefined){
         var type_topping = ("No topping was selected. A Classic cheesecake will be delivered")
     }

     //Get text input and look for vegan word.
     var special_notes = document.getElementById("myTextarea").value;
     var look_vegan = special_notes.includes("vegan",0);
 
     //Show the order details.
     $("#nTop").text("•Number of toppings: " + number_toppings).show()
     $("#tTop").text("•Topping type: " + type_topping ).show();

     if(special_notes!=""){
         if(look_vegan){
             $("#iTop").text("WARNING! Cheesecake contains dairy.").show().css({
                 "color" : "darkred",
                 "font-size" : "35px",
             });
         }else{
             $("#iTop").text("•Special instructions for the order are: " + special_notes).show();
             
         }   
     }
    
    /*sending post request*/
    $.post("/database_orders", {Quantity:number_toppings, Topping:type_topping, Notes:special_notes});

     $(".resume").css({
         "color" : "black",
         "font-size" : "25px",
         "font-family": "Times New Roman, Times, serif",
         "padding-top" : "10px",
         "padding-left" : "520px"
     });

     
     //Remove the form sections
     $(".order").remove();
     $(".toppings").remove();
     $(".special").remove();

     //Show thankful message.
     $(".orderPlaced").text("THANK YOU! Your order has been placed.").show().css({
         "color" : "blue",
         "font-size" : "40px",
         "font-family": "Times New Roman, Times, serif",
         "padding-top" : "40px",
         "padding-right" : "30px"
     });
 } 

$(document).ready(function(){             
    $(":submit").click(eventHandler); 


    //Change the month and the content depending which one is selected - Added hW5
    $(document).ready(function () {  
        $(".dropdown-content option").click(function() {
            
            var token = $(this).text(); 
            $("#monthSelect").text(token); 
    

            $.post('../orders', { monthSelect:token },
            function(data) {

                var chocolate_quantity = 0;
                var cherry_quantity = 0;
                var plain_quantity = 0;

                //Retrieve total quantities for each month - New formatting HW5
                for (var i = 0; i<data.length; i++){
                    if(data[i].Topping == "chocolate"){
                        chocolate_quantity += data[i].Quantity;
                    }
                    else if(data[i].Topping == "cherry"){
                        cherry_quantity += data[i].Quantity;
                    }
                    else if(data[i].Topping == "plain"){
                        plain_quantity += data[i].Quantity;
                    }
                }
     
                //Update the html with the new quantities
                var li = "<li>" + chocolate_quantity + " Chocolate </li>"
                + "<li>" + cherry_quantity + " Cherry </li>"
                + "<li>" + plain_quantity + " Plain </li>";
     
                //update html
                $(list).html(li);
                    
            }, "json");
        });
    });
});

