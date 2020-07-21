export default {
  formId: 'checkoutCompanyForm',
  formField: {
    nome_representante: {
      name: 'nome',
      label: 'Nome e sobrenome*',
      requiredErrorMsg: 'Nome e sobrenome são obrigatórios!',
    },
    email_representante: {
      name: 'email',
      label: 'email*',
      requiredErrorMsg: 'email é obrigatório!',
    },
    senha: {
      name: 'senha',
      label: 'Senha*',
      requiredErrorMsg: 'Senha é obrigatório!',
    },
    senha_confirm: {
      name: 'senha_confirm',
      label: 'Confirmação senha*',
      requiredErrorMsg: 'Confirmação de senha é obrigatório!',
    },
    celular_representante: {
      name: 'celular',
      label: 'Celular*',
      requiredErrorMsg: 'Celular do representante é obrigatório!',
    },
    razao_social: {
      name: 'razao_social',
      label: 'Razao Social*',
      requiredErrorMsg: 'email é obrigatório!',
    },
    nome_empresa: {
      name: 'nome_empresa',
      label: 'Nome da empresa*',
      requiredErrorMsg: 'Nome da empresa é obrigatório!',
    },
    cnpj: {
      name: 'cnpj',
      label: 'Cnpj*',
      requiredErrorMsg: 'Cnpj é obrigatório!',
    },
    telefone: {
      name: 'telefone',
      label: 'Telefone*',
      requiredErrorMsg: 'Telefone é obrigatório!',
    },
    cep: {
      name: 'cep',
      label: 'Cep*',
      requiredErrorMsg: 'Cep é obrigatório!',
    },
    cidade: {
      name: 'cidade',
      label: 'Cidade',
      requiredErrorMsg: 'Cidade é obrigatório!',
    },
    bairro: {
      name: 'bairro',
      label: 'Bairro*',
      requiredErrorMsg: 'Bairro é obrigatório!',
    },
    logradouro: {
      name: 'logradouro',
      label: 'Logradouro*',
      requiredErrorMsg: 'Logradouro é obrigatório!',
    },
    numero: {
      name: 'numero',
      label: 'Numero*',
      requiredErrorMsg: 'Numero é obrigatório!',
    },
    complemento: {
      name: 'complemento',
      label: 'Complemento',
      invalidErrorMsg:
        'Esse campo deve ter entre 2 a 50 caractéres // Verificar essa mensagem',
    },
    uf: {
      name: 'uf',
      label: 'uf*',
      requiredErrorMsg: 'uf é obrigatório!',
    },
    id_tipo_servico: {
      name: 'id_tipo_servico',
      label: 'Tipo de serviço*',
      requiredErrorMsg: 'Tipo de serviço é obrigatório!',
    },
    url_logo: {
      name: 'url_logo',
      label: 'Logo da empresa*',
      invalidErrorMsg:
        'A imagem deve estar entre 5mb // Verificar essa mensagem',
    },
  },
};
