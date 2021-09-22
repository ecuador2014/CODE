function llamar(enExito, enError) {
    let exito = true;
    // .....
    if (exito) {
        enExito();
    } else {
        enError();
    }
}

llamar(
    function() { console.log('Exito'); },
    function() { console.log('Error'); }
);