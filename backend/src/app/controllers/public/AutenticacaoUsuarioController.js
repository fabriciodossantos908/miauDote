const { Usuario } = require('../../models');
const autenticacaoHelper = require('../../../helpers/AutenticacaoHelper');
const sendEmail = require('../../../helpers/sendEmail');

module.exports = {

  async registra(req, res) {
    let usuario = req.body;

    if (usuario.senha.length < 8 || usuario.senha.length > 30) {
      return res.status(400).json({ erro: { campo: 'senha', mensagem: 'Este campo deve conter entre 8 e 30 caracteres' } })
    }

    try {


      usuario.senha = await autenticacaoHelper.criptografarSenha(usuario.senha);



      let usuarioExistente = await Usuario.findOne({ where: { email: usuario.email } })

      if (usuarioExistente) {
        return res.status(400).json({
          erro: "Email já cadastrado!",
          usuario: {
            nome: usuarioExistente.nome,
            email: usuarioExistente.email,
            celular: usuarioExistente.celular
          }
        })
      } else {
        usuarioExistente = await Usuario.findOne({ where: { cpf: usuario.cpf } });
        if (usuarioExistente)
          return res.status(400).json({
            erro: "CPF já cadastrado!",
            usuario: {
              nome: usuarioExistente.nome,
              email: usuarioExistente.email,
              celular: usuarioExistente.celular
            }
          })
      }

      usuario = await Usuario.create(usuario);

      await sendEmail.emailConfirmation(usuario.email);



      usuario.senha = undefined;
      res.status(201).json({
        id_usuario: usuario.id,
        mensagem: 'Usuario registrado com sucesso, confirme seu email para prosseguirmos'
      })

    } catch (error) {
      res.status(400).json({ erro: { campo: error.errors[0].path, mensagem: error.errors[0].message } });
    }
  },

  async autentica(req, res) {
    const { senha, email } = req.body;

    let usuario = await Usuario.findOne({
      where: {
        email: email
      }
    })

    if (!usuario) {
      return res.status(401).json({ erro: 'Usuário e/ou senha inválidos.' });
    }

    if (! await autenticacaoHelper.compararSenha(senha, usuario.senha)) {
      return res.status(401).json({ erro: "Usuário e/ou senha inválidos." })
    }

    if(!usuario.email_confirmado){
      return res.status(200).json({aviso: "Uma mensagem foi enviada ao seu email, confirme-o para prosseguirmos."})
    }

    usuario.senha = undefined;
    const token = autenticacaoHelper.gerarToken({
        id: usuario.id,
        permissions: usuario.permissions
    });

    usuario.senha = undefined;
    res.json({ usuario, token });


  }

}