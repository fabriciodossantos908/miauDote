module.exports = (sequelize, DataTypes) => {
  const Empresa = sequelize.define('Empresa', {
    nome_representante: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Este campo não pode ser nulo.'
        },
        len: {
          args: [5, 100],
          msg: 'Este campo deve conter de 5 a 100 caracteres'
        },
      }
    },
    email_representante: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          msg: 'Insira um email válido.'
        },
        len: [5, 150]
      },
    },
    celular_representante: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Este campo não pode ser nulo'
        },
        len: {
          args: [11, 11],
          msg: 'Digite um número de celular válido.'
        },
        isNumeric: {
          args: true,
          msg: 'Digite apenas números'
        }
      }
    },
    razao_social: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Este campo não pode ser nulo.'
        },
        len: {
          args: [5, 100],
          msg: 'Este campo deve conter de 5 a 50 caracteres'
        },
      }
    },
    nome_empresa: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Este campo não pode ser nulo.'
        },
        len: {
          args: [5, 100],
          msg: 'Este campo deve conter de 5 a 100 caracteres'
        },
      }
    },
    cnpj: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Este campo não pode ser nulo.'
        },
        isNumeric: {
          args: true,
          msg: 'Este campo deve conter apenas números.'
        },
        len: {
          args: [14, 14],
          msg: 'Quantidade de dígitos incorreta.'
        }
      }
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Este campo não pode ser nulo.'
        }
      }
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Este campo não pode ser nulo'
        },
        len: {
          args: [10, 11],
          msg: 'Digite um número de telefone/celular válido.'
        },
        isNumeric: {
          args: true,
          msg: 'Digite apenas números'
        }
      }
    },
    cep: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Este campo não pode ser nulo.'
        },
        isNumeric: {
          msg: 'Este campo deve conter apenas números.'
        },
        len: {
          args: [8, 8],
          msg: 'Quantidade de dígitos incorreta'
        }
      }
    },
    cidade: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Este campo não pode ser nulo.'
        },
        len: {
          args: [2, 100],
          msg: 'Este campo deve conter de 2 a 100 caracteres'
        }
      }
    },
    bairro: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Este campo não pode ser nulo.'
        },
        len: {
          args: [2, 100],
          msg: 'Este campo deve conter de 2 a 100 caracteres'
        }
      }
    },
    logradouro: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Este campo não pode ser nulo.'
        },
        len: {
          args: [3, 100],
          msg: 'Este campo deve conter de 3 a 100 caracteres'
        }
      }
    },
    numero: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Este campo não pode ser nulo'
        }
      }
    },
    complemento: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Este campo não pode ser nulo'
        },
        len: {
          args: [3, 15],
          msg: 'Este campo deve conter de 3 a 15 caracteres.'
        }
      },
      uf: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Este campo não pode ser nulo.'
          },
          len: {
            args: [2, 2],
            msg: 'UF inválida'
          }
        }
      },
      tipo_servico: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Este campo não pode ser nulo.'
          },
          len: {
            args: [5, 100],
            msg: 'Este campo deve conter de 5 a 100 caracteres'
          },
        }
      }

    }



  })

  return Empresa;
}