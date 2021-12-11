function info() {
    console.log(this);
}

let auto = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2019,
    color: 'Blanco',
    info: info
}

auto.info();
    