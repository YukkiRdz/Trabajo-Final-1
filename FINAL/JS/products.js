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

    // Selecciona todos los elementos con clase product-container e itera sobre cada contenedor
    let mainProducts = document.querySelector('.main');

    for (let index = 0; index < names.length; index++) {
        //creamos div contenedor por cada iteracion
        let divContainer = document.createElement('div');
        //agregamos la clase
        divContainer.classList.add('product-container');
        //establecemos el div como hijo del main
        mainProducts.appendChild(divContainer);

        //creamos div para las imagenes
        let divImg = document.createElement('div');
        //agregamos la clase
        divImg.classList.add('card2');
        //establecemos el div como hijo de divContainer
        divContainer.appendChild(divImg);

        //creamos y agregamos la imagen del producto
        let imgElement = document.createElement('img');
        //agregamos la clase de la imagen
        imgElement.classList.add('product-image');
        // Agrega el atributo src y la url de las imagenes
        imgElement.setAttribute('src', images[index]);
        //el texto alternativo se establece con los nombres de los productos
        imgElement.setAttribute('alt', names[index]);
        //establecemos las imagenes como hijas de divImg
        divImg.appendChild(imgElement);

        //creamos un div para la info de los productos
        let divInfo = document.createElement('div');
        //agregamos la clase del div
        divInfo.classList.add('product-info');
        //establecemos el div como hijo de divContainer
        divContainer.appendChild(divInfo);

        //creamos un parrafo para el nombre
        let productNameElement = document.createElement('p')
        //agregamos la clase
        productNameElement.classList.add('product-name');
        //establecemos el p como hijo de divInfo
        divInfo.appendChild(productNameElement);
        //modificamos el contenido
        productNameElement.textContent = `${names[index]}`;


        //creamos un parrafo para el stock
        let productStockElement = document.createElement('p')
        //agregamos la clase
        productStockElement.classList.add('product-stock');
        //establecemos el p como hijo de divInfo
        divInfo.appendChild(productStockElement);
        //modificamos su contenido
        productStockElement.textContent = `Stock: ${stocks[index]}`;

        //creamos un parrafo para el precio
        let productPriceElement = document.createElement('p')
        //agregamos la clase
        productPriceElement.classList.add('product-stock');
        //establecemos el p como hijo de divInfo
        divInfo.appendChild(productPriceElement);
        //modificamos el contenido
        productPriceElement.textContent = `Precio: $${prices[index]}`;

        //si el producto es la camara con descuento
        if (index === 0) {
            //creamos un p adicional
            let cameraPrice = document.createElement('p');
            //agregamos una clase
            cameraPrice.classList.add('strikethrough');
            //modificamos su contenido
            cameraPrice.textContent = '$169869';
            //establecemos cemeraPrice como hijo de divInfo
            divInfo.appendChild(cameraPrice);
            //el precio se muestra con descuento
            productPriceElement.textContent = `Precio: $${prices[index] * 0.9}`;
        }

        //creamos el input
        let input = document.createElement('input');
        //agregamos la clase del input
        input.classList.add('product-quantity');
        //agregamos los atributos del input
        input.setAttribute('type', 'number');
        input.setAttribute('placeholder', 'stock');
        input.setAttribute('min', '0');
        input.setAttribute('max', stocks[index]);
        input.setAttribute('value', '0');
        //establecemos el input como hijo de divInfo
        divInfo.appendChild(input);

        //creamos el boton
        let btn = document.createElement('button');
        //agregamos su clase
        btn.classList.add('add-btn');
        //establecemos el boton como hijo de divInfo
        divInfo.appendChild(btn);
        //modificamos su contenido
        btn.textContent = 'Agregar';

        //creamos un div que contenga el boton de finalizar compra
        let divBuy = document.createElement('div');
        //agregamos su clase
        divBuy.classList.add('btn-finalized-buy');
        //establecemos el div como hijo de main
        mainProducts.appendChild(divBuy);

        // Asegura de que el valor ingresado sea cero o positivo
        input.addEventListener('input', () => {
            if (input.value < 0 || input.value == '') {
                input.value = 0;
            }
        });

        btn.addEventListener('click', () => {
            let quantity = parseInt(input.value);
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
                document.getElementsById('total-amount').textContent = totalAmount.toFixed(2);
                // Muestra el stock restante después de la validación en consola
                console.log(`Cantidad disponible.Stock restante: ${stocks[index]}`);
                // Actualiza el stock mostrado en pantalla
                productStockElement.textContent = `Stock: ${stocks[index]}`;
            }
        });
    }

    //creamos el boton de finalizar compra
    let finalizedBuyBtn = document.createElement('button');
    //agregamos sus clases
    finalizedBuyBtn.classList.add('finalized-buy');
    //establecemos el boton como hijo del main
    mainProducts.appendChild(finalizedBuyBtn);
    //modificamos su contenido
    finalizedBuyBtn.textContent = 'Finalizar compra';

    finalizedBuyBtn.addEventListener('click', () => {
        document.getElementById('total-amount').textContent = totalAmount.toFixed(2);
        console.log(`Total Amount loaded from sessionStorage: ${totalAmount}`);
        // almacenar la información de manera local pero solo lo que dure la sesion
        sessionStorage.setItem('totalAmount', totalAmount.toFixed(2));

    })
    document.getElementById('total-amount').textContent = totalAmount.toFixed(2);
});