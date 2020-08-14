const express = require('express');
const helmet = require('helmet');

const db = require('../data/db-config.js');

const projectRouter = require('./projects/projectRouter')
const resourceRouter = require('./resources/resourceRouter')
const taskRouter = require('./tasks/taskRouter')


const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    res.send('API is now active')
})

server.use('/api/projects', projectRouter)
server.use('/api/resources', resourceRouter)
server.use('/api/tasks', taskRouter)

module.exports = server;