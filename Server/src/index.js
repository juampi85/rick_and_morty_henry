const http = require('http');
const PORT = 3001;
const data = require('./utils/data');


http.createServer(({ url }, res) => { 
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (url.includes('/rickandmorty/character')) {
    const id = Number(url.split('/').pop());
    const character = data.find(character => character.id === id);
    

    character
      ? res.writeHead(200, { 'Content-Type': 'application/json' }).end(JSON.stringify(character))
      : res.writeHead(404, { 'Content-Type': 'application/json' }).end(JSON.stringify({error: 'Character not found'}));
  }
}).listen(PORT, 'localhost')