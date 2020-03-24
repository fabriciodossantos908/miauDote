const express = require('express');
const routes = require('./routes');
const authMid = require('./app/middlewares/auth');

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3000);