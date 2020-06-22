module.exports = (sequelize, DataTypes) => {
   const Pet = sequelize.define('Pet', {
      nome: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
            notEmpty: {
               msg: 'Este campo não pode ser nulo.'
            },
            len: {
               args: [2, 100],
               msg: 'Este campo deve conter de 5 a 100 caracteres'
            },
            is: {
               args: /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
               msg: 'Insira apenas letras.'
            }
         }
      },
      especie: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
            notEmpty: {
               msg: 'Este campo não pode ser nulo.'
            },
            len: {
               args: [1, 1],
               msg: 'Este campo deve conter apenas 1 caracter.'
            }
         }
      },
      raca:{
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
            notEmpty: {
               msg: 'Este campo não pode ser nulo.'
            },
            len: {
               args: [1, 30],
               msg: 'Este campo deve conter de 1 a 30 caracteres'
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
      situacao: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
            notEmpty: {
               msg: 'Este campo não pode ser nulo.'
            },
            len: {
               args: [1, 255],
               msg: 'Tamanho de caracteres excedido'
            }
         }
      },
      descricao: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
            notEmpty: {
               msg: 'Este campo não pode ser nulo.'
            },
            len: {
               args: [1, 255],
               msg: 'Tamanho de caracteres excedido'
            }
         }
      },
      descricao_comportamento: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
            notEmpty: {
               msg: 'Este campo não pode ser nulo.'
            },
            len: {
               args: [1, 255],
               msg: 'Tamanho de caracteres excedido'
            }
         }
      },
      porte: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
            notEmpty: {
               msg: 'Este campo não pode ser nulo.'
            },
            len: {
               args: [1, 1],
               msg: 'Este campo deve conter apenas um caracter.'
            }
         }
      },
      idade: {
         type: DataTypes.STRING,
         allowNUll: false,
         validate: {
            notEmpty: {
               msg: 'Este campo não pode ser nulo.'
            },
            len: {
               args: [3, 15],
               msg: 'Tamanho de caracteres excedido'
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
      latitude: {
         type: DataTypes.STRING,
         validate: {
            notEmpty: {
               msg: 'Este campo não pode ser nulo.'
            },
            len: {
               args: [3, 20],
               msg: 'Tamanho de caracteres excedido'
            }
         }
      },
      longitude: {
         type: DataTypes.STRING,
         validate: {
            notEmpty: {
               msg: 'Este campo não pode ser nulo.'
            },
            len: {
               args: [3, 20],
               msg: 'Tamanho de caracteres excedido'
            }
         }
      },
      url_foto: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
            notEmpty: {
               msg: 'Este campo não pode ser nulo.'
            },
            len: {
               args: [4, 255],
               msg: 'tamanho da URL inválido'
            },
            isUrl: {
               args: true,
               msg: 'URL inválida'
            }
         }
      },
      id_usuario: {
         type: DataTypes.INTEGER,
         allowNull: false,
         validate: {
            notEmpty: {
               msg: 'Este campo não pode ser nulo.'
            }
         }
      }
   }, {
      tableName: 'tbl_pets'
   });

   Pet.associate = function (models) {
      Pet.belongsTo(models.Usuario, {
         foreignKey: 'id_usuario',
         as: 'doador'
      });
   };

   return Pet;
}