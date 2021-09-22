'use strict'
// each for

var nombre = "cesar";
var nombres = ["juan", "david", 34, true, "Pc"];
var nombres1 = new Array ("linux", "windows", "mac", 5, false, "Android", "IOS"); 

document.write("<li> Lenguages de programacion </li>");
document.write("<ul>");

nombres1.forEach((elemento, indice, arr)=>{
    console.log(arr);
    document.write("<li>"+indice+" - "+elemento+"</li>");
});

document.write("</ul>");
