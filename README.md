## Correr el servidor

```bash
npm run dev
# or
yarn dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el browser.

Si hubiera error de dependencias:

```bash
npm install
# or
yarn install
```

## Desiciones de diseño tomadas

En la pantalla de comunidad, hay 3 pestañas que son: Populares, Nuevos y Seguidos. 

Populares: Decidi dejar todas las preguntas, tanto las viejas como las nuevas que se van creando. 

Nuevos: Solo deje las preguntas creadas que no se encontraban dentro de las preguntas originales. 

Populares: Las preguntas que se marcaban con un fav (estrella). 

Incorporé el comportamiento de volver a la pantalla principal luego de crear una pregunta. 
También la posibilidad de dar me gusta y no me gusta a publicaciones (y persistirlo), sin ninguna validación o comportamiento salvo mostrarlo por pantalla. 

Tambien deje siempre visible el header y la sidebar aunque la página tenga scroll, para tener las funcionalidades a la vista. 

Elegi next.js por ya haber trabajado con el framework y porque incorpora por defecto algunas cosas interesantes como el routing, las hojas de estilos en scss, el server side rendering (no utilizado), etc. 
