function ejemplo2() {
  var numero = 10;
  console.log(numero);
  function dentro(){}
  dentro();
  
  let numero2 = 20;
  {
      let numero = 30;
      let numero2 = 40;
  }
    console.log(numero2);
    console.log(numero);
}

ejemplo2();
