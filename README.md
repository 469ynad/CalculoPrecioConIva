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


## Seguridad del repositorio

Proteccion de la rama principal

	Se ha configurado una regla de protección para la rama main con las siguientes restricciones:

		- Require a pull request before merging: obliga a utilizar Pull Request para incorporar cambios a la rama principal.
		- Restrict deletions: impide eliminar la rama main.
		- Block force pushes: evita la reescritura del historial mediante pushes forzados.
		- Required aprovals 0: permite trabajar individualmente sin necesitar aprobaciones de otros colaboradores.

Autenticación

	El acceso al repositorio se realiza mediante la cuenta personal de GitHub. Para mejorar la seguridad se recomienda el 
	uso de autenticación en dos factores(2FA)

	Las operaciones Git con el repositorio remoto requieren autenticación mediante mecanismos admitidos por GitHub, como 
	SSH o HTTPS con credenciales apropiadas.

Permisos

	Se aplica el principio de mínimo privilegio, según el cual cada colaborador debe disponer únicamente de los permisos necesarios.

	La rama principal está protegida para evitar modificaciones directas y los cambios se incorporan mediante Pull Request.

Archivos ignorados

	El archivo .gitignore excluye archivos y directorios que no deben versionarse, como node_modules/, archivos temporales y
	archivos de configuración sensibles.

	No se deben incluir contraseñas, tokens de acceso ni claves privadas en el código fuente.
	
Copias de seguridad

	El repositorio se mantiene tanto en el equipo local como en GitHub, disponiendo de dos ubicaciones con el código y su historial de versiones.





