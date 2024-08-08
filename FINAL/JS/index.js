'use strict'

document.addEventListener('DOMContentLoaded', () => {
    // Carga el estado de finalización de compra desde sessionStorage
    let isPurchaseFinalized = sessionStorage.getItem('isPurchaseFinalized') === 'true';
    
    // Si la compra está finalizada, muestra el totalAmount, de lo contrario, muestra 0.00
    let totalAmount = isPurchaseFinalized ? parseFloat(sessionStorage.getItem('totalAmount')) || 0.00 : 0.00;
    document.getElementById('total-amount').textContent = totalAmount.toFixed(2);
    
    console.log(`Total Amount loaded from sessionStorage: ${totalAmount}`);
});