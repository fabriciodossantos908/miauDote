const { Usuario } = require('../../models');
const { Op } = require('sequelize');
const autenticacaoHelper = require('../../../helpers/AutenticacaoHelper');

class UsuarioFilter{

   async showByCpf(req, res) {
      try {
        const usuario = await Usuario.findOne({
          where:{
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
          where:{
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
          where:{
            nome:{
              [Op.like]: query
            }
          }
        });
      
        if (usuarios.length > 0) {
          usuarios = usuarios.map(usuario=>{
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

    async confirmarEmail(req, res){
      try {
        const usuario = await Usuario.findOne({
          where:{
            email: req.params.email
          }
        })

        if(usuario.email_confirmado){
          return res.status(400).json({aviso: "Este endereço de email já foi confirmado."})
        }

        if(!usuario) {
          return res.status(400).json({erro: "Não há usuários cadastrados com este endereço de email."});
        }

        usuario.email_confirmado = true;
        usuario.save({ fields: ['email_confirmado'] });

        const token = autenticacaoHelper.gerarToken({
          id: usuario.id,
          permissions: usuario.permissions
        })

        usuario.senha = undefined;
        usuario.permissions = undefined;

        return res.json({usuario, token});
      } catch (err) {
        return res.status(400).json({erro: err.message})
      }
    }


}

module.exports = new UsuarioFilter();