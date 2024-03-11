//Arrays//
//COLECCION DE OBJETOS DEFINIDA POR CORCHETES Y SEPARANDO LOS ELEMENTOS CON COMAS

const pasajerosTitanic = ["Juan", "Ana", "Luis", "María", "Carlos", "Laura", "Miguel", "Sofía", "Pedro", "Isabel", "Alejandro", "Elena"];


console.log(pasajerosTitanic.length);

function registrarPasajero() {
    if (pasajerosTitanic.length < 12) {
        let nombre = document.getElementById("Pasajero").value;
        pasajerosTitanic.push(nombre);
        document.getElementById("alert").innerHTML = '<div class="alert alert-success" role="alert">Enhorabuena! Ha sido registrado con exito. Disfrute del Titanic.</div>'

    }
    else {
        document.getElementById("alert").innerHTML = '<div class="alert alert-danger" role="alert">Lo siento! El máximo de plazas es '+pasajerosTitanic.length+'. Ya no quedan plazas si nadie se da de baja.</div>'

    }
}

function añadirPasajero() {
    document.getElementById("input-pasajero").style.display = "flex";
}

function eliminarUltimo(){
    pasajerosTitanic.pop();
}

function mostrarPasajeros(){
    document.getElementById("lista-pasajeros").innerHTML = "<h1>Listado Pasajeros: "+pasajerosTitanic.length+"</h1>";
    for (let i=0; i<pasajerosTitanic.length;i++){
    document.getElementById("lista-pasajeros").innerHTML += "<h5>Pasajero "+(i+1)+": "+pasajerosTitanic[i]+"</h5>";
    }
}