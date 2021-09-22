let usuario = 'Xavier';

let autorizado = usuario === 'Emilia' 
? 'Autorizado' 
: (usuario === 'Pedro' ? 'Autorizado' : 'No Autorizado');
console.log(autorizado);