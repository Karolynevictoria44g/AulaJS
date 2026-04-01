function calcular()
{
    let temperatura, celcius;

    temperatura= document.getElementById("temperatura").value;

    celcius=(Number(temperatura) -32) * 5 / 9

    document.getElementById("resultado").innerHTML= "<p> A tempratura em celcius é " + celcius + "<p/>"
}