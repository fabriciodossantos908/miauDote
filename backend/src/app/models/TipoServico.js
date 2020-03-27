module.exports = (sequelize, DataTypes) => {
  const TipoServico = sequelize.define('TipoServico', {
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
    }
  },
    {
      tableName: 'tbl_tipo_servicos'
    });

    TipoServico.associate = function(models){
      TipoServico.hasMany(models.Empresa, {
        foreignKey: 'id_tipo_servico'
      })
    };

  return TipoServico;
};