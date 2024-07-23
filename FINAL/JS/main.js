"use strict";

// Ejecuta evento ni bien cargue HTML
document.addEventListener('DOMContentLoaded', () => {
    //envia solicitud para cargar el archivo txt
    fetch('../TXT/products.txt')
        // Convierte la respuesta en texto
        .then(response => response.text())
        .then(data => {
            // Divide el texto en lineas y mapea cada linea a un nombre, precio y stock
            const products = data.split('\n').map(line => {
                const [name, price, stock] = line.split(',');
                // Convierte el precio a un número de punto flotante para asegurarse de que se pueda usar en cálculos futuros
                return { name, price: parseFloat(price), stock: parseInt(stock), initialStock: parseInt(stock) };
            });
            // Selecciona todos los elementos con clase productContainers e itera sobre cada contenedor
            const productContainers = document.querySelectorAll('.product-container');
            productContainers.forEach((container, index) => {
                const product = products[index];
                if (product) {
                    const productNameElement = container.querySelector('.product-name');
                    const productPriceElement = container.querySelector('.product-price');
                    if (productNameElement && productPriceElement) {
                        productNameElement.textContent = `Nombre: ${product.name}`;
                        // Agrega el símbolo $ solo cuando se muestra el precio en la página
                        productPriceElement.textContent = `Precio: $${product.price}`;
                    }
                    const quantityInput = container.querySelector('.product-quantity');
                    const validateBtn = container.querySelector('.validate-btn');

                    // Asegúrate de que el valor ingresado sea siempre positivo
                    quantityInput.addEventListener('input', () => {
                        if (quantityInput.value < 0) {
                            quantityInput.value = 0;
                        }
                    });

                    validateBtn.addEventListener('click', () => {
                        const quantity = parseInt(quantityInput.value);
                        if (quantity > product.stock) {
                            alert('No contamos con la cantidad solicitada del producto en stock, disculpe las molestias');
                        } else {
                            // Descuenta la cantidad del stock actual
                            product.stock -= quantity;
                            // Muestra el stock restante después de la validación
                            alert(`Cantidad disponible. Stock restante: ${product.stock}`);
                        }
                    });
                }
            });
        })
        .catch(error => console.error('Error al cargar el archivo:', error));
});