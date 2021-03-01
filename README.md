## Bajar dependencias

```bash
npm install
# or
yarn install
```

## Correr el servidor

```bash
npm run dev
# or
yarn dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el browser.

## Desiciones de diseño tomadas

En la pantalla de comunidad, hay 3 pestañas que son: Populares, Nuevos y Seguidos. 

Populares: Decidi dejar todas las preguntas, tanto las viejas como las nuevas que se van creando. 

Nuevos: Solo deje las preguntas creadas que no se encontraban dentro de las preguntas originales. 

Populares: Las preguntas que se marcaban con un fav (estrella). 

Elegí en primer instancia, desarrollar todo lo posible que tuviera un diseño asociado y tratar de inventar lo menos posible. Por ejemplo, la parte de explorar o el filtro de busqueda no me parecieron tan relevantes como las demas funcionalidades por lo que elegí no desarrollarlas. 

Incorporé el comportamiento de volver a la pantalla principal luego de crear una pregunta. 
También la posibilidad de dar me gusta y no me gusta a publicaciones (y persistirlo), sin ninguna validación o comportamiento salvo mostrarlo por pantalla. 
Todas las publicaciones que se crean tienen como valor por default Matematicas 6 como el curso asociado. 

Tambien deje siempre visible el header y la sidebar aunque la página tenga scroll, para tener las funcionalidades a la vista. 

Decidí también cargar los datos de los usuarios y las preguntas por default de un archivo .json que se encuentra en la raiz del proyecto. En primera instancia se cargan desde ahi y luego desde localstorage del browser. Para borrarlo en las opciones de desarrolladors, la pestaña Application. Las keys con que se guardan en localstorage están definidas en un archivo de configuración (next.config.js)

Elegi next.js por ya haber trabajado con el framework y porque incorpora por defecto algunas cosas interesantes como el routing, las hojas de estilos en scss, el server side rendering (no utilizado), etc. 
