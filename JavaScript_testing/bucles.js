for (let i = 0; i <= 10; i++) {
    console.log(i);
}

for ( let i = 0; i <= 10; i+=2) {
    console.log(i);
}

for ( let i = 10; i >= 0; i--) {
    console.log(i);
}

for ( let i = 0; i >= -10; i-=2) {
    console.log(i);
}
 for ( let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

for ( let i = 0; i <= 10; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

for ( let i = 0; i <= 1000; i++) {
    if (i % 2 === 0) {
        continue;
}
    console.log(i);
}

