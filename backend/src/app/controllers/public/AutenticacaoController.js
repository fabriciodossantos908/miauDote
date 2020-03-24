const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const auth = require('../../../config/auth');

const { Usuario } = require('../../models');


gerarToken = (params)=>
  jwt.sign(params, auth.usuario_secret, {
    expiresIn: 86400000
  });

module.exports = {

  async registra(req, res){
    let usuario = req.body;

    try {
      const hash = await bcrypt.hash(usuario.senha, 10);
      usuario.senha = hash;
      console.log(usuario.senha);

      usuario = await Usuario.create(usuario);
      

      res.status(201).json({
        usuario: usuario,
        token: gerarToken({id: usuario.id})
      })

    } catch (error) {
      res.status(404).json({erro: error.errors[0].message, campo: error.errors[0].path });
    }
  },

  async autentica(req, res){
    const { senha, email } = req.body;

    let usuario = await Usuario.findOne({
      where:{
        email: email
      }
    })

    if(!usuario){
      console.log('Email');
      return res.status(401).json({erro: 'Usuário e/ou senha inválidos.'});
    }

    if(! await bcrypt.compare(senha, usuario.senha)){
      console.log('Senha');
      return res.status(401).json({erro: "Usuário e/ou senha inválidos."})
    }

    const token = gerarToken({id: usuario.id});

    delete usuario.senha;
    res.json({usuario, token});


  }

}