# Documentación API REST

## Posts
Uso de la parte de Posts de la API REST de la aplicación.

* Para acceder a un post en concreto con su id: /api/posts/id MÉTODO: GET
* Borrar un post, el administrador puede borrar cualquiera y un usuario los suyos. /api/posts/delete={id} MÉTODO: DELETE
* Para subir un post estando logeado: /api/post/ MÉTODO: POST
  * Parámetors: "postTitle","postTag"
* Para conseguir todos los posts: /api/posts/ MÉTODO: GET
* Para conseguir posts con una característica concreta:
  * Para acceder a todos los posts reportados: /api/posts/reported/ MÉTODO: GET
  * Para acceder a todos los posts no reportados: api/posts/nonReported/ MÉTODO: GET
  * Para acceder a todos los posts de un usuario concreto con nombre de usuario nombre: api/posts/user={username} MÉTODO: GET
  * Para acceder al post del día: /api/posts/best/day/ MÉTODO: GET
  * Para acceder al post del mes: /api/posts/best/month/ MÉTODO: GET
  * Para acceder al post de la semana: /api/posts/best/week/ MÉTODO: GET
  * Para acceder al post del año: /api/posts/best/year/ MÉTODO: GET
  * Para acceder a la lista de posts de una categoria: /api/posts/tag={tag} MÉTODO: GET
  * Para acceder a los post que tengan el mismo ttulo: /api/posts/search={postTitle} MÉTODO: GET
* Para reportar un post con su id estando logeado: /api/posts/report={id} MÉTODO: PUT
* Para subir un voto a un post con su id estando logeado: /api/posts/upvote={id} MÉTODO: PUT
* Para bajar un voto a un post con su id estando logeado: /api/posts/downvote={id} MÉTODO: PUT

## Messages
Uso de la parte de Mensajes de la API REST de la aplicación.
Todos estos métodos necesitan permisos de "USER".

* Para listar el ultimo mensaje de todas las conversaciones del usuario logueado /api/messages/conversations MÉTODO: GET
* Para obtener una conversación completa con un usuario /api/messages/conversations={username} MÉTODO: GET
* Para obtener el listado de mensajes borrados recibidos /api/messages/conversations/deleted MÉTODO: GET
* Para eliminar un mensaje del que se es autor o receptor /api/messages/delete={id} MÉTODO: DELETE
* Enviar un mensaje a un usuario /api/messages/ MÉTODO: POST
  * Contenido necesario: 
        {"messageAddressee":{"username":"{Adressee}"}
        ,"messageContent":"{messageContent}"}
* Obtener el listado de todos los mensajes del usuario autentificado /api/messages/ MÉTODO: GET

## Users
Uso de la parte de Usuarios de la API REST de la aplicación.

* Consultar la información de un usuario /api/users/{id} MÉTODO: GET
* Consultar la información de un usuario por su nombre /api/users/name={username} MÉTODO: GET
* Borrar un usuario, solo administrador /api/users/delete={id} MÉTODO: DELETE
* Modificar información del usuario, solo el propio usuario /api/users/put={id} MÉTODO: PUT
  * Se pueden modificar los campos "userBiography","userLink","userLocation" y "userEmail"
* Consultar la informacion del usuario de la sesion actual /api/users/self MÉTODO: GET
* Seguir o dejar de seguir a un usuario /api/users/{id}/followers MÉTODOS: PUT y DELETE
* Crear un nuevo usuario /api/users/ MÉTODO: POST
  * Ejemplo de datos para crear usuario:
        {
	   "username": "user123456",
	   "userPassword": "123456",
	   "userEmail": "a.a@a.com"
        } 

## Comments.
Uso de la parte de Comments de la API REST de la aplicación.

* Enviar un comentario a un post api/posts/{idPost}/comments/ MÉTODO: POST
  * Campos necesarios: "commentContent" de tipo String.
* Eliminar un comentario, solo administrador. api/comments/{id} MÉTODO: DELETE
