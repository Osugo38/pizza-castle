//business logic
function Details(type, size, crust, toppings, quantity){
  this.selectedType = type;
  this.selectedSize = size;
  this.selectedCrust = crust;
  this.selectedToppings = toppings;
  this.selectedQuantity = quantity;
}

function Total(price, quantity, delivery){
  this.price = price;
  this.quantity = quantity;
  this.delivery = delivery;
}

Total.prototype.finalTotal = function(){
  return this.price * this.quantity + this.delivery;
}

  //ui logic
$(document).ready(function(){
  $('#myOrder').submit(function(event){
    event.preventDefault();

    var selectedDeliver = parseInt($('#delivery-option').val());
    var deliverPrices = [200, 0]
    var sizePrices = [950, 700, 500];
    var inputtedType = $('#type').val();
    var inputtedCrust = $('#crust').val();
    var inputtedTopping = $('#toppings').val();
    var inputtedSize = parseInt($('#size').val());
    var pizzaPrice = sizePrices[inputtedSize-1];
    var inputtedQuantity = parseInt($('#quantity').val());
    var deliveryPrice = deliverPrices[selectedDeliver-1];

    var newDetails = new Details(inputtedType, inputtedSize, inputtedCrust, inputtedTopping, inputtedQuantity);
    var newTotal = new Total(pizzaPrice, inputtedQuantity, deliveryPrice);
    var newBill = newTotal.finalTotal();


    document.getElementById("summary").value = "Your pizza type : " + newDetails.selectedType + '\n' + "Your pizza toppings : " + newDetails.selectedToppings + '\n' + "Your pizza crust : "+ newDetails.selectedCrust +'\n'+"Your delivery fee : "+ newTotal.delivery +'\n'+ "Your bill : " + newBill;

  });

  $('#checkout-form').submit(function(event){
    event.preventDefault();

    alert('Thank You for Being A loyal Customer!!.Your order has been well received');
    document.getElementById('myOrder').reset();
    document.getElementById('checkout-form').reset();

  });
});
