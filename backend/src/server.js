const express = require('express');
const jwt = require('express-jwt');
const authMid = require('./app/middlewares/auth');
const authConfig = require('./config/auth');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const publicRoutes = require('./routes/publicRoutes');
const privateRoutes = require('./routes/privateRoutes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());


app.use(authRoutes);
app.use(publicRoutes);

app.use(authMid);
app.use(jwt({secret: authConfig.secret}));

app.use(privateRoutes);


// app.use(usuarioRoutes)

module.exports = app;