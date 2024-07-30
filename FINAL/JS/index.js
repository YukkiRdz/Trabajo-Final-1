'use strict'

document.addEventListener('DOMContentLoaded', () => {
    //carga el total desde el almacenamiento local de esta sesion y convierte el string en un numero 
    let totalAmount = parseFloat(sessionStorage.getItem('totalAmount')) || 0.00;
    document.getElementById('total-amount').textContent = totalAmount.toFixed(2);
    console.log(`Total Amount loaded from sessionStorage: ${totalAmount}`);
});