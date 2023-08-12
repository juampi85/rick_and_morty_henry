// const { Router } = require('express')
const getCharById = require('../controllers/getCharById');
const login = require('../controllers/login');
const postFav = require('../controllers/postFav');
const postUser = require('../controllers/postUser');
const deleteFav = require('../controllers/deleteFav');


const router = require('express').Router(); //? guardamos la INSTANCIA "router" de la CLASE "Router"

// router.get('/character/:id', getCharById); //* versión CORTA
router.get('/character/:id', (req, res) => { //? versión larga
  getCharById(req, res);
});

// router.get('/login', login); //* versión CORTA
router.get('/login', (req, res) => { //? versión larga
  login(req, res);
});

router.post('/login', (req, res) => postUser(req, res)); //? versión medio larga

// router.post('/fav', postFav); //* versión CORTA
router.post('/fav', (req, res) => postFav(req, res)); //? versión medio larga

// router.delete('/fav/:id', deleteFav); //* versión CORTA
router.delete('/fav/:id', (req, res) => deleteFav(req, res)); //? versión medio larga


module.exports = router; //? exportamos la INSTANCIA "router" de la CLASE "Router" para importarlo en index llamando al Servidor