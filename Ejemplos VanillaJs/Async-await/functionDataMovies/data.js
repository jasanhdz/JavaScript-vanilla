// Async - Await

  // Funciones asincronas leídas de una manera sincrona

  // Creando una funcion que recibe un párametro y va a ejecutarse por cada genero
  // de la pelicula

  (async function load() {
    //await
    // action
    // terror
    // animation
    async function getData(url) {
      const response = await fetch(url)
      const data = response.json()
      return data;
    }

    const actionList = await getData('https://yts.am/api/v2/list_movies.json?genre=action');
    console.log('actionList', actionList);
    const animationList = await getData('https://yts.am/api/v2/list_movies.json?genre=animation');
    console.log('animationList', animationList)
    
    // También podemos resolver el problema de la lista usando Promesas
    // y quedaría de la siguiente forma:
    let dramaList;  
    getData('https://yts.am/api/v2/list_movies.json?genre=drama')
      .then(function (data) {
        dramaList = data;
        console.log('dramaList', dramaList);
      })
  })()