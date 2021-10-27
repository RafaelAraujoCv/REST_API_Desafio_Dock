'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Contas.hasMany(models.Transacoes, {
        foreignKey: 'idConta'
      }) 
      //Contas.belongsTo(models.Transacoes)
    }
  };
  Contas.init({
    saldo: DataTypes.FLOAT,
    limiteSaqueDiario: DataTypes.FLOAT,
    flagAtivo: DataTypes.BOOLEAN,
    tipoConta: DataTypes.INTEGER,
    dataCriacao: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Contas',
  });
  return Contas;
};