"use strict";

// Definimos los productos en arrays separados
let names = ["Camara Fujifilm Instax mini 12", "Samsung Galaxy S24+", "Bicicleta rodado 29 Venzo Loki evo shadow", "Pelota de Volleyball", "Mochila para Laptop LuckyLy", "Almohadones Panama", "Ollas y sartenes antiadherentes Carote", "Whisky Jack Daniel's", "Heladera Koh-i-noor Khda 43/7 Acero", "Antonio Banderas", "Tostadora Peabody inoxidable", "Taladro Atornillador Inalámbrico"];
let prices = [169869, 1899999, 609000, 29999, 57340, 9280, 97299, 69500, 1049999, 33100, 74999, 135999];
let stocks = [5, 3, 8, 2, 10, 4, 6, 1, 7, 9, 5, 3];
let images = ['../IMAGES/Camara Fujifilm Instax mini 12.png', '../IMAGES/Samsung Galaxy S24 Plus.png', '../IMAGES/Bicicleta rodado 29 Venzo Loki evo shadow.png', '../IMAGES/Pelota de Volleyball.png', '../IMAGES/Mochila para Laptop hasta 16 Pulgadas LuckyLy.webp', '../IMAGES/Almohadones Panama.png', '../IMAGES/Juego de ollas y sartenes antiadherentes Carote.png', `../IMAGES/Whisky Jack Daniel's Gentleman Jack 750cm3.png`, '../IMAGES/Heladera Koh-i-noor Khda 43 7 Cícliclo Dynamic System 413 L Acero.png', '../IMAGES/Antonio Banderas Black Seduction.png', '../IMAGES/Tostadora Peabody inoxidable.png', '../IMAGES/Taladro Atornillador Inalámbrico Gamma.png'];

// Ejecuta evento ni bien cargue HTML
document.addEventListener('DOMContentLoaded', () => {
     // Cargar el valor de totalAmount desde sessionStorage
     let totalAmount = parseFloat(sessionStorage.getItem('totalAmount')) || 0.00;
     document.getElementById('total-amount').textContent = totalAmount.toFixed(2);
     console.log(`Total Amount loaded from sessionStorage: ${totalAmount}`);

     // Selecciona todos los elementos con clase product-container e itera sobre cada contenedor
     let productContainers = document.querySelectorAll('.product-container');
     productContainers.forEach((container, index) => {
          if (names[index] && prices[index] && stocks[index] !== undefined) {
               let imgElement = container.querySelector('.product-image');
               let productStockElement = container.querySelector('.product-stock');
               let productNameElement = container.querySelector('.product-name');
               let productPriceElement = container.querySelector('.product-price');
               //modifica los elementos de cada contenedor
               if (productNameElement && productPriceElement) {
                    productStockElement.textContent = `Stock: ${stocks[index]}`;
                    productNameElement.textContent = `${names[index]}`;
                    // Agrega el símbolo $ solo cuando se muestra el precio en la página
                    productPriceElement.textContent = `Precio: $${prices[index]}`;
                    //Descuento el 10% al precio de las camaras
                    if (index === 0) {
                         productPriceElement.textContent = `Precio: $${prices[index] * 0.9}`;
                    }
                    // Agrega el atributo src y la url de las imagenes
                    imgElement.setAttribute('src', images[index]);
                    //el texto alternativo se establece con los nombres de los productos
                    imgElement.setAttribute('alt', names[index]);
               }

               let quantityInput = container.querySelector('.product-quantity');
               let addBtn = container.querySelector('.add-btn');

               // Asegúrate de que el valor ingresado sea cero o positivo y entero
               quantityInput.addEventListener('input', () => {
                    if (quantityInput.value < 0 || quantityInput.value == '') {
                         quantityInput.value = 0;
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
                         // almacenar la información de manera local pero solo lo que dure la sesion
                         sessionStorage.setItem('totalAmount', totalAmount.toFixed(2));
                         // Muestra el stock restante después de la validación en consola
                         console.log(`Cantidad disponible.Stock restante: ${stocks[index]}`);
                         // Actualiza el stock mostrado en pantalla
                         productStockElement.textContent = `Stock: ${stocks[index]}`;
                    }
               });
          }
     });
});