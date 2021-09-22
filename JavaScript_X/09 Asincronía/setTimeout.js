console.log('antes');
let timeout = setTimeout(()=>{
    console.log('Cualquier código');
},3000);
console.log('después');
clearTimeout(timeout);
