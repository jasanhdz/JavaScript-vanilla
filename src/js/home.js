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
    if (data.data.movie_count > 0) {
      // Acá termina 
      return data; // retornamos los datos de las peliculas
    } 
    // Si no hay pelis aqui continua
    throw new Error('No se encontró ningun resultado');

  }
  const $form = document.getElementById('form');
  const $home = document.getElementById('home');
  const $featuringContainer = document.getElementById('featuring')


  function setAttributes($element, atributtes) {
    for(const attribute in atributtes) {
      $element.setAttribute(attribute, atributtes[attribute])

    }
  }

  const BASE_API = 'https://yts.am/api/v2/';

  function featuringTemplate(peli, ) {
    return (
      `<div class="featuring">
        <div class="featuring-image">
          <img src="${peli.medium_cover_image}" width="70" height="100" alt="">
        </div>
        <div class="featuring-content">
          <p class="featuring-title">Pelicula encontrada</p>
          <p class="featuring-album">${peli.title}</p>
        </div>
      </div>`
      )
  }

  $form.addEventListener('submit', async (event) => {
    event.preventDefault();
    $home.classList.add('search-active');
    const $loader = document.createElement('img');
    setAttributes($loader, {
      src: 'src/images/loader.gif',
      height: 50,
      width: 50,
    })
     $featuringContainer.append($loader);

     const data = new FormData($form);
     /* Desestructuración de objetos
        Destructuring assignment: permite entrar a un objeto o lista 
        y poder sacar un dato para asignarlo a otra variable.
    */
    try {
       const {
        data: {
          movies: pelis
        }
       } = await getData(`${BASE_API}list_movies.json?limit=1&query_term=${data.get('name')}`)
       const HTMLString = featuringTemplate(pelis[0]);
       $featuringContainer.innerHTML = HTMLString;
    } catch (error) {
      alert(error.message);
      $loader.remove();
      $home.classList.remove('search-active');
    }
  })
  // // Utilizando 'async'-'await'
  // const {data: {movies: actionList } } = await getData(`${BASE_API}list_movies.json?genre=action`);
  // const {data: {movies: dramaList } } = await getData(`${BASE_API}list_movies.json?genre=drama`);
  // const {data: {movies: animationList } } = await getData(`${BASE_API}list_movies.json?genre=animation`);
  
  function videoItemTemplate(movie, category) {
    return (
      `<div class="primaryPlaylistItem" data-id="${movie.id}" data-category="${category}">
        <div class="primaryPlaylistItem-image">
          <img src="${movie.medium_cover_image}">
        </div>
        <h4 class="primaryPlaylistItem-title">
          ${movie.title}
        </h4>
      </div>`
    )
  }
  function createTemplate(HTMLString){
    const html = document.implementation.createHTMLDocument();
    html.body.innerHTML = HTMLString;
    return html.body.children[0];
  }
  function addEventClick($element) {
    $element.addEventListener('click', function () {
      // alert('click')
      showModal($element)
    })
  } 
  function renderMovieList(list, $container, category) {
    // actionList.data.movies
    $container.children[0].remove();
    list.forEach((movie) => {
      const HTMLString = videoItemTemplate(movie, category);
      const movieElement = createTemplate(HTMLString)
      $container.append(movieElement);
      const image = movieElement.querySelector('img');
      image.addEventListener('load', (event) => {
        event.srcElement.classList.add('fadeIn');
      })
      addEventClick(movieElement);
    })
  }

  // Utilizando promesas
  // let terrorList;
  // getData('https://yts.am/api/v2/list_movies.json?genre=drama')
  //   .then((data) => {
  //     console.log('terrorList', data);
  //   })
  
  async function cacheExist(category) {
    const listName = `${category}List`;
    const cacheList = window.localStorage.getItem(listName);
    if(cacheList){
      return JSON.parse(cacheList);
    }
    const {data: {movies: data } } = await getData(`${BASE_API}list_movies.json?genre=${category}`);
    window.localStorage.setItem(listName, JSON.stringify(data))
    return data;
  }

  // Utilizando 'async'-'await'
  const actionList = await cacheExist('action');
  const $actionContainer = document.querySelector('#action');
  renderMovieList(actionList, $actionContainer, 'action')


  const dramaList = await cacheExist('drama')
  const $dramaContainer = document.getElementById('drama');
  renderMovieList(dramaList, $dramaContainer, 'drama');


  const animationList = await cacheExist('animation');
  const $animationContainer = document.getElementById('animation');
  renderMovieList(animationList, $animationContainer, 'animation');

  // Selector con JQuery
  // elemento con la clase home que tiene mi html
  // const $home = $('.home');

  // Selectores con JavaScript
  const $modal = document.getElementById('modal');
  const $overlay = document.getElementById('overlay');
  const $hideModal = document.getElementById('hide-modal');

  let modalTitle = $modal.querySelector('h1');
  let modalImage = $modal.querySelector('img');
  let modalDescription = $modal.querySelector('p'); 

  function findById(list, id) {
    return list.find(movie => movie.id === parseInt(id, 10));
  }
  function findMovie(id, category) {
    switch(category) {
      case 'action': {
        return findById(actionList, id)
      };
      case 'drama': {
        return findById(dramaList, id)
      };
      default: {
        return findById(animationList, id)
      }  
    }
  }

  function showModal($element) {
    $overlay.classList.add('active')
    $modal.style.animation = 'modalIn .8s forwards'
    const id = $element.dataset.id;
    const category = $element.dataset.category;
    const data = findMovie(id, category);
    
    modalTitle.textContent = data.title;
    modalImage.setAttribute('src', data.medium_cover_image);
    modalDescription =  data.description_full;
  }

  $hideModal.addEventListener('click', hideModal);
  function hideModal() {
    $overlay.classList.remove('active');
    $modal.style.animation = 'modalOut .8s forwards';
  }

})()
