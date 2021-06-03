const { Router } = require('express');
const express = require('express');
const routes = express.Router();

const Usuario = require('./controllers/usuarios.controller');
const Obra = require('./controllers/obra.controller');


routes.get('/', Usuario.index);
routes.get('/', Obra.index);


// Rotas de Usuarios
routes.post('/api/usuarios', Usuario.create);
routes.get('/api/usuarios', Usuario.index);
routes.get('/api/usuarios.details/:_id', Usuario.details);
routes.delete('/api/usuarios/:_id', Usuario.delete);
routes.put('/api/usuarios', Usuario.update);

// Rotas de Obras
routes.post('/api/obra', Obra.create);
routes.get('/api/obra', Obra.index);
routes.get('/api/obra.details/:_id', Obra.details);
routes.delete('/api/obra/:_id', Obra.delete);
routes.put('/api/obra', Obra.update);

module.exports = routes;
