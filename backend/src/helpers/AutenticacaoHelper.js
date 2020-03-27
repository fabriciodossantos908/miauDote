const auth = require('../config/auth');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


module.exports = {
  gerarToken(params) {
    return jwt.sign(params, auth.secret, {
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

