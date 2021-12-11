let lista = ['pepe', 'juan', 'maria', 'jose', 'luis', 'ana', 'maria'];

for (let i = 0; i < lista.length; i++) {
  console.log(lista[i]);  

}

let lista2 = ['pepe', 'juan', 'maria', 'jose', 'luis', 'ana', 'maria'];

for (let i = 0; i < lista.length; i++) {
  console.log(lista[i] + ' este es una persona');  

}


let lista3 = ['pepe', 'juan', 'maria', 'jose', 'luis', 'ana', 'maria'];

for (let i = 0; i < lista.length; i++) {
  console.log(i);  

}


let lista4 = ['pepe', 'juan', 'maria', 'jose', 'luis', 'ana', 'maria'];

for (let i = 0; i < lista.length; i++) {
  let persona = lista[i];
  
  if (persona == 'maria') {
    console.log(persona +'es la jefa');

  } else { 
    console.log(persona +'es una persona');  
}
}

let indicepersona;
for (let i = 0; i < lista.length; i++) {
  let persona = lista[i];
  
  if (persona == 'maria') {
    console.log(persona +' es la jefa');
    indicepersona = i;
  }
}

let indicepersona1;
for (let i = 0; i < lista.length; i++) {
  let persona = lista[i];
  
  if (persona == 'maria') {
    indicepersona1 = i;
    break;
  }
}
console.log(indicepersona1);

let indicepersona2;
for (let i = 0; i < lista.length; i++) {
  let persona = lista[i];
  
  if (persona == 'maria') {
    indicepersona2 = i;
    continue;                      
  }
}
console.log(indicepersona2);

