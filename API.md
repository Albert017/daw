# Documentación API REST

## Post
Uso de la parte de Posts de la API REST de la aplicación.

* Para acceder a un post en concreto con su id: /api/post/id MÉTODO: GET
* Para subir un post estando logeado: /api/post/ MÉTODO: POST
* Para conseguir todos los posts: /api/post/ MÉTODO: GET
* Para acceder a todos los posts reportados: /api/post/reported/ MÉTODO: GET
* Para acceder a todos los posts no reportados: api/post/nonReported/ MÉTODO: GET
* Para acceder a todos los posts de un usuario concreto con nombre de usuario nombre: api/post/nombre MÉTODO: GET
* Para reportar un post con su id estando logeado: /api/post/reportPost/id MÉTODO: PUT
* Para subir un voto a un post con su id estando logeado: /api/post/upvotePost/id MÉTODO: PUT
* Para bajar un voto a un post con su id estando logeado: /api/post/downvotePost/id MÉTODO: PUT
* Para acceder al post del día: /api/post/getPostOfTheDay/ MÉTODO: GET
* Para acceder al post del mes: /api/post/getPostOfTheMonth/ MÉTODO: GET
* Para acceder al post de la semana: /api/post/getPostOfTheWeek/ MÉTODO: GET
* Para acceder al post del año: /api/post/getPostOfTheYear/ MÉTODO: GET
* Para acceder a la lista de posts de una categoria: /api/posts/getCategoryPost/categoria MÉTODO: GET
