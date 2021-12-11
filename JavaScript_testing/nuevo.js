let auto1 = {
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2019,
    color: "Blanco",
};

let auto2 = {
    marca: "Ford",
    modelo: "Mustang",
    anio: 2018,
    color: "Rojo",
}

function imprimirAuto(auto) {
    console.log(`${auto.marca} ${auto.modelo} ${auto.anio} ${auto.color}`);
}

console.log("Auto 1");
imprimirAuto(auto1);
console.log("Auto 2");
imprimirAuto(auto2);


