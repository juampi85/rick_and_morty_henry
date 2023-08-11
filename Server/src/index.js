const express = require('express');
const router = require('./routes/index');
const morgan = require('morgan');
const { conn } = require('./DB_connection');
const cors = require('cors'); //*--> acá importamos los CORS para utilizarlos debajo
require('dotenv').config();

const server = express();
const {PORT} = process.env;

server.use(morgan('dev')); //* SIEMPRE debe ir ANTES de la ruta, ya que es un middleware que facilita su funcionamiento

//************************************/
//* MIDDLEWARE para configurar CORS *// ---> SIEMPRE que creemos un MIDDLEWARE debe incluir el 3 parámetro 'NEXT' !!
//************************************/
//! SE PUEDE OBVIAR este MIDDLEWARE pero lo DEBO utilizar a las CORS
// server.use((req, res, next) => { //* nos brinda permiso para acceder a TODAS las RUTAS --> le damos los permisos de CORS
//   res.header('Access-Control-Allow-Origin', '*'); //? acá nos indica que TODOS tendrán acceso a esta API
//   res.header('Access-Control-Allow-Credentials', 'true'); //? acá permitimos el envío de COOKIES y CREDENCIALES para la AUTENTICACIÓN
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept'
//   );
//   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE'); //? acá se ve qué SOLICITUDES de HTTP se van a AUTORIZAR p/el CLIENTE
//   next();
// });

server.use(cors()); //* SE USA PARA CONFIGURAR CORS --> y así OBVIAR todo el MIDDLWARE largo de arriba
server.use(express.json()); //* se encarga de transformar la info (JASON) recibida a OBJETOS de JavaScript --> también se encarga de entregar la propiedad BODY de un POST, si no, llega VACÍO !!

//? CREAMOS la RUTA RAIZ
server.use('/rickandmorty', router); //todo ---> acá ENLAZAMOS nuestro SERVIDOR con todas las RUTAS !!!

//?????????????????????????????/
//* secuencia de los request *//
//?????????????????????????????/
//todo                   1°          2°            3°                       4°                       5°
//todo   request  -->  morgan  -->  cors  -->  express.json()  -->  ruta('/rickandmorty')  -->  server.listen


//****************************************************/
//* PREGUNTAR si la opción de abajo FUNCIONA también */
//****************************************************/
// server.listen(PORT, async () => {
  //   await conn.sync({force: true}
  //   console.log(`Server raised on port: ${PORT}`);
// });

conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log('Server raised on port: ' + PORT)
  })
})