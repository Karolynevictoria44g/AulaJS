function calcular()
{
let valor, taxa, tempo, resultado;

valor = Number (document.getElementById("valor").value);
taxa  = Number (document.getElementById("taxa").value);
tempo = Number (document.getElementById("tempo").value);

resultado = valor + (valor * (taxa * taxa / 100)* tempo);

document.getElementById("resultado").innerHTML =
"<p> O valor da parcela é " + resultado + "</p>";
}