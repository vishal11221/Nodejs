let a = 20;
let b = 0;

const waitingData = new Promise((resolve,reject)=>{
    setTimeout(() => {
        b = 30;
        resolve(30);
    }, 3000);
})

waitingData.then((data)=>{
    b=data;
    console.log(a+b);
})
