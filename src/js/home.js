// Una Promesa se crea de la siguiente manera
// nuestra promesa va a recibir un párametro, la cual es una función.
// Nuesta función también va a recibir 2 párametros que a sus vez son 2 funciones que
// nosotros vamos a poder lanzar en algún momento; para saber si {Todo esta bien, o Todo esta mal}

const getUserAll = new Promise(function (todoBien, todoMal) {
  setTimeout(() => {
    todoBien('se acabo el tiempo 5');
  }, 5000)

})

const getUser = new Promise(function (todoBien, todoMal) {
  setTimeout(() => {
    todoBien('se acabo el tiempo 3');
  }, 3000)

})

// Tiene 2 Métodos; el método then(): que se ejecuta si todo esta bien
// el método catch(): que se ejecuta si algo no salio bien con then()
// getUser
//   .then(function() {
//     console.log('Todo está bien en la vida')
//   })
//   .catch(function(message) {
//     console.log(message) 
//   })

// Promise.all: Ejecuta una serie de promesas
// Promise.race: ejecuta la primer promesa que se resuelva, sin esperar a las demás.
Promise.race([
  getUser,
  getUserAll,
])
.then(function (message) {
  console.log(message)
})
.catch(function(message){
  console.log(message)
})
// Delete o timer dentro de JavaScript SetInterval o setTimeout

// Llamar servicio(api) con JQuery
// el ajax recibe dos párametros(unaURL, UnConfiguracion{objeto})
// GET: sirve para traer datos, POST: sirve para enviar datos
// GET, le enviamos 2 párametros un caso de Exito(sucess) y un caso de Error(error)
$.ajax('https://randomuser.me/api/jakeoofuhaeoiaeoijaoifjosdj', {
  method: 'GET',
  success: function(data) {
    console.log(data)
  },
  error: function(error) {
    console.log(error)
  }
});

// AJAX: Asynchronous Javascript and XML: no es más que un:--->> XMLHttpRequest

// Traer o llamar servicio usando JavaScript Vanilla.
fetch('https://randomuser.me/api/estovaafallar')
  .then(function(response) {
    console.log(response)
    return response.json()
  })
  .then(function (user) {
    console.log('user:', user.results[0].name.first)
  })
  .catch(function () {
    console.log('algo falló')
  });

// Funciones Asincronas
// Para declarar una función asincrona es poner la palabra reservada 'async'
// Gracias a que mi función es asincrona, yo puedo ocupar una palabra reservada que es 'await'
// Que sirve para que nosotros puedamos esperar las peticiones de nuestra Api
// Si envolvemos una función en parentesis (function)(): nuestra funcion se ejecuta automaticamente.
(async function load() {
  // await
  // código asincrono como fetch()
  // response es igual a fetch(url) pero al agregar await, significa que la linea se va a ejecutar
  // hasta que termine la solicitud de fetch.
  //request: {action, terror o drama, animation}
  
  async function getData(url) {
    const response = await fetch(url)
    const data = await response.json()
    return data; // retornamos los datos de las peliculas
  }
  // Utilizando 'async'-'await'
  const actionList = await getData('https://yts.am/api/v2/list_movies.json?genre=action');
  const animationList = await getData('https://yts.am/api/v2/list_movies.json?genre=animation');
  console.log(actionList, animationList);

  // Utilizando promesas
  let terrorList;
  getData('https://yts.am/api/v2/list_movies.json?genre=drama')
    .then((data) => {
      console.log('terrorList', data);
    })
})()