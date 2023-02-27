const getTodos = url =>
  new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
      const isRequestOk = request.readyState === 4 && request.status === 200;
      const isRequestNotOk = request.readyState === 4;

      if (isRequestOk) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      }

      if (isRequestNotOk) {
        reject('Não foi possível obter os dados da API');
      }
    });

    request.open('GET', url);
    request.send();
  });

getPokemon('https://pokeapi.co/api/v2/pokemon/1')
  .then(bulbasaur => {
    console.log(bulbasaur);
    return getPokemon('https://pokeapi.co/api/v2/pokemon/4');
  })
  .then(chamander => {
    console.log(chamander);
    return getPokemon('https://pokeapi.co/api/v2/pokemon/4');
  })
  .then(console.log)
  .catch(error => console.log(error));

// const getData = () =>
//   new Promise((resolve, reject) => {
//     resolve('Dados aqui');
//     reject('Erro aqui');
//   });

// getData()
//   .then(value => console.log(value))
//   .catch(error => console.log(error));

// console.log(getData());
