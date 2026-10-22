function calcularPrecioIva21() {
    let precio = Number(document.getElementById("precio").value);
    let iva = precio * 0.21;
    let precioNeto = precio + iva;

    document.getElementById("resultado").textContent =
        "Precio con IVA del 21%: " + precioNeto.toFixed(2) + " €";

}

function calcularPrecioIva10() {
    let precio = Number(document.getElementById("precio").value);
    let iva = precio * 0.10;
    let precioNeto = precio + iva;

    document.getElementById("resultado").textContent =
        "Precio con IVA del 10%: " + precioNeto.toFixed(2) + " €";
}

