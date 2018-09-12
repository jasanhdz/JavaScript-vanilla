// alert('Bienvenidos a Async-await');

// Una función asincrona va a ser como las funciones que hemos estado utilizando en el curso, 
// pero poniendo codigo asincrono de una manera mas sincrona.
// Lo primero que tengo que hacer para declarar una función asincrona es
// ponerle la palabra reservada async y luego de eso, declarar mi funcion.
async function loaddd() {

}
// Gracias a que mi funcion es asincrona adentro de mi función extiste otra palabra reservada que
// puedo utilizar y se llama await, que va a ser simplemente para que nosotros podamos esperar las
// peticiones de nuestra API. Ahora mi función load se tiene que llamar en algún momeneto para 
// que lo que este funcione, asi que tengo 2 opciones; 1) llamarla despues de declararla
// O Puedo envolver mi funcion por acá y hacer que se Auto-Ejecute. (es otro sugar-sintex para ejecutar una función)

  (async function load() {
    //await 

    fetch('https://yts.am/api/v2/list_movies.json?genre=action');
    // Si yo no hubiera creado una función asincrona yo tendría que utilizar a then
    // Para traer está promesa y esperar a que esta promesa se ejecute.
    // .then()
    // Pero ya que tenemos una función asincrona podriamos envolver los que devuelve fetc
    // dentro de una constante y que espere a que se termine esté fetch.
    const response = await fetch('https://yts.am/api/v2/list_movies.json?genre=action')
    // Entonces voy a pausar mi aplicación hasta que esto se termine y luego se ejecutará lo
    // que yo ponga en las siguientes lineas.
    // Como por ejemplo volver a hacer una constante de los datos de esta Respuesta.
    const data = await response.json() // y despues hacer un console.log() de estos datos.
    console.log(data); 
  })()

   /* {En estas 3 lineas estamos haciendo lo que teniamos en fetch usando Promesas}
     -> 1° esperamos a que se resuelva
     const response = await fetch('https://yts.am/api/v2/list_movies.json?genre=action')
     -> 2° de la respuesta que tenemos en fetch, estamos llamando a su método JSON
     const data = await response.json()
     -> 3° Y de la respuesta que tenemos del método JSON ahora si podemos hacer ese console.log
     console.log(data); 
   */

   // Entonces tenemos codigo Asincrono que se lee de una manera sincroona