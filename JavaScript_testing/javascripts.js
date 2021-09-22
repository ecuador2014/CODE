function suma(){
  let suma = 0;
  for (let numero of arguments){
    suma += numero;
  }
  return suma;
}

console.log(suma(1,2,3,4,5,6,7,8,9));
