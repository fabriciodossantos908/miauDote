const { Usuario } = require('../models');
const { Op } = require('sequelize');

class UsuarioController {
  async index(req, res) {
    try {
      const usuarios = await Usuario.findAll();
      if (usuarios.length > 0) {
        return res.json(usuarios);
      }

      return res.status(404).json({ erro: "Não há usuários cadastrados." });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async showByCpf(req, res) {
    try {
      const usuario = await Usuario.findOne({
        where:{
          cpf: req.params.cpf
        }
      });
      if (usuario != null) {
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
      const usuario = await Usuario.findAll({
        where:{
          nome:{
            [Op.like]: query
          }
        }
      });
    
      if (usuario != null) {
        return res.json(usuario);
      }

      return res.status(404).json({ erro: "Nenhum usuário encontrado." });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async show(req, res) {
    try {
      const usuario = await Usuario.findByPk(req.params.id);
      if (usuario != null) {
        return res.json(usuario);
      }

      return res.status(404).json({ erro: "Usuário não encontrado." });

    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {
      const usuario = await Usuario.create(req.body);

      return res.json(usuario);
    } catch (err) {
      return res.status(400).json({ erro: { campo: err.errors[0].path, mensagem: err.errors[0].message } });
    }
  }

  async update(req, res) {
    try {
      const usuario = await Usuario.findByPk(req.params.id);
      if (!usuario)
        return res.status(404).json({ erro: 'o Usuário a ser editado não existe.' })

      await usuario.update(req.body);

      return res.json({ usuario });
    } catch (err) {
      return res.status(400).json({ erro: { campo: err.errors[0].path, mensagem: err.errors[0].message } });
    }
  }

  async destroy(req, res) {
    try {
      const usuario = await Usuario.findByPk(req.params.id);
      if (!usuario)
        return res.status(404).json({ erro: 'o Usuário a ser deletado não existe.' })

      await usuario.destroy();

      return res.json();
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new UsuarioController();