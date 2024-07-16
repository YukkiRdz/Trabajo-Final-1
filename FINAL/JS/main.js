//traigo todas las tabs del html
let tabs = document.querySelectorAll('.tab');
//traigo los articulos del html
let articulos = document.querySelectorAll('.contenidos article');
//traigo los links del html
let links = document.querySelectorAll('.tab');

//para cada tab que este dentro de la lista tabs. al hacer click se inicia la funcion para remover la clase active de cada uno y se le agrega a la que sea clickeada
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(tab => tab.classList.remove('active'));
        tab.classList.add('active');

        //este metodo es para obtener el id de todos los articulos
        //primero obtiene el valor del atributoi href...
        let ref = links.getAttribute('href').substring(1); //...luego con el metodo substring(1) elimina el primer caracter del valor href
        //elimina la clase active de cada articulo
        articulos.forEach(articulos => articulos.classList.remove('active'));
        //se le da la clase active al articulo que pertenece al tab seleccionado
        document.getElementById(ref).classList.add('active');
    });
});
