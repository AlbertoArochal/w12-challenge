![Metal Tentacle](./images/facebook_cover_photo_2.png)

### Feel the gentle touch of the tentacle

Under construction

Week 4 - Challenge 4
Robots
Tendrás que crear un frontend en React que permita al usuario gestionar un listado con sus robots.

Crea una home page inicial y un menu que navegue entre la home y los robots. La página inicial algún logo junto con el número de robots disponibles

El estado y su lógica debe estar en un custom Hook. Opcionalmente puedes llevar su instancia a un Contexto

El usuario debe poder listar, crear, modificar y borrar robots (CRUD).

Cada robot debe mostrar un nombre, una imagen (URL de internet) y unas características:

Velocidad (0-10)
Resistencia (0-10)
Fecha de creación
Usuario que crea el robot
(La imagen la puedes conseguir en el API de https://robohash.org)

Los datos deben de tener persistencia en JSON-Server. Crea un servicio/repository para abstraer las interacciones con tu API. Utiliza para ello clases de TS.

Requisitos
Testea todo lo posible al terminar cada componente o elemento. Cuidado: te falta testing

Mejora el CSS. Estaría muy bien que lo hicieras con BEM y SASS

Cuida el valor semántico del HTML y valídalo.

Incluye las Actions de Audit y testing/sonar

Protege la rama main de github y obliga que se cumplan las actions para poder mergear las PR Trabaja con ramas cortas (unos pocos commits) Cuida especialmente los mensajes de los commits

Volviendo al testing: haz que se recoja en sonar y trata de llegar al 100% de coverage

Extras
Crea una página de favoritos para los robots que seleccione el usuario,

Crea una página de detalle para los robots. Puedes añadir al modelo la información que se te ocurra para mostrarla en esta página.
