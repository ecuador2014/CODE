// El contexto
/*
La variable especila this que representa al objeto cuyo codigo se representa
ejecutando en ese momento, el valor de this cambia dependiendo en que parte
del codigo nos encontremos el valor que se le asigna a esta variable le conocemos
como el contexto
El contexto es flexible y muy dinamico y nos regala un monton de ventajas al usar
el lenguaje entre ellas que podemso cambiar de paradigma de desarrollo utilizando
este mismo lenguaje o lka facilidad que podemos implementar diferentes patrones
de diseno, this es igual al scope global
*/

let objeto = {
  demo: function() {
    console.log(this);
  }
}

let executor = {
  function: null,
  execute: function (f) {
    f();
    this.function = f;
    this.function();
  }
}

executor.execute(objeto.demo);
