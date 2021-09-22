'use strict'
//

var nombre = "cesar";
var nombres = ["juan", "david", 34, true, "Pc"];
var nombres1 = new Array ("linux", "windows", "mac", 5, false, "Android", "IOS"); 

document.write("<li> Lenguages de programacion </li>");
document.write("<ul>");

for(var i = 0; i < nombres1.length; i++){
    document.write("<li>" + nombres1[i] +"</li>");
}

document.write("</ul>");

