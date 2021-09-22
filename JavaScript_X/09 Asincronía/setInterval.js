let i = 0;
console.log('antes');
let interval = setInterval(()=>{
    console.log(i++);
}, 2000);
console.log('después');


setTimeout(()=>{
    clearInterval(interval);
}, 5000);
