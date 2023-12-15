'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Alumni extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Alumni.init({
    name: DataTypes.STRING,
    jurusan: DataTypes.STRING,
    universitas: DataTypes.STRING,
    imageURL: DataTypes.TEXT,
    updatedAt: 'updated_at',
    createdAt: 'created_at',
  }, {
    sequelize,
    modelName: 'Alumni',
  });
  return Alumni;
};