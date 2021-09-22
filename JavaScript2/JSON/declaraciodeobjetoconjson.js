// las clases non existen en javascript
/* una forma de declarar un objeto es usar algo que se conoce como que
javascript object notation o json
*/
let curso = {
  title:'Curso de javascript',
  duration : 20,
  format : 'video',
  block : ['Introduction', 'Functions'],
  subscriptions : function (usuario) {           // este es un metodo que tiene la funcionalidad
  console.log(usuario + ' now is subscripted');
}
  }

//console.log(curso.subscriptions('cesar'));

curso.title = 'curso de java';
console.log(curso.title);

curso['subscriptions'] = function(){};
curso.subscriptions ("Palacios");

/* ojo como las funciones son de primera clase, le asignamo a una propiedad una funcion
y basically lo transforma en un metodo */
