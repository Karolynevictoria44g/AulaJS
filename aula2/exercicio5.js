function calcular()
{
let lado;

lado = Number (document.getElementById("lado").value);

resultado = (lado*lado);

document.getElementById("resultado").innerHTML =
"<p> A area do quadrado é" + resultado + "</p>";
}