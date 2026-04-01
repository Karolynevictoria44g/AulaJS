function calcular()

    let numero, quadrado, cubo;

    numero= document.getElementById("numeric").value;

    quadrado=Number(numero) * Number(numero);
    quadrado=Number(numero) * Number(numero) * Number;

    document.getElementById("resultado").innerHTML=
    "<p>O quadrado do numero é" + quadrado +
    "e o cubo é " + cubo + "</p>"   

    