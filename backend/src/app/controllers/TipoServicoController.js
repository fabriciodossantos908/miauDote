const { TipoServico } = require('../models');
const { Op } = require('sequelize');

class UsuarioController {
  async index(req, res) {
    try {
      const tipoServico = await TipoServico.findAll();
      if (tipoServico.length > 0) {
        return res.json(tipoServico);
      }

      return res.status(404).json({ erro: "Não há tipos de serviços cadastrados." });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async show(req, res) {
    try {
      const tipoServico = await TipoServico.findByPk(req.params.id);
      if (tipoServico != null) {
        return res.json(tipoServico);
      }

      return res.status(404).json({ erro: "Tipo de serviço não encontrado." });

    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {
      const tipoServico = await TipoServico.create(req.body);

      return res.json(tipoServico);
    } catch (err) {
      return res.status(400).json({ erro: { campo: err.errors[0].path, mensagem: err.errors[0].message } });
    }
  }

  async update(req, res) {
    try {
      const tipoServico = await TipoServico.findByPk(req.params.id);
      if (!tipoServico)
        return res.status(404).json({ erro: 'O tipo de serviço a ser editado não existe.' })

      await tipoServico.update(req.body);

      return res.json({tipoServico});
    } catch (err) {
      return res.status(400).json({ erro: { campo: err.errors[0].path, mensagem: err.errors[0].message } });
    }
  }

  async destroy(req, res) {
    try {
      const tipoServico = await TipoServico.findByPk(req.params.id);
      if (!tipoServico)
        return res.status(404).json({ erro: 'O tipo de serviço a ser deletado não existe.' })

      await tipoServico.destroy();

      return res.json();
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new UsuarioController();