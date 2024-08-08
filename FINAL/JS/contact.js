"use strict";

let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let correo = document.getElementById('correo');
let telefono = document.getElementById('telefono');
let box = document.getElementById('box');
let btnEnviar = document.getElementById('enviar');
let informacion = [];

btnEnviar.addEventListener('submit', (e) => {
    e.preventDefault(); //previene la accion del form de actualizar la pagina
    //validacion de inputs antes de descargar el txt
    if (nombre.value != '' && apellido.value != '' && correo.value != '' && telefono.value != '' && box.value != '') {
        informacion[0] = 'Nombre:' + nombre.value;
        informacion[1] = ' Apellido:' + apellido.value;
        informacion[2] = ' Correo:' + correo.value;
        informacion[3] = ' Telefono:' + telefono.value;
        informacion[4] = ' Comentario:' + box.value;
        let blob = new Blob([informacion], { type: 'text/plain;charset=utf-8' }); //navegador 
        //min 10 digitos en el input telefono
        if ((telefono.value).length >= 10) {
            //libreria FileSaver.js
            saveAs(blob, 'contact.txt'); //recibe el blob y lo guarda en el txt
            // vaciar inputs luego de apretar el boton
            nombre.value = '';
            apellido.value = '';
            correo.value = '';
            telefono.value = '';
            box.value = '';
        } else {
            alert('Recuerde que su numero de telefono debe tener min 10 digitos.');
        }
    } else {
        alert('Por favor, debe completar todos los campos antes de enviar.')
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Carga el estado de finalización de compra desde sessionStorage
    let isPurchaseFinalized = sessionStorage.getItem('isPurchaseFinalized') === 'true';
    
    // Si la compra está finalizada, muestra el totalAmount, de lo contrario, muestra 0.00
    let totalAmount = isPurchaseFinalized ? parseFloat(sessionStorage.getItem('totalAmount')) || 0.00 : 0.00;
    document.getElementById('total-amount').textContent = totalAmount.toFixed(2);
    
    console.log(`Total Amount loaded from sessionStorage: ${totalAmount}`);
});