// console.log = function() {}
var numero = 4;

function ejemplo() {
    var numero = 10;
    // console.log(numero);
    function dentro() {}
    dentro();


    // if (true) { }
    // while (false) { }
    // for (let i in []) { }
    {
        var numero = 100;
        var numero2 = 200;
    }

    console.log(numero);
    console.log(numero2);

}

ejemplo();
// console.log(numero);