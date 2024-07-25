'use strict';

let stocks = [5, 3, 8, 2, 10, 4, 6, 1, 7, 9, 5, 3, 2, 4, 6];
let quantityInput = container.querySelector('.product-quantity');
let addBtn = container.querySelector('.add-btn');

// Asegúrate de que el valor ingresado sea siempre positivo y mayor que 0
quantityInput.addEventListener('input', () => {
     if (quantityInput.value <= 0) {
          quantityInput.value = 1;
     }
});

addBtn.addEventListener('click', () => {
     let quantity = parseInt(quantityInput.value);
     if (quantity > stocks[index]) {
          alert('No contamos con la cantidad solicitada del producto en stock, disculpe las molestias');
     } else {
          // Descuenta la cantidad del stock actual
          stocks[index] -= quantity;
          // Suma el costo de los productos agregados al total acumulado
          //si el producto agregado es "Camara Fujifilm Instax mini 12" se suma al total el precio con descuento
          if (index === 0) {
               totalAmount += (prices[index] * 0.9) * quantity;
          } else {
               totalAmount += prices[index] * quantity;
          }
          // Actualiza el elemento y convierte el texto en un string para mostrar el total en el header
          document.getElementById('total-amount').textContent = totalAmount.toFixed(2);
          // Muestra el stock restante después de la validación en consola
          console.log(`Cantidad disponible.Stock restante: ${stocks[index]}`);
     }
});