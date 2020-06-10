const { Empresa, TipoServico } = require('../../models');
const { Op } = require('sequelize');
const fs = require('fs');

const fileUpload = require('../../../helpers/FileUpload');

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

    async uploadCompanyPhoto(req, res) {
      try {
        let file = req;

        const company = await Empresa.findByPk(req.params.id);

        if(!company){
          return res.status(400).json({erro: 'Empresa inexistente.'});
        }
        if (company.url_logo != 'http://storage.googleapis.com/miaudote-c4d26.appspot.com/profile%2Fuser.png') {
          const fileName = company.url_logo.substring(77);
          await fileUpload.delete('company/profile/' + fileName);
        }
        
        const url_logo = await fileUpload.upload(`./src/app/tmp/${file.file.filename}`, `company/profile/${file.file.filename}`);
        company.url_logo = url_logo;
        company.save({ fields: ['url_logo'] });

  
        await fs.unlink(`./src/app/tmp/${file.file.filename}`, (err) => {
          if (err) {
            return res.status(400).json({erro: "Erro ao apagar arquivo"});
          }
        });
  
        return res.json({ mensagem: 'Foto atualizada com sucesso', url_logo })
  
      } catch (error) {
        return res.status(400).json(error);
      }
    }
}

module.exports = new EmpresaFilter();