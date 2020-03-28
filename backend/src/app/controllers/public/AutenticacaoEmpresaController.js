const { Empresa } = require('../../models');
const autenticacaoHelper = require('../../../helpers/AutenticacaoHelper');

module.exports = {

  async registra(req, res) {
    let empresa = req.body;
    if (empresa.senha.length < 8 || empresa.senha.length > 30) {
      return res.status(400).json({ erro: { campo: 'senha', mensagem: 'Este campo deve conter entre 8 e 30 caracteres.' } })
    }

    try {

      empresa.senha = await autenticacaoHelper.criptografarSenha(empresa.senha);

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


      res.status(201).json({
        empresa,
        token: autenticacaoHelper.gerarToken({ id: empresa.id, permissions: empresa.permissions })
      })

    } catch (error) {
      res.status(400).json({ erro: { campo: error.errors[0].path, mensagem: error.errors[0].message } });
    }
  },

  async autentica(req, res) {
    const { cnpj, senha } = req.body;

    let empresa = await Empresa.findOne({
      where: {
        cnpj: cnpj
      }
    })

    if (!empresa) {
      return res.status(401).json({ erro: 'CNPJ e/ou senha inválidos.' });
    }

    // if (! await bcrypt.compare(senha, usuario.senha))
    if (! await autenticacaoHelper.compararSenha(senha, empresa.senha)) {
      return res.status(401).json({ erro: "CNPJ e/ou senha inválidos." })
    }

    const token = autenticacaoHelper.gerarToken({ id: empresa.id, permissions: empresa.permissions });

    delete empresa.senha;
    res.json({ empresa, token });


  }

}