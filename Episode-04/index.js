// What is async?
// What is await?
// How async await works behind the scenes?
// Example of using async/await
// Error Handling
// Interviews
// Async await vs Promise.then/.catch

// Create a promise{}

const p1 =new Promise((resolve, reject)=>{
    setTimeout(function(){
        resolve("Promise is Resolved");
    },10000);

});

const p2 =new Promise((resolve, reject)=>{
    setTimeout(function(){
        resolve("Promise is Resolved");
    },5000);

});

// async function will always return a promise

// async function getData(){
//     return p;

// }

// const dataPromise=getData();
// dataPromise.then((res)=>console.log(res));

// async and await combo are used to handle promises

// ******** Await is a key word which can be only used inside a async function 

// async function handlePromise(){
//     console.log("Hello World!");
//     const val=await p1;
//     console.log("Namaste Javascript Season 1");
//     console.log(val);

//     const val2= await p2;
//     console.log("Namaste Javascript Season 2");
//     console.log(val2);
// }

// handlePromise();

// async function getData(){
//          p.then((res)=>console.log(res));
//          console.log("Namaste Javascript");
//      }
//      getData();


const API_URL ="https://api.github1.com/users/MayankJain06"

async function handlePromise(){
    try{
        const data= await fetch(API_URL);
        const jsonvalue =await data.json();
        console.log(jsonvalue);
    }
    catch(err){
        console.log(err);
    }

}
handlePromise();