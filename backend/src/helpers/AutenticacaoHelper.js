const auth = require('../config/auth');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


module.exports = {
  gerarTokenUsuario(params) {
    return jwt.sign(params, auth.usuario_secret, {
      expiresIn: 86400000
    })
  },

  gerarTokenEmpresa(params) {
    return jwt.sign(params, auth.empresa_secret, {
      expiresIn: 86400000
    })
  },

  async criptografarSenha(senha) {
    try {
      const senhaCriptografada = await bcrypt.hash(senha, 10);
      return senhaCriptografada;
    } catch (error) {
      return error;
    }

  },

  async compararSenha(reqSenha, entidadeSenha) {
    try {
      let igual = await bcrypt.compare(reqSenha, entidadeSenha);
      return igual;
    } catch (erro) {

    }
  }
}

