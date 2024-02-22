import { DataTypes, Model } from 'sequelize';
import sequelize from '../../databases/connector/conSequelize.js';

class bcaToken extends Model {}

bcaToken.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    token: {
      type: new DataTypes.STRING(225),
      allowNull: false,
    },
    request_response: {
      type: new DataTypes.STRING(225),
      allowNull: false,
    },
    createdAt: {
      field         : 'created_at',
      type          : DataTypes.DATE,
      defaultValue  : sequelize.NOW,
      allowNull     : false
    },
    updatedAt: {
      field         : 'updated_at',
      type          : DataTypes.DATE,
      defaultValue  : sequelize.NOW,
      allowNull     : false
    },
  },
  {
    sequelize,
    tableName: 'bca_token',
    modelName: 'bcaToken',
  }
  
);

export default bcaToken;

