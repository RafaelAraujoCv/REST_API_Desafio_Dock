'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transacoes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      //Transacoes.belongsTo(models.Contas)
    }
  };
  Transacoes.init({
    valor: DataTypes.FLOAT,
    dataTransacao: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Transacoes',
  });
  return Transacoes;
};