// STRING CLASICOS

let nombre = 'cesar '
let apellido = 'palacios'
let profesion = 'web developer'
let na = nombre + " " + apellido + "\n" + profesion;
// salto de linea (\n)

// TEMPLATE STRINGS
let plantilla = `
HOLA
QUE
TAL
`
;

let plantilla2 = `${nombre} ${apellido}
${profesion}
`;
console.log(na)
console.log(plantilla);
console.log(plantilla2);

function ficha(nombre, apellido){
  let fichaTecnica = `
    <div class='ficha'>
      <h2>${nombre} ${apellido} </h2
      <h3> ${profesion}
      <p> Forma parte de este equipo </p
    </div>
  `;
  return fichaTecnica;
}

let cajaFichas = document.createElement('section');

cajaFichas.innerHTML = ficha("Cesar", "Palacios", "web developer");
cajaFichas.innerHTML += ficha("Carlos", "Palma", "web developer");
cajaFichas.innerHTML += ficha("Cristiano", "Arteaga", "web developer");

document.addEventListener('DOMContentLoaded', function () {
  document.body.appendChild(cajaFichas);
}, false);
