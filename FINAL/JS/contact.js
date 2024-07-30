"use strict";

let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let correo = document.getElementById('correo');
let telefono = document.getElementById('telefono');
let box = document.getElementById('box');
let btnEnviar = document.getElementById('enviar');
let informacion = [];

btnEnviar.addEventListener('click', (e) => {
    e.preventDefault(); //previene la accion del form de actualizar la pagina
    informacion[0] = nombre.value;
    informacion[1] = apellido.value;
    informacion[2] = correo.value;
    informacion[3] = telefono.value;
    informacion[4] = box.value;

    let blob = new Blob([informacion], { type: 'text/plain;charset=utf-8' }); //navegador 

    //libreria FileSaver.js
    saveAs(blob, 'contact.txt'); //recibe el blob y lo guarda en el txt
});

document.addEventListener('DOMContentLoaded', () => {
    //carga el total desde el almacenamiento local de esta sesion y convierte el string en un numero 
    let totalAmount = parseFloat(sessionStorage.getItem('totalAmount')) || 0.00;
    document.getElementById('total-amount').textContent = totalAmount.toFixed(2);
    console.log(`Total Amount loaded from sessionStorage: ${totalAmount}`);
});