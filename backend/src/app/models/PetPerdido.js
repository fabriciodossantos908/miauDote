module.exports = (sequelize, DataTypes) => {
   const PetPerdido = sequelize.define('PetPerdido', {
      nome: {
         allowNull: false,
         type: DataTypes.STRING,
         validate: {
            notEmpty: {
               msg: 'Este campo não pode ser nulo'
            },
            len: {
               args: [2, 100],
               msg: 'Digite um nome válido'
            },
            is: {
               args: /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
               msg: 'Insira apenas letras.'
            }
         }
      },
      especie: {
         allowNull: false,
         type: DataTypes.STRING,
         validate: {
            notEmpty: {
               msg: 'Este campo não pode ser nulo.'
            },
            len: {
               args: [1, 1],
               msg: 'Este campo deve conter apenas um caracter.'
            },

         }
      },
      raca: {
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
         allowNull: false,
         type: DataTypes.STRING,
         validate: {
            notEmpty: {
               msg: 'Este campo não pode ser nulo'
            },
            len: {
               args: [1, 1],
               msg: 'Insira um sexo válido'
            }
         }
      },
      porte: {
         allowNull: false,
         type: DataTypes.STRING,
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
      }, uf: {
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
      }, cidade: {
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
      url_fotos: {
         allowNull: true,
         type: DataTypes.STRING,
      },
      latitude: {
         allowNull: false,
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
         allowNull: false,
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
      descricao: {
         allowNull: false,
         type: DataTypes.STRING,
         validate: {
            notEmpty: {
               msg: "Este campo não pode ser nulo."
            },
            len: {
               args: [10, 255],
               msg: 'Este campo deve conter entre 10 e 255 caracteres.'
            }
         }
      },
      encontrado: {
         allowNull: true,
         type: DataTypes.BOOLEAN
      }
   },
      {
         tableName: 'tbl_pets_perdidos'
      });

   PetPerdido.associate = function (models) {
      PetPerdido.belongsTo(models.Usuario, {
         foreignKey: 'id_usuario',
         as: 'dono'
      });
   };

   return PetPerdido;
}