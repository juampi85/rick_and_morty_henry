const http = require('http');
const PORT = 3001;
// const data = require('./utils/data');
const {getCharById} = require('./controllers/getCharById');


http.createServer(({ url }, res) => { 
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (url.includes('/rickandmorty/character')) {
    const id = Number(url.split('/').pop());
    
    getCharById(res, id);
  }
}).listen(PORT, 'localhost')