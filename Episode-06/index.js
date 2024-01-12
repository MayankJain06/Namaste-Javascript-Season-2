"use strict"
// This in global scope
console.log(this);


// This in function scope

function x(){
    console.log(this);
}
x();
window.x();


// This inside objects method

// What is the difference between Function and a method 

// If we make a function as a part of the Object then it is known as Method 

// const obj ={
//     a:10,
//     x: function(){
//         console.log(this.a);
//     }
// }
// obj.x();


const Student1 ={
    name:"Mayank",
   printName: function(){
        console.log(this.name);
   }
 }
 Student1.printName();


 const Student2={
    name: "Jain",
 }

 // call, apply and bind methods ( Sharing Methods)
 Student1.printName.call(Student2);


 // this inside arrow functions 

 const obj ={
    a:10,
    x: ()=>{
        console.log(this);
    }
}
obj.x();

// this inside class & constructor

// this inside nested arrow functions 

const obj2 ={
    a:10,
    x: function (){
        const y= ()=>{
            console.log(this);
        }
        y();
    }
    }
    obj2.x();


// this inside DOM elements == reference to its HTML Element 



