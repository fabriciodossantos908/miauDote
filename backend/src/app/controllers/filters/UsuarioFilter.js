const { Op } = require('sequelize');
const fs = require('fs');
const path = require('path');

const { Usuario } = require('../../models');
const autenticacaoHelper = require('../../../helpers/AutenticacaoHelper');
const fileUpload = require('../../../helpers/FileUpload');
const sendEmail = require('../../../helpers/sendEmail');

class UsuarioFilter {

  async showByCpf(req, res) {
    try {
      const usuario = await Usuario.findOne({
        where: {
          cpf: req.params.cpf
        }
      });
      if (usuario != null) {
        usuario.senha = undefined;
        return res.json(usuario);
      }

      return res.status(404).json({ erro: "Nenhum usuário encontrado." });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async showByEmail(req, res) {
    try {
      const usuario = await Usuario.findOne({
        where: {
          email: req.params.email
        }
      });
      if (usuario != null) {
        usuario.senha = undefined;
        return res.json(usuario);
      }

      return res.status(404).json({ erro: "Nenhum usuário encontrado." });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async showByNome(req, res) {
    try {
      const query = `%${req.params.nome}%`
      let usuarios = await Usuario.findAll({
        where: {
          nome: {
            [Op.like]: query
          }
        }
      });

      if (usuarios.length > 0) {
        usuarios = usuarios.map(usuario => {
          usuario.senha = undefined;
          return usuario;
        })
        return res.json(usuarios);
      }

      return res.status(404).json({ erro: "Nenhum usuário encontrado." });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async confirmarEmail(req, res) {
    try {
      const usuario = await Usuario.findOne({
        where: {
          email: req.params.email
        }
      })


      if (!usuario) {
        return res.status(400).json({ erro: "Não há usuários cadastrados com este endereço de email." });
      }

      if (usuario.email_confirmado) {
        return res.sendFile( path.resolve(__dirname + '../../../../helpers/emailConfirmated.html'));
      }

      usuario.email_confirmado = true;
      usuario.save({ fields: ['email_confirmado'] });

      const token = autenticacaoHelper.gerarToken({
        id: usuario.id,
        permissions: usuario.permissions
      })

      usuario.senha = undefined;
      usuario.permissions = undefined;

      // return res.json({ mensagem: "Usuário confirmado com sucesso", usuario, token });
      return res.sendFile( path.resolve(__dirname + '../../../../helpers/emailConfirmated.html'));
    } catch (err) {
      return res.status(400).json({ erro: err.message })
    }
  }

  async uploadProfilePhoto(req, res) {
    try {
      let file = req;

      const usuario = await Usuario.findByPk(req.params.id);

      if(!usuario){
        return res.status(400).json({erro: 'Usuário inexistente'});
      }

      if (usuario.url_foto != 'http://storage.googleapis.com/miaudote-c4d26.appspot.com/profile%2Fuser.png') {
        const fileName = usuario.url_foto.substring(67);
        fileUpload.delete('profile/' + fileName);
      }

      const url_foto = await fileUpload.upload(`./src/app/tmp/${file.file.filename}`, `profile/${file.file.filename}`);

      usuario.url_foto = url_foto;
      usuario.save({ fields: ['url_foto'] });

      await fs.unlink(`./src/app/tmp/${file.file.filename}`, (err) => {
        if (err) {
          return res.status(400).json(err);
        }
      });

      return res.json({ mensagem: 'Foto atualizada com sucesso', url_foto })

    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async forgotPassword(req, res) {
    try {
      const usuario = await Usuario.findOne({ where: { email: req.params.email } });

      if (!usuario.email_confirmado) {
        return res.status(400).json({ aviso: 'Este endereço de e-mail ainda não foi confirmado!' });
      }

      await sendEmail.forgotPassword(usuario.email);
      res.json({ mensagem: 'Uma mensagem foi enviada para o seu endereço de email para a redefinição de sua senha.' })

    } catch (error) {

      return res.status(400).json(error);

    }
  }


}

module.exports = new UsuarioFilter();