function order(){
  var size = document.getElementById("size").value;
  var crust= document.getElementById("crust").value;
  var toppings= document.getElementById("toppings").value;
  if(size == 1){
    alert("Toppings of the pizza you have  selected, cotsts of ksh. 300/= on top of what the pizza costs");
    return false;
  }

else if (size === 2) {
  alert("Toppings of the pizza you have  selected, cotsts of ksh. 200/= on top of what the pizza costs");
  return false;
}
else  {
  alert("Toppings of the pizza you have  selected, cotsts of ksh. 100/= on top of what the pizza costs");
  return true;
}
}





// $(document).ready(function(){
//   $('submit').submit(function{
//     alert("name, thank you for getting out to us")
//   });
// });
//



// function selectGender(){
//   var gender = document.getElementById("list").value;
//   if (gender == 0) {
//     alert("Gender must be selected");
//     return false;
//   }
// }
