let arreglo = ['python', 'javaScript', 'java', 'pascal'];

arreglo = arreglo.filter(function(element){   // si se coloca al final no funciona
  return element != 'java';
});


arreglo.forEach(function(elemento){
  console.log(elemento);
});

// arreglo = arreglo.filter((element) => element != 'java'); la funcion de la flecha de
// let el = arreglo.filter(el => el == 'java'); el metodo find encuntra la palabra
