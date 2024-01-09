const cart=["kurtas", "Pants","shirts"];

 createOrder(cart)
 .then(function (orderId){
    console.log(orderId);
    return orderId;
})
 .then(function (orderId){
    return proceedToPayment(orderId);
 })
 .then(function (paymentInfo){
    console.log(paymentInfo);
    return showOrderSummary(paymentInfo);
    
 })
 .then(function (showOrderSummary){
    console.log(showOrderSummary);
    return updateWallet(showOrderSummary);
 })
 .then(function (updateWallet){
    return console.log(updateWallet);
})
.catch(function (error){
    console.log(error.message);
 })
/// Producer 

function createOrder(cart){

const pr=new Promise(function(resolve,reject){
    
    // Validate cart
    if(!validateCart(cart)){
        const error=new Error("Cart is not Valid");
        reject(error);
    }

    // Logic for creatingOrder
    const orderId = "12345";
    if(orderId){
        setTimeout(function(){
            resolve(orderId);
        } ,5000)  
    }
});

    return pr;
}
const paymentStatus="Payment Successful"
function proceedToPayment(orderId){
    return new Promise (function(resolve,reject){
        resolve(paymentStatus);
    }
)}

function showOrderSummary(paymentInfo){
    return new Promise (function(resolve,reject){
        resolve("3 items are added succesfully in the cart");
    }
)}

function updateWallet(orderId){
    return new Promise (function(resolve,reject){
        resolve("your wallet balance is succesfully Updated");
    }
)}
function validateCart(cart){
    return true;
    
}