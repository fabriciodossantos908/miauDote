const express = require('express');
const authMid = require('./app/middlewares/auth');

const authRoutes = require('./routes/authRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');

const app = express();

app.use(express.json());


app.use('/usuarios', authRoutes);

app.use(authMid);

app.use(usuarioRoutes)


module.exports = app;