const axios = require('axios');

const getCharById = (res, id) => {
  axios
  .get(`https://rickandmortyapi.com/api/character/${id}`) //* este ID viene por parámetro
    .then((response) => response.data)
    .then(({ name, gender, species, origin, image, status }) => {
      const character = {
    id, //* este ID viene por parámetro de la ruta
    name,
    gender,
    species,
    origin: origin.name,
    image,
    status
      }
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(character))
  })
  .catch ((error) => { 
    res.writeHead(500, { 'Content-Type': 'text/plain' })
    res.end(error.message )
  })
  
};

module.exports = { getCharById }