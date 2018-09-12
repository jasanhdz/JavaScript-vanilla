alert("Entrando a las promesas")

// Una promesa se crea así
//   new Promise, también se puede guardar en una variable
//   nuestra promesa va a recibir un argumento.
//   El argumento que recibe nuestra Promise es una Function
     new Promise(function myfuncion() {
     }) 
//   A su vez nuestra función va a recibir 2 Párametros que a su vez son dos funciones 
//   que vamos a poder lanzar en algun momento. Pero estos párametros se convierten en
//   funciones automaticamente, nosotros tenemos que pasarlo como párametros

const getUser = new Promise(function(todoBien, todoMal) {

})

// Claramente ejecutar todoBien o todoMal debería depender de una condicional  de algo que
// ocurra de si mi request a mi API, mi llamada a la traía de usuarios se resuleve de una manera correcta
// claramente si y solo si debería invocar a la función todoBien.
// Por ahora vamos a invocarla inmediatamente

const getUser1 = new Promise(function(todoBien, todoMal) {
  setTimeout(function() {
    todoMal('Hubo un error con getUser1');
  }, 4000)
})

// El 1° párametro nos va a indicar si todoBien, recuera que a los párametros
// los puedes poner como tu quieres pero básicamente el primero va a servir para
// que nosotros resolvamos nuestra promesa de la manera correcta.
// El 2° párametro nos va a servir para rechazar nuestra promesa, osea todoMal

// Llamando a getUser1
// getUser1

// ¿Como se que todo está bien dentro de mi aplicación?
// Bueno ahora mis promesas van a tener métodos, para que nosotros podamos saber si todo a ido Bien en mi promesa
// el método si todo ha ido bien es: .then()
//.then()
// ¿que ocurre cuando todo ha ido bien en mi promesa? ocurre una función que es lo que le vamos a mandar .then()
// .catch(function(ev) {
//   console.log(ev);
// })

// Timers dentro de JavaScript
// setInterval: se ejecuta cada cierto tiempo
// setTimeout: se ejecuta 1 sola vez en determinado tiempo 
// Los timers van a recibir 2 párametros, el primero es una función y el segundo es el tiempo en milisegundos

const getUser2 = new Promise(function(todoBien, todoMal) {
  setTimeout(function() {
    todoBien('Este es el mensaje de todoBien de getUser2');
  }, 5000)
})

// getUser2
//   .then(function() {
//     console.log(`Todo ha ido bien despues de 3 segundos con getUser2`)
//   })

// Imaginemos que algo fallo en la promesa, para ello vamos crear un error intencional
// podemos mandar un delete y llamar inmediatamente a la promesa TodoMal
const getUser3 = new Promise(function(todoBien, todoMal) {
  setTimeout(function() {
    // En todo mal podemos enviar párametros, como un mensaje, el cual recibira catch
    todoBien('Enviando mensaje de todoBien a -> then()');
  }, 2000)
})

// Siempre debemos llamar a la promesa con el nombre de la variable que se guarda
// con ten y catch Podemos personalizar los mensajes de las funciones
// Personalizamos todoBien con .then
// Personalizamos todoMal con .catch
// getUser3
//   .then(function() {
//     console.log(`Todo Esta muy bien con getUser3`)
//   })
//   // Catch recibe el párametro de TodoMal como párametro y puede manipularlo como quiera.
//   // En este caso solo imprime el mensaje
//   .catch(function(message) {
//     console.log(`recibiendo ${message}`)
//   })

  // ¿Que más podemos hacer con las promesas?
  // que tal si yo envió muchas promesas al mismo Tiempo y esperó que todas se resuelvan.
  // con: Promise.all
  Promise.all([ // 7 segundos de espera
    getUser2,
    getUser3,
  ])
  .then(function(message) {
    console.log(message)
  })
  .catch(function(message) {
    console.log(message)
  })

  // Promise.race imprime o ejecuta la primer promesa que se cumpla sin esperar a las demás
  Promise.race([ // Solo esperá getUser1 que tardá: 4 segundos
    getUser1,
    getUser2,
  ])
  .then(function(message) {
    console.log(`--Solo estoy impirmiendo 1 mensaje---`)
    console.log(message)
  })
  .catch(function(message) {
    console.log(`Solo estoy impirmiendo 1 mensaje`)
    console.log(message)
  })