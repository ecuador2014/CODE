this.modelo = 5;

function encapsulado() {

    this.modelo = 15;

    const info = () => {
        return 'Este es un auto ' + this.marca
            + ', ' + this.modelo + ' del año ' + this.año;
    }

    let auto = {
        modelo: 'Modelo 3',
        año: 2021,
        marca: 'Tesla',
        info: info
    };

    console.log(auto.marca);
    console.log(auto.info());
}

encapsulado();

