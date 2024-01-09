console.log("Namaste");


 setTimeout(function (){
     console.log("Javascript");

}, 5000);
 console.log("Season 2");




const cart =["Shoes", "Pants", "Books"];
// This structure is Known as Pyramid Of Doom
 api.createOrder(cart, function (){

    api.proceedToPayment(function (){

        api.showOrderSummary(function (){
        
        api.updateWallet()
        
         })
        
         })
    
     })


     ///  Advantage : Callbacks are like super power full way of handling async operations in Javascript

     //Issues that we face with call back is :

     // 1. Callback Hell
     // 2. Inversion Of Control
     

    
 
