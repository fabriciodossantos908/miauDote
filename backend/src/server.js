const express = require('express');
const authMid = require('./app/middlewares/auth');
const authEmpresaMid = require('./app/middlewares/authEmpresa');

const authRoutes = require('./routes/authRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const empresaRoutes = require('./routes/empresaRoutes');

const app = express();

app.use(express.json());


app.use(authRoutes);

// app.use(authEmpresaMid);

app.use(empresaRoutes)

app.use(authMid);

app.use(usuarioRoutes)

module.exports = app;