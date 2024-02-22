import { Sequelize } from 'sequelize';

// New Instance
const sequelize = new Sequelize(
 'DATABASE NAME', 
 'USERNAME', 
 'PASSWORD', {
  host: '',
  dialect: ''
 }
);

export default sequelize;