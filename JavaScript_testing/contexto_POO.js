let auto = {
    modelo: "Mustang",
    color: "Rojo",
    ano: 2021,
    marca: "Ford",
    info: info
};

const info () => {
    return this.marca  + '  ' + this.modelo  +'  '+ this.color  +'  '+  this.ano;
}

console.log(auto.marca);
console.log(auto.info());
