// const cart =["Shoes","Pants","Kurtas"];

// createOrder(cart, function (orderId){
// proceedToPayment(orderId);

// });


// const promise = createOrder(cart);

// promise.then(function (orderId){
//     proceedToPayment( );
    
//     });


const GITHUB_API= "https://api.github.com/users/MayankJain06"

const user = fetch(GITHUB_API);

console.log(user);

// user.then((data) => console.log(data));
