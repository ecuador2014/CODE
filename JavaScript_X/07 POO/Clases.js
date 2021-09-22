class Auto {
    constructor(modelo, año, marca) {
        this.modelo = modelo;
        this.año = año;
        this.marca = marca;
    }

    info() {
        return this.modelo + " - " + this.marca + " - " + this.año;
    }
}

const auto1 = new Auto('Modelo 3', 2021, 'Tesla');
const auto2 = new Auto('Hummer EV', 2022, 'GMC');

console.log(auto1.info());
console.log(auto2.info());