'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserScore extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     *      * @static
     * @memberof UserScore
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { foreignKey: 'user_id' });
    }
  }
  UserScore.init({
    user_id: DataTypes.BIGINT,
    score: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'UserScore',
    underscored: true,
    paranoid: true,
    tableName: 'user_score',
    updatedAt: 'updated_at',
    createdAt: 'created_at',
    deletedAt: 'deleted_at',
  });
  return UserScore;
};