let carrito = [];


function agregarProducto(nombre, precio) {

    let productoExistente = null;


    for (let i = 0; i < carrito.length; i++) {

        if (carrito[i].nombre == nombre) {

            productoExistente = carrito[i];

        }

    }


    if (productoExistente != null) {

        productoExistente.cantidad =
            productoExistente.cantidad + 1;

    } else {

        let producto = {

            nombre: nombre,
            precio: precio,
            cantidad: 1

        };

        carrito.push(producto);

    }


    mostrarCarrito();
}


function mostrarCarrito() {

    let productosCarrito =
        document.getElementById("productos-carrito");

    let cantidadCarrito =
        document.getElementById("cantidad-carrito");

    let totalCarrito =
        document.getElementById("total-carrito");


    productosCarrito.innerHTML = "";


    let total = 0;

    let cantidadTotal = 0;


    if (carrito.length == 0) {

        productosCarrito.innerHTML =
            "<p class='carrito-vacio'>" +
            "Tu carrito está vacío." +
            "</p>";

    }


    for (let i = 0; i < carrito.length; i++) {

        let producto = carrito[i];


        total =
            total +
            producto.precio * producto.cantidad;


        cantidadTotal =
            cantidadTotal +
            producto.cantidad;


        productosCarrito.innerHTML +=

            "<article class='item-carrito'>" +

                "<div>" +

                    "<h3>" +
                    producto.nombre +
                    "</h3>" +

                    "<p>$" +
                    producto.precio +
                    "</p>" +

                "</div>" +


                "<div class='cantidad'>" +

                    "<button onclick='restarProducto(" +
                    i +
                    ")'>−</button>" +

                    "<span>" +
                    producto.cantidad +
                    "</span>" +

                    "<button onclick='sumarProducto(" +
                    i +
                    ")'>+</button>" +

                "</div>" +

            "</article>";

    }


    cantidadCarrito.textContent =
        cantidadTotal;


    totalCarrito.textContent =
        "$" + total;
}


function sumarProducto(numero) {

    carrito[numero].cantidad =
        carrito[numero].cantidad + 1;


    mostrarCarrito();
}


function restarProducto(numero) {

    carrito[numero].cantidad =
        carrito[numero].cantidad - 1;


    if (carrito[numero].cantidad == 0) {

        carrito.splice(numero, 1);

    }


    mostrarCarrito();
}


function finalizarPedido() {

    if (carrito.length == 0) {

        alert("Tu carrito está vacío.");

    } else {

        let mensaje =
            document.getElementById("mensaje-pedido");

        mensaje.style.display = "flex";

    }
}


function cerrarMensaje() {

    let mensaje =
        document.getElementById("mensaje-pedido");

    mensaje.style.display = "none";

}