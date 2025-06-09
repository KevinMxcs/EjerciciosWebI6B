function genera() {
    var numero1 = (Math.random() * 10).toFixed();
    var numero2 = (Math.random() * 10).toFixed();

    var primero = document.getElementById("primero");
    var segundo = document.getElementById("segundo");

    var parrafoAnterior1 = primero.firstChild;
    var parrafoAnterior2 = segundo.firstChild;

    var parrafo1 = document.createElement("p");
    var texto1 = document.createTextNode(numero1);
    parrafo1.appendChild(texto1);

    if (parrafoAnterior1 != null) {
        primero.replaceChild(parrafo1, parrafoAnterior1);
    } else {
        primero.appendChild(parrafo1);
    }

    var parrafo2 = document.createElement("p");
    var texto2 = document.createTextNode(numero2);
    parrafo2.appendChild(texto2);

    if (parrafoAnterior2 != null) {
        segundo.replaceChild(parrafo2, parrafoAnterior2);
    } else {
        segundo.appendChild(parrafo2);
    }
}

function compara() {
    var primero = document.getElementById("primero");
    var segundo = document.getElementById("segundo");

    var parrafo1 = primero.getElementsByTagName("p")[0];
    var parrafo2 = segundo.firstChild;

    var numero1 = parseInt(parrafo1.firstChild.nodeValue);
    var numero2 = parseInt(parrafo2.firstChild.nodeValue);

    var parrafoMayor = (numero1 > numero2) ? parrafo1 : parrafo2;

    var resultado = document.getElementById("resultado");
    var parrafoAnterior = resultado.firstChild;

    if (parrafoAnterior != null) {
        resultado.replaceChild(parrafoMayor.cloneNode(true), parrafoAnterior);
    } else {
        resultado.appendChild(parrafoMayor.cloneNode(true));
    }
}
