try {
    let objeto = {};
    console.log(objeto.c.a);
} catch (error) {
    console.log('Error: ');
} finally {
    console.log('finally');
}