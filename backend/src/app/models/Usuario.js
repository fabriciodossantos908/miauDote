module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    nome: {
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
        is: {
          args: /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
          msg: 'Insira apenas letras.'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          msg: 'Insira um email válido.'
        },
        len: [5, 150]
      },
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
    data_nascimento: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Este campo não pode ser nulo.'
        }
      }
    },
    sexo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Este campo não pode ser nulo.'
        },
        len: {
          args: [1, 1],
          msg: 'Sexo inválido.'
        }
      }
    },
    cpf: {
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
          args: [11, 11],
          msg: 'Quantidade de dígitos incorreta.'
        }

      }
    },
    celular: {
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
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Este campo não pode ser nulo.'
        },
        len: {
          args: [1, 6],
          msg: 'Este campo deve conter de 1 a 6 caracteres'
        }
      }
    },
    complemento:{
      type: DataTypes.STRING,
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
    pets_favoritos:{
      type: DataTypes.STRING,
      allowNull: true
    },
    url_foto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    permissions: {
      type: DataTypes.STRING
    },
    email_confirmado: {
      type: DataTypes.BOOLEAN
    },
  },
    {
      tableName: 'tbl_usuarios'
    });

  Usuario.associate = function (models) {
    Usuario.hasMany(models.Pet, {
      foreignKey: 'id_usuario'
    })
  };

  Usuario.associate = function (models) {
    Usuario.hasMany(models.PetPerdido, {
      foreignKey: 'id_usuario'
    })
  };

  return Usuario;
};