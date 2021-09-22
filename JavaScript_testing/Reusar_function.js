let auto = {
  modelo : 'Tesla 5',
  ano : 2021,
  marca : 'Tesla',
  info : info
};

function info() {
  return 'Este es un carro ' + this.marca
      + ', ' + this.modelo + ' del ano ' + this.ano;
}

console.log(auto.marca);
console.log(auto.info());
