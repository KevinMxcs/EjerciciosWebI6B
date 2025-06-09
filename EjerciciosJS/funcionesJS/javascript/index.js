const { json } = require("express");

function saludo() {
    document.write("<ol><li>hola</li><li>que hay?</li><li>todo bien</li></ol>");
}

function createArray() {
    let primos = [1,3,5,7,11,13,17,19,23,25];
    const numPrimos = document.getElementById("numPrimos");
    numPrimos.innerHTML = "<p>Arreglo de primos:</p>" + primos;

}

function arrayAsociativo() {
    const alumno = new Array();
    alumno["nombre"] = "Juan";
    alumno["apellidoPat"] = "Sánchez";
    alumno["apellidoMat"] = "Pérez";
    alumno["Semestre"] = 6;
    alumno[regular] = true;

    const asociado = document.getElementById("asoc");
    asociado.innerHTML = "<p>Nombre del alumno:</p>" + alumno.nombre + " " + alumno.apellidoPat;

    const nuevoAlumno = {
        nombre: "Erick",
        apellidoPat: "Solorio",
        apellidoMat: "Gutierréz",
        semestre: 6,
        regular: false,
        direccion: {
            calle: "Av.Insurgentes",
            numExterior: "230",
            colonia: "Bosque",
            cp: "2384"
        }
       };

       let elemClass = document.getElementsByClassName("poo");
       elemClass[2].innerHTML = "<p>Alumno a mostrar</p>" + JSON.stringify(alumno);  
       let alumInter ='{\
        "nombre": "Carlos",\
        "apellidoPat": "Perez",\
        "apellidoMat": "Gonzales",\
        "semestre": 6,\
        "regular": false,\
        "direccion": {\
            "calle": "Av.Juarez",\
            "numExterior": "231",\
            "colonia": "Encanto",\
            "cp": "2384"\
        }\
       }';
}
