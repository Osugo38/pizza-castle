$(document).ready(function(){
  $("#clic").click(function(){
    $(".checkout").toggle();
      $("#clic").toggle();
      });

      $(".checkout").click(function(){
        $("#clic").show();
          $(".checkout").hide();

});
});

$(document).ready(function(){
  $("#pata").click(function(){
    $(".formo").toggle();
    $("#pata").toggle();
  });
     $(".formo").click(function(){
       $("#pata").hide();
       $(".formo").show();
     });
});

$(document).ready(function(){
  $("#pata1").click(function(){
    $(".formo1").toggle();
    $("#pata1").toggle();
  });
     $(".formo1").click(function(){
       $("#pata1").hide();
       $(".formo1").show();
     });
});

$(document).ready(function(){
  $("#pata2").click(function(){
    $(".formo2").toggle();
    $("#pata2").toggle();
  });
     $(".formo2").click(function(){
       $("#pata2").hide();
       $(".formo2").show();
     });
});

$(document).ready(function(){
  $("#pata3").click(function(){
    $(".formo3").toggle();
    $("#pata3").toggle();
  });
     $(".formo3").click(function(){
       $("#pata3").hide();
       $(".formo3").show();
     });
});





function deliver(){
  prompt("ENTER THE AREA IT SHOULD BE DELIVERED AROUND NAIROBI");
  return false;
}
function okota(){
  alert("YOUR PIZZA WILL BE READY IN 10 MINUTES")
  return true;

}

//
// //business logic
//
// function order(size,crust,toppings) {
//     this.orderdSize = size;
//     this.orderedCrust = crust;
//     this.orderedToppings =toppings;
//   }
//   function PizzaOrder(){
//     this.orders=[];
//   }
// PizzaOrder.prototype.addorder = function (order){
//   this.orders.push(order);
// }
// function Order (size,crust,toppings){
//   this.size =size;
//   this.crust = crust;
//   this.topping = toppings;
// }
//

//   //ui logiic
//   $(document).ready(function() {
//   $("#myOrder").submit(function(event) {
//     event.preventDefault();
//
//     var inputtedSize = $("size").val();
//     var inputtedCrust = $("crust").val();
//     var inputtedToppings = $('input[type="checkbox"]:checked').val();
//
//     var newOrder = new Order(inputtedSize, inputtedCrust, inputtedToppings);
//     pizzaOrder.addorder(newOrder);
//
//     var pInputtedSize = pizzaDisplay[0].inputtedSize;
//     var pInputtedCrust = pizzaDisplay[0].inputtedCrust;
//     var pInputtedToppings = pizzaDisplay[0].inputtedToppings;
//

//
//
//
//   $(document).ready(function() {
//   $(".checkout").submit(function(event) {
//     event.preventDefault();
//
//     var inputtedSize = $("#size").val();
//     var inputtedCrust = $("#crust").val();
//     var inputtedToppings = $("#toppings").val();
//
//     var newOrder = new Order(inputtedSize, inputtedCrust, inputtedToppings);
//     pizzaOrder.addorder(newOrder);
//
//     $("ul#cart").append("<li><span class='.checkout'>" + newOrder + "</span></li>");
//
//     $("option#newSize").val("");
//     $("input#newCrust").val("");
//     $("input#newToppings").val("");
//   });
// });
//
//
//
//
//

// 
// function determine(){
//
//  var size = parseInt(document.getElementById("size").value);
//  var crust = parseInt(document.getElementById("crust").value);
//  var toppings = parseInt(document.getElementById("toppings").value);
//  var quantity = parseInt(document.getElementById("toppings").value);
//
//   if (size === 1) {
//     alert("waziii");
//
//
//
// }
//











var size = document.getElementById("size").value;
var crust= document.getElementById("crust").value;
var toppings= document.getElementById("toppings").value;

function order(){

  if(size === 1){
    alert("Toppings of the pizza you have  selected, costs of ksh. 300/= per pizza ordered pizza ");
    return false;
  }
else if (size === 2) {
  alert("Toppings of the pizza you have  selected, costs of ksh. 200/= per pizza ordered pizza ");
  return false;
}
else  {
  alert("Toppings of the pizza you have  selected, costs  ksh. 100/= per pizza ordered pizza ");
  return true;
}
}

function validate(){
  if(size == 0 || crust == 0 || toppings ==0){
    alert("Ensure each field is filled");
    return false;
  }
}
