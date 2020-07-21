export default {
  formId: 'checkoutUserModel',
  formField: {
    nome: {
      name: 'nome',
      label: 'Nome e sobrenome*',
      requiredErrorMsg: 'Nome e sobrenome são obrigatórios!',
      minErrorMsg: 'Por favor, coloque nome e sobrenome!',
      maxErrorMsg: 'Por favor somente nome e sobrenome!',
    },
    email: {
      name: 'email',
      label: 'email*',
      requiredErrorMsg: 'email é obrigatório!',
      emailErrorMsg: 'Por favor insira um email válido!',
    },
    senha: {
      name: 'senha',
      label: 'Senha*',
      requiredErrorMsg: 'Senha é obrigatório!',
      minErrorMsg: 'A senha ter no mínimo 8 caracteres',
      maxErrorMsg: 'A senha ter no máximo 30 caracteres',
    },
    senha_confirm: {
      name: 'senha_confirm',
      label: 'Confirmação senha*',
      requiredErrorMsg: 'Confirmação de senha é obrigatório!',
      matchErrorMsg: 'As senhas não coincidem!',
    },
    celular: {
      name: 'celular',
      label: 'Celular*',
      requiredErrorMsg: 'Celular do representante é obrigatório!',
    },
    data_nascimento: {
      name: 'data_nascimento',
      label: 'Data de nascimento',
      requiredErrorMsg: 'Data de nascimento é obrigatório',
    },
    cpf: {
      name: 'cpf',
      label: 'cpf*',
      requiredErrorMsg: 'Cpf é obrigatório',
      lengthErrorMsg: 'Cpf deve ter os 11 caractéres',
    },
    sexo: {
      name: 'sexo',
      label: 'Sexo',
      requiredErrorMsg: 'Esse campo é obrigatório',
    },
    cep: {
      name: 'cep',
      label: 'Cep*',
      requiredErrorMsg: 'Cep é obrigatório!',
      lengthErrorMsg: 'Por favor coloque um cep válido!',
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
    url_foto: {
      name: 'url_foto',
      label: 'Sua foto*',
      invalidErrorMsg:
        'A imagem deve estar entre 5mb // Verificar essa mensagem',
    },
  },
};
