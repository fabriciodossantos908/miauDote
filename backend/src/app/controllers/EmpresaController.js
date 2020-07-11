const { Empresa, TipoServico } = require('../models');
const { Op } = require('sequelize');

class EmpresaController {

  async index(req, res) {

    try {

      let empresas = await Empresa.findAll({
        include: [
          {
            model: TipoServico,
            as: 'tipo_servico'
          }
        ]
      });
      if (empresas.length > 0) {
        empresas = empresas.map(empresa => {
          empresa.senha = undefined;
          empresa.id_tipo_servico = undefined;
          return empresa;
        })

        return res.json(empresas);
      }

      return res.status(404).json({ erro: 'Não há empresas cadastradas.' })
    } catch (error) {
      return res.status(400).json({ erro: error.message })
    }


  }

  async show(req, res) {

    try {
      const empresa = await Empresa.findByPk(req.params.id, {
        include: [
          {
            model: TipoServico,
            as: 'tipo_servico'
          }
        ]
      });

      if (empresa != null) {
        empresa.senha = undefined;
        return res.json(empresa)
      }

      return res.status(404).json({ erro: 'Empresa não encontrada.' })
    } catch (error) {

      return res.status(400).json({ erro: error.message })
    }

  }

  async store(req, res) {

    let empresa = req.body;
    if (empresa.senha.length < 8 || empresa.senha.length > 30) {
      return res.status(400).json({ erro: { campo: 'senha', mensagem: 'Este campo deve conter entre 8 e 30 caracteres.' } })
    }

    try {

      let empresaExistente = await Empresa.findOne({ where: { email_representante: empresa.email_representante } });
      let erro = "Email de representante já cadastrado!";
      let campo = "email_representante";
      if (!empresaExistente) {
        empresaExistente = await Empresa.findOne({ where: { cnpj: empresa.cnpj } });
        erro = "CNPJ já cadastrado!",
          campo = "cnpj";
        if (!empresaExistente) {
          empresaExistente = await Empresa.findOne({ where: { razao_social: empresa.razao_social } });
          erro = "Razão Social já cadastrada!";
          campo = "razao_social";
        }
      }

      if (empresaExistente) {
        return res.status(400).json({
          erro: {
            campo: campo,
            mensagem: erro,
            email_representante: empresaExistente.email_representante,
            nome_representante: empresaExistente.nome_representante,
            empresa: {
              razao_social: empresaExistente.razao_social,
              nome_fantasia: empresaExistente.nome_empresa
            }
          }
        })
      }

      empresa = await Empresa.create(empresa);
      empresa.senha = undefined;
      return res.json(empresa)
    } catch (error) {
      return res.status(400).json({ erro: { campo: error.errors[0].path, mensagem: error.errors[0].message } });
    }
  }

  async update(req, res) {
    try {
      const empresa = await Empresa.findByPk(req.params.id);
      if (!empresa)
        return res.status(404).json({ erro: 'a empresa a ser editada não existe.' })

      await empresa.update(req.body);
      empresa.senha = undefined;
      return res.json({ empresa });
    } catch (err) {
      return res.status(400).json({ erro: { campo: err.errors[0].path, mensagem: err.errors[0].message } });
    }
  }

  async destroy(req, res) {
    try {
      const empresa = await Empresa.findByPk(req.params.id);
      if (!empresa)
        return res.status(404).json({ erro: 'a empresa a ser deletada não existe.' })

      await empresa.destroy();

      return res.status(204).json();
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

}

module.exports = new EmpresaController();