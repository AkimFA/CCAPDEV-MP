const { Sequelize, DataTypes } = require('sequelize');

// Initialize Sequelize with MySQL connection
const sequelize = new Sequelize('test4', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql'
});

// Define Transaction model
const Transaction = sequelize.define('Transaction', {
  name: {
    type: DataTypes.STRING
  },
  refno: {
    type: DataTypes.INTEGER
  },
  amount: {
    type: DataTypes.FLOAT
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