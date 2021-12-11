let a = "A";
let b = "B";

console.log(a == b);
console.log(a === b);
console.log(a != b);
console.log(a !== b);
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a.localeCompare(b));
console.log(a.localeCompare(b, "pt-BR"));
console.log(a.localeCompare(b, "pt-BR", {sensitivity: "base"}));
console.log(a.localeCompare(b, "pt-BR", {sensitivity: "accent"}));
console.log(a.localeCompare(b, "pt-BR", {sensitivity: "variant"}));
console.log(a.localeCompare(b, "pt-BR", {sensitivity: "variant", ignorePunctuation: true}));
console.log(a.localeCompare(b, "pt-BR", {sensitivity: "variant", ignorePunctuation: true, numeric: true}));
console.log('a'.toUpperCase()>'b'.toUpperCase());
console.log('a'.toUpperCase()<'b'.toUpperCase());
console.log('a'.toUpperCase()>='b'.toUpperCase());
console.log('a'.toUpperCase()<='b'.toUpperCase());
console.log('a'.toUpperCase().localeCompare('b'.toUpperCase()));
console.log('a'.toUpperCase().localeCompare('b'.toUpperCase(), "pt-BR"));
console.log('a'.toUpperCase().localeCompare('b'.toUpperCase(), "pt-BR", {sensitivity: "base"}));
console.log('a'.toUpperCase().localeCompare('b'.toUpperCase(), "pt-BR", {sensitivity: "accent"}));
console.log('a'.toUpperCase().localeCompare('b'.toUpperCase(), "pt-BR", {sensitivity: "variant"}));

// Language: javascript
// Path: javascript_testing/operadores_comparativos_numeros.js