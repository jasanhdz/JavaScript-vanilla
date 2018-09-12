// Básicamente vamos a tener una variable global que va a estar declarada en jquery que es $
// Pero primero debemos importar la libreria de jQuery a nuestro html, de lo contrario no nos
// va a funcionar 
// Pedir datos a un servidor, o algún servicio a lo cuál denominamos API
// Usando JQuery 
// Mandamos 2 párametros, 1° una URL, y 2° una configuración que a su vez va a ser un objeto
// ajax de jquery tiene un montón de métodos de párametros pero los más sencillos son decirle
// porque método yo estoy trayendo algo, si yo estoy trayendo datos de un servidor seguramente
// va a ser un método de obtener datos, un método GET. Si yo estoy mandando datos como haciendo
// un comentario, entonces ocuparia POST, también esta PUB, DELETE.
// también otra cosa que necesitamos dentro de esta función son otros 2 párametros
// uno que se llama success y otro que se llama error.
// Success me va a servir como una función que se va a llamar cuando todo este bien
// cuando me ha halla devuelto datos este ajax.
$.ajax('https://randomuser.me/api/', {
  method: 'GET',
  success: function(data) {
    console.log(data)
  },
  // Algo más que tembién tenemos es el párametro de error que también va a ser una función
  error: function(error) {
    console.log(error)
  }
})

  // AJAX no es más que un XMLHttpRequest

  // Pidiendo datos o llamando un API con Vanilla JS
  // fetch va a recibir una URL y una configuración, pero si no le paso la configuración no pasa nada
  // va a mandar los datos por defecto, por defecto va a utilizar el método GET auque también podemos lanzar POS o PUB
  // El elemento de fetch lo que va a ser a ser es devolverme una promesa. Entonces claramente tenemos un método
  // que se llama .then() de este fetch, que a su vez va a recibir una función 
  fetch('https://randomuser.me/api/jfjfj')
  // A su vez tenemos esos datos que son la respuesta 
  .then(function(response) {
      // console.log(response);
      return response.json()
  })
  .then(function(user) {
    console.log('user', user.results[0].email)
  })
  // También debemos Validar nuestra respuesta si algo falla
  .catch(function(err) {
    console.log(`lo siento, algo fallo :(`)
  })
