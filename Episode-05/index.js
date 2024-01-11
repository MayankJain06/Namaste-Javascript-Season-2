

// Promise.all();
// promise.allsetteled();
// promise.race();
// promise.any


const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("P1 Success"),1000);
});


const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("P2 success"),5000);
});


const p3=new Promise((resolve,reject)=>{
    setTimeout(()=>reject("P3 fail"),2000);
});


// Promise.all([p1,p2,p3])
// Promise.allSettled([p1,p2,p3])
// Promise.race([p1,p2,p3])
Promise.any([p1,p2,p3])
.then((res)=>
 {
    console.log(res);
})
.catch((err)=>{
    console.error(err);
    console.log(err.errors);
});