const { Usuario } = require('../models');

class UsuarioController {
  async index(req, res) {
    try {
      const usuarios = await Usuario.findAll();
      if(usuarios.length > 0){
        return res.json(usuarios);
      }

      return res.json({erro: "Lista vazia."});
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async show(req, res) {
    try {
      const usuario = await Usuario.findByPk(req.params.id);
      if(usuario != null){
        return res.json(usuario);
      }

      return res.json({erro: "Usuário não existe"});

    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {
      const usuario = await Usuario.create(req.body);

      return res.json(usuario);
    } catch (err) {
      return res.status(400).json({erro: err.errors[0].message, campo: err.errors[0].path });
    }
  }

  async update(req, res) {
    try {
      const usuario = await Usuario.findByPk(req.params.id);

      await usuario.update(req.body);

      return res.json({ usuario });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async destroy(req, res) {
    try {
      const usuario = await Usuario.findByPk(req.params.id);
      console.log(usuario);

      await usuario.destroy();

      return res.json();
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new UsuarioController();