const { Sequelize, DataTypes } = require('sequelize');

// Initialize Sequelize with MySQL connection
const sequelize = new Sequelize('test', 'root', '123pass', {
  host: 'localhost',
  dialect: 'mysql'
});

// Define Transaction model
const Transaction = sequelize.define('users', {
  username: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  }
});

// Sync the model with the database
(async () => {
  try {
    await sequelize.sync();
    console.log('Database synchronized');
  } catch (error) {
    console.error('Error synchronizing database:', error);
  }
})();

module.exports = Transaction;