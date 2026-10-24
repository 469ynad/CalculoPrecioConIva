## Descripcion

Proyecto desarrollado con HTML y JavaScript que permite calcular el precio final aplicando un IVA del 21% o del 10%.
El programa contiene dos funciones JavaScript para realizar los cálculos y mostrar el resultado.


## Requisitos

Navegador web compatible con JavaScript
Node.js y npm
Visual Studio Code u otro editor de código


## Instalación

1. CLonar el repositorio:
	git clone https://github.com/469ynad/CalculoPrecioConIva
2. Acceder a la carpeta del proyecto
	cd Proyecto
3. Instalar las dependencias: 
	npm install
4. Abrir el archivo index.html en un navegador


## Uso

1. Introducir el precio del producto.
2. Pulsar el botón IVA 21% o IVA 10%
3. El programa mostrar el precio con el IVA aplicado


## Funciones JavaScript

calcularPrecioIva21(): calcula y muestra el precio con el 21% de IVA aplicado.
calcularPrecioIva10(): calcula y muestra el precio con el 10% de IVA aplicado.

## Validaciones

La aplicación realiza las siguientes comprobaciones sobre el precio introducido por el usuario.

	- Campo vacío: comprueba que el usuario haya introducido un precio antes de realizar el cálculo.
	- Valor numérico: verifica que el precio introducido sea un número válido.
	- Precio negativo: no permite calcular impuestos sobre precios inferiores a cero.
	- Precio igual a cero: no permite calculos si el precio es cero.

Si alguna de las validaciones falla, se muestra mensaje de error al usuario y no se realiza el calculo


