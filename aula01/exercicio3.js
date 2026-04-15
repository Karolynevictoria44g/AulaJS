document.write("<h1>Exercicio 03</h1>");

var numero = prompt("Digite a temperatura em Fahrenheit:");

document.write("<p>O número digitado foi : " + numero + "</p>");

var celcius =( ((Number(numero) - Number (32)) * Number(5)) / Number(9));
document.write("<p>A temperatura em celcius é:" + celcius + "</p>");