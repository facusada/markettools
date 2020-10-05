const server = require('express').Router();
const { Client } = require('../db.js');

server.get('/', (req, res, next) => {
	Client.findAll()
		.then(clientes => {
			res.send(clientes);
		})
		.catch(next);
});

module.exports = server;
