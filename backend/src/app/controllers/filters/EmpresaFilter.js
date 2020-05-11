const { Empresa, TipoServico } = require('../../models');
const { Op } = require('sequelize');

class EmpresaFilter{
   async indexByCnpj(req, res) {

      try {
        const empresa = await Empresa.findOne({
          where: {
            cnpj: req.params.cnpj
          },
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
  
        return res.status(404).json({ erro: 'Nenhuma empresa foi encontrada.' })
      } catch (error) {
  
        return res.status(400).json({ erro: error.message })
      }
  
    }

    async indexByNome(req, res) {
      const query = `%${req.params.nome}%`;
      try {
        let empresas = await Empresa.findAll({
          where: {
            [Op.or]: {
              nome_empresa: {
                [Op.like]: query
              },
              razao_social: {
                [Op.like]: query
              }
            }
          },
          include: [
            {
              model: TipoServico,
              as: 'tipo_servico'
            }
          ]
        });
        if (empresas.length > 0) {
          empresas = empresas.map(empresa =>{
            empresa.senha = undefined;
            return empresa;
          });
          return res.json(empresas)
        }
  
        return res.status(404).json({ erro: 'Nenhuma empresa foi encontrada.' })
      } catch (error) {
  
        return res.status(400).json({ erro: error.message })
      }
  
    }
}

module.exports = new EmpresaFilter();