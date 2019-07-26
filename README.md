# Burger Queer

## Preámbulo

Nos acaban de enviar un correo con una solicitud para un nuevo proyecto. Hay un
restaurante que nos ha contactado porque quieren que alguien les construya una
interfaz donde puedan tomar pedidos usando una tablet.

![burger-queen](https://i.ibb.co/ZM7jZn2/Logo-1.png)

Visita nuestra aplicación en el siguiente link: [buger-queen](https://burguer-queen-b451c.firebaseapp.com/SCL009-Burger-Queen/)

Como punto de partida,
nos comparten el siguiente correo recibido del cliente:

> Somos **Burguer Queen**, una cadena de comida rápida 24hrs.
>
> Nuestra propuesta de servicio 24hrs ha tenido muy buena acogida, y para
> expandirnos necesitamos un sistema que nos ayude a tomar los pedidos de los
> clientes.
>
> Tenemos 2 menús: uno para el desayuno, que es bien sencillo:
>
> | Item                      |Precio|
> |---------------------------|------|
> | Cafe americano            | 500  |
> | Cafe con leche            | 700  |
> | Sandwich de jamón y queso | 1000 |
> | Jugo natural              | 700  |
>
> Y un menú para el resto del dia:
>
> <table width="100%">
>   <tbody>
>     <tr>
>       <td colspan="2" rowspan="1">Hamburguesas</td>
>       <td>Acompañamientos ($500)</td>
>       <td colspan="3" rowspan="1">Bebidas</td>
>     </tr>
>     <tr>
>       <td>Simple</td>
>       <td>$1500</td>
>       <td>Papas fritas</td>
>       <td></td>
>       <td>500ml</td>
>       <td>750ml</td>
>     </tr>
>     <tr>
>       <td>Doble</td>
>       <td>$2500/td>
>       <td>Onion Rings</td>
>       <td>Agua</td>
>       <td>$500</td>
>       <td>$800</td>
>     </tr>
>     <tr>
>       <td></td>
>       <td></td>
>       <td></td>
>       <td>Gaseosa</td>
>       <td>$700</td>
>       <td>$1000</td>
>     </tr>
>   </tbody>
> </table>
>
> Los clientes pueden escoger entre hamburguesas de res, de pollo, o vegetariana.
> **Y por $500 pueden agregarle queso o huevo.**
>
> Nuestros clientes son bastante indecisos, por lo que es muy común que cambien el
> pedido varias veces antes de finalizarlo.

## Introducción

Partiendo de los requerimientos de negocio detallados en el correo del cliente,
nos piden construir **una interfaz que permita a lxs cajerxs tomar los pedidos
en una tablet, y desde ahí se puedan enviar a cocina** a través de un backend del
que nos darán detalles más adelante.

El primer paso de este proyecto debe ser convertir el menú descrito por el
cliente en una estructura que podamos poner en un archivo JSON para después
_pintar_ en la pantalla.

Nuestra interfaz debe mostrar los dos menús (desayuno y resto del día), cada uno
con todos sus _productos_. El usuario debe poder ir eligiendo que _productos_
agregar y la interfaz debe ir mostrando el _resumen del pedido_ con el total.

![out](https://user-images.githubusercontent.com/110297/45984241-b8b51c00-c025-11e8-8fa4-a390016bee9d.gif)


## Criterios de aceptación del proyecto

### Definición del producto

El product owner del proyecto ha conversado con el cliente y luego de una
reunión con el project manager han logrado crear el siguiente backlog:

#### [Historia de usuario] Mesero/a debe poder tomar orden de una persona
Yo como mesero o mesara debería poder tomar la orden de un cliente para saber
fácilmente cuanto cobrar y que la cocina tenga las órdenes de manera inmediata
y según cuando van llegando.

##### Definición de terminado
  * Anotar nombre de cliente
  * Agregar productos al pedido
  * Eliminar productos
  * Ver resumen y el total de la compra
  * Enviar pedido a cocina (guardar en alguna base de datos)
  * Se ve y funciona bien en una tablet

##### Criterios de aceptación
  * Debes haber recibido code review de al menos una compañera
  * Hiciste tests de usabilidad e incorporaste el feedback del mesero o mesera
  * Haces test unitarios y has testeado tu producto por tu cuenta
  * Desplegaste tu aplicación y has etiquetado tu versión desplegada (git tag)

#### [Historia de usuario] Jefe de cocina debe poder ver ordenes
Yo como cocinero o cocinera debería poder ver las órdenes de los clientes y
marcar cuales están listas para saber qué se debe cocinar y avisar al mesero
que una orden está lista.

##### Definición de terminado
  * Ver los pedidos ordenados según van llegando
  * Marcar los pedidos que se han terminado
  * Ver el tiempo que tomó el pedido

##### Criterios de aceptación
  * Debes haber recibido code review de al menos una compañera
  * Hiciste tests de usabilidad e incorporaste el feedback del cocinero o
  cocinera
  * Haces test unitarios y has testeado tu producto por tu cuenta
  * Desplegaste tu aplicación y has etiquetado tu versión desplegada (git tag)

#### [Historia de usuario] Mesero/a debe poder ver órdenes listas para servir para entregarlas a los clientes
Yo como mesero o mesera debería poder ver las órdenes que han sido cocinadas y
están listas para servir a los clientes, para así entregarlas y que el cliente
se vaya feliz con su comida.

#### Definición de terminado
  * Ver listado de órdenes terminadas
  * Marcar pedidos que han sido entregados

##### Criterios de aceptación
  * Los datos se deben mantener íntegros, incluso después de que un pedido ha
  terminado. Todo esto para tener estadísticas de lo que ha hecho Burger queen
  * Debes haber recibido code review de al menos una compañera
  * Hiciste tests de usabilidad e incorporaste el feedback del mesero o mesera
  * Haces test unitarios y has testeado tu producto por tu cuenta
  * Desplegaste tu aplicación y has etiquetado tu versión desplegada (git tag)

## Desarrollo del proyecto

### Planificación

Para planificar el proyecto y organizar el desarrollo en historias de usuario se hizo uso de la plataforma Trello. También se utilizó la aplicación Whatsapp como medio clave de comunicación.

Visita nuestra planificación en este enlace:
[Trello](https://trello.com/b/Le6vEfkH/burguer-queen)

### Ideación de estilo

Se dio inicio al proyecto estructurando sus partes y componentes. Conocer lo que sería necesario para desarrollarlo fue la mejor forma de partir. De esta forma se creó un boceto de baja fidelidad que fue testeado por personas externas al proyecto y posteriormente se utilizó la plataforma Figma para iterar el diseño.


![burger-queen](https://i.ibb.co/qnVrvLh/figma.png)


Visita nuestro proyecto realizado en Figma en este enlace:
[Figma](https://www.figma.com/file/cyuiUZD7lesEkbjCtSqeL2Dn/Burger-Queen?node-id=0%3A1)


#### Paleta de colores:

La paleta de colores que utilizamos fue la siguiente:


![burger-queen](https://i.ibb.co/S3D8fD3/PALETA.png)


#### Tipografía:

Se escogió Roboto como la tipografía ya que es de fácil lectura y para la creación del Logo se hizo uso de Lobster.
