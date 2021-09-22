function info(a) {
    console.log(this, a);
}

let auto = {
    modelo: 'Modelo 3',
    año: 2021,
    marca: 'Tesla'
};

// bind, call, apply

// info.bind(auto)();
// info.call(auto, 10, 20);
info.apply(auto, [10, 20]);