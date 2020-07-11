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
<<<<<<< HEAD
      raca:{
=======
      raca: {
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
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
<<<<<<< HEAD
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
=======
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
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
<<<<<<< HEAD
      descricao_comportamento: {
=======
      cor: {
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
            notEmpty: {
               msg: 'Este campo não pode ser nulo.'
            },
            len: {
<<<<<<< HEAD
               args: [1, 255],
               msg: 'Tamanho de caracteres excedido'
=======
               args: [1, 30],
               msg: 'Este campo deve conter de 1 a 30 caracteres'
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
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
<<<<<<< HEAD
         allowNUll: false,
=======
         allowNull: false,
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
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
<<<<<<< HEAD
=======
      cuidados_veterinarios: {
         type: DataTypes.BOOLEAN,
         allowNull: true,
      },
      vermifugado: {
         type: DataTypes.BOOLEAN,
         allowNull: true,
      },
      castrado: {
         type: DataTypes.BOOLEAN,
         allowNull: true,
      },
      vacinado: {
         type: DataTypes.BOOLEAN,
         allowNull: true,
      },
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
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
<<<<<<< HEAD
         allowNull: false,
=======
         allowNull: true,
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
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
<<<<<<< HEAD
=======
      visualizacoes: {
         type: DataTypes.INTEGER,
         allowNull: true,
      },
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
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