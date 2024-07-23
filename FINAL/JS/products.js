"use strict";

// Definimos los productos en arrays separados
let names = ["Camara Fujifilm Instax mini 12", "Samsung Galaxy S24+", "Bicicleta rodado 29 Venzo Loki evo shadow", "Pelota de Volleyball", "Producto 5", "Producto 6", "Producto 7", "Producto 8", "Producto 9", "Producto 10", "Producto 11", "Producto 12", "Producto 13", "Producto 14", "Producto 15"];
let prices = [169869, 1899999, 609000, 29999, 9.99, 20.00, 5.50, 25.00, 30.00, 8.75, 14.99, 19.99, 22.50, 11.25, 16.75];
let stocks = [5, 3, 8, 2, 10, 4, 6, 1, 7, 9, 5, 3, 2, 4, 6];
let images = ['../IMAGES/Camara Fujifilm Instax mini 12.png', '../IMAGES/Samsung Galaxy S24 Plus.png', '../IMAGES/Bicicleta rodado 29 Venzo Loki evo shadow.png', '../IMAGES/Pelota de Volleyball.png'];
let totalAmount = 0;
// Ejecuta evento ni bien cargue HTML
document.addEventListener('DOMContentLoaded', () => {
     // Selecciona todos los elementos con clase product-container e itera sobre cada contenedor
     let productContainers = document.querySelectorAll('.product-container');
     productContainers.forEach((container, index) => {
          if (names[index] && prices[index] && stocks[index] !== undefined) {
               let imgElement = container.querySelector('.product-image');
               let productNameElement = container.querySelector('.product-name');
               let productPriceElement = container.querySelector('.product-price');
               if (productNameElement && productPriceElement) {
                    productNameElement.textContent = `${names[index]}`;
                    // Agrega el símbolo $ solo cuando se muestra el precio en la página
                    productPriceElement.textContent = `Precio: $${prices[index]}`;
                    // Agrega el atributo src y la url de las imagenes
                    imgElement.setAttribute('src', images[index]);
                    //el texto alternativo se establece con los nombres de los productos
                    imgElement.setAttribute('alt', names[index]);
               }
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
                         // Suma el costo del/los productos validado al total acumulado
                         totalAmount += prices[index] * quantity;
                         // Actualiza el elemento y convierte el texto en un string para mostrar el total en el header
                         document.getElementById('total-amount').textContent = totalAmount.toFixed(2);
                         // Muestra el stock restante después de la validación en consola
                         console.log(`Cantidad disponible.Stock restante: ${stocks[index]}`);
                         // alert(`su producto ha sido agregado al carrito`);
                    }
               });
          }
     });
});