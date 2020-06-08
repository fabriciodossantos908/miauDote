const { Op } = require('sequelize');
const fs = require('fs')

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
        return res.status(400).json({ aviso: "Este endereço de email já foi confirmado." })
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
      return res.html(`<!DOCTYPE html>
      <html lang="pt-br">
      
      <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>Confirmação de Email</title>
      </head>
      
      <style>
         @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
      
         body {
            background-image: url('http://storage.googleapis.com/miaudote-c4d26.appspot.com/app%2F5605b6b0375da04e6a7dee537d3550df-1591281941901.jpg');
         }
      
      
         * {
            margin: 0px;
            padding: 0px;
            box-sizing: border-box;
         }
      
         #container {
            width: 800px;
            height: 500px;
            box-shadow: -5px 3px 34px -15px rgba(0, 0, 0, 0.75);
            border-radius: 20px;
            margin: auto auto;
            margin-top: 10vh;
            display: flex;
            flex-direction: row;
            background-color: #fff;
         }
      
         #img_dog {
            width: 40%;
            height: 100%;
            background-image:
               url('http://storage.googleapis.com/miaudote-c4d26.appspot.com/app%2F4dd157b0b54e9309d0dda34672b49b7c-1591279635118.jpg');
            background-size: cover;
            background-repeat: no-repeat;
            border-top-left-radius: 20px;
            border-bottom-left-radius: 20px;
         }
      
         #msg_confirmado {
            width: 60%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            font-family: Roboto, Arial;
         }
      
         #msg_confirmado img {
            width: 275px;
            height: 275px;
         }
      
         #msg_confirmado a {
            padding: 20px 24px;
            background-color: #FC6B6E;
            text-decoration: none;
            color: white;
            font-weight: bold;
            border-radius: 10px;
         }
      
         #msg_confirmado a:hover {
            background-color: rgb(251, 73, 76);
            transition: 0.5s;
         }
      </style>
      
      <body>
         <div id="container">
            <div id="img_dog">
      
            </div>
            <div id="msg_confirmado">
               <img
                  src="http://storage.googleapis.com/miaudote-c4d26.appspot.com/app%2F1a29a8d7cbe16626f19046a8236dce5a-1591280563983.png"
                  alt="confirmado">
               <h1>Email confirmado com sucesso!</h1>
               <a href="#">Voltar ao site</a>
            </div>
         </div>
      </body>
      
      </html>`)
    } catch (err) {
      return res.status(400).json({ erro: err.message })
    }
  }

  async uploadProfilePhoto(req, res) {
    try {
      let file = req;

      const usuario = await Usuario.findByPk(req.params.id);

      if (usuario.url_foto != 'http://storage.googleapis.com/miaudote-c4d26.appspot.com/profile%2Fuser.png') {
        const fileName = usuario.url_foto.substring(67);
        fileUpload.delete(fileName);
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