require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const UserModel = require('./models/User');
const FavoriteModel = require('./models/Favorite');

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
  { logging: false, native: false } //* el native: false NO ES NECESARIO --> por defecto viene en FALSE. Le impide utilizar sus CONTROLADORES NATIVOS
);

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.
UserModel(sequelize); //* acá obtenemos el modelo User
FavoriteModel(sequelize); //* acá obtenemos el modelo Favorite

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
// console.log(secuelize.models);
const { User, Favorite } = sequelize.models;

// Associations
User.belongsToMany(Favorite, { through: 'user_favorite' });
Favorite.belongsToMany(User, { through: 'user_favorite' });

module.exports = {
  // User, //* acá exporto los modelos recibidos en la línea 19
  // Favorite, //* acá exporto los modelos recibidos en la línea 20
  ...sequelize.models, //* de esta manera me ahorro exportar los modelos individualmente
  conn: sequelize,
};
