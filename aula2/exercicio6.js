function calcular()
{
let quantidade, preço;

quantidade = Number (document.getElementById("quantidade").value);
preço  = Number (document.getElementById("preço").value);

subtotal =(quantidade * preço);
desconto = (10/100);
valorfinal= (subtotal/desconto);

document.getElementById("resultado").innerHTML =
"<p> O subtotal é " + subtotal + "</p>";
"<p> O desconto é " + desconto + "</p>";
"<p> O valor final" + valorfinal + "</p>";
}