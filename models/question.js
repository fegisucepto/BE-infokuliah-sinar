'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Question.init(
    {
      question: DataTypes.STRING,
      choices: DataTypes.STRING,
      correctAnswer: DataTypes.STRING,
      // startTime: DataTypes.DATE,
      // duration: DataTypes.INTEGER,
      updatedAt: 'updated_at',
      createdAt: 'created_at',
    },
    {
      sequelize,
      modelName: 'Question',
    }
  );
  return Question;
};
