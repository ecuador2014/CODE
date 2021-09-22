let auto1 = {
    modelo: 'Modelo 3',
    año: 2021,
    marca: 'Tesla'
};

let auto2 = {
    modelo: 'Hummer EV',
    año: 2022,
    marca: 'GMC'
};

function Auto(modelo, año, marca) {
    this.modelo = modelo;
    this.año = año;
    this.marca = marca;
}

console.log(new Auto('Modelo 3', 2021, 'Tesla'));
console.log(new Auto('Hummer EV', 2022, 'GMC'));