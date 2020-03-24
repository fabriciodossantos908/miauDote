module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    nome:{
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        len: [5, 100],
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        len: [5, 150],
        isEmail: {
          msg: 'Email is invalid'
        }
      },
      unique: 'uniqueUsuario'
      // unique: {
      //   args: true,
      //   msg: 'Email address already in use!'
      // }
    },
    senha: DataTypes.STRING,
    data_nascimento: DataTypes.DATEONLY,
    sexo: DataTypes.STRING,
    cpf: DataTypes.STRING,
    celular: DataTypes.STRING,
    cep: DataTypes.STRING,
    cidade: DataTypes.STRING,
    logradouro: DataTypes.STRING,
    uf: DataTypes.STRING,
    foto: DataTypes.STRING
  },
  {
    tableName: 'tbl_usuarios'
  });

  return Usuario;
};