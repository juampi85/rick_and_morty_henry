const axios = require('axios');
const URL = 'https://rickandmortyapi.com/api/character';

//* --> solución PREVIA a la HW de ASYNC/AWAIT
// const getCharById = (req, res) => {
//   const { id } = req.params;

//   axios(`${URL}/${id}`)
//     .then((response) => response.data)
//     .then(({ status, name, species, origin, image, gender }) => {

//       if (name) { //* evalúo NAME (o CUALQUIERA de las otras propiedades) menos ID porque ID SIEMPRE va ser true (no importa que devuelva o no un)
//         const character = { id, status, name, species, origin, image, gender };
//         return res.status(200).json(character); //* si NO le hubiera indicado el STATUS, por default, devolvería 200
//       }

//       return res.status(404).send('Not found'); //* es BUENA PRÁCTICA evitar el ELSE y, en su lugar, colocar un RETURN para que CORTE la ejecución
//     })
//     .catch((error) => {
//       return res.status(500).send(error.message)
//     });
// };

const getCharById = async (req, res) => {
  const { id } = req.params;

  try {
    const { data } = await axios(`${URL}/${id}`);

    const {
      status,
      name,
      species,
      origin,
      image,
      gender,
    } = data;

    const character = { id, status, name, species, origin, image, gender };

    return name
      ? res.status(200).json(character)
      : res.status(404).send('Not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = getCharById;
