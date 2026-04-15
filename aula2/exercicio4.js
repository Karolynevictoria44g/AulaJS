function calcular()
{
let base, altura;

base = Number (document.getElementById("base").value);
altura  = Number (document.getElementById("altura").value);

resultado = (base/altura);

document.getElementById("resultado").innerHTML =
"<p> A area do triangulo é " + resultado + "</p>";
}