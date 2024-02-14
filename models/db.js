const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('test', 'root', '123pass', {
    host: 'localhost',
    dialect: 'mysql'
  });

  const Transaction = sequelize.define('users', {
    username: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    }
  });

const database = {
  connect: async function () {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  },

  insertOne: async function (doc, callback) {
    try {
      const result = await TransactionModel.create(doc);
      console.log('Added ' + JSON.stringify(result));
      return callback(true);
    } catch (error) {
      console.error('Error inserting one:', error);
      return callback(false);
    }
  },

  insertMany: async function (docs, callback) {
    try {
      const result = await TransactionModel.bulkCreate(docs);
      console.log('Added ' + JSON.stringify(result));
      return callback(true);
    } catch (error) {
      console.error('Error inserting many:', error);
      return callback(false);
    }
  },

  findOne: async function (query, projection, callback) {
    try {
      const result = await TransactionModel.findOne({ where: query, attributes: projection });
      return callback(result);
    } catch (error) {
      console.error('Error finding one:', error);
      return callback(false);
    }
  },

  findMany: async function (query, projection, callback) {
    try {
      const result = await TransactionModel.findAll({ where: query, attributes: projection });
      return callback(result);
    } catch (error) {
      console.error('Error finding many:', error);
      return callback(false);
    }
  },

  updateOne: async function (filter, update, callback) {
    try {
      const result = await TransactionModel.update(update, { where: filter });
      console.log('Document modified: ' + result[0]);
      return callback(true);
    } catch (error) {
      console.error('Error updating one:', error);
      return callback(false);
    }
  },

  updateMany: async function (filter, update, callback) {
    try {
      const result = await TransactionModel.update(update, { where: filter });
      console.log('Documents modified: ' + result[0]);
      return callback(true);
    } catch (error) {
      console.error('Error updating many:', error);
      return callback(false);
    }
  },

  deleteOne: async function (conditions, callback) {
    try {
      const result = await TransactionModel.destroy({ where: conditions });
      console.log('Document deleted: ' + result);
      return callback(true);
    } catch (error) {
      console.error('Error deleting one:', error);
      return callback(false);
    }
  },

  deleteMany: async function (conditions, callback) {
    try {
      const result = await TransactionModel.destroy({ where: conditions });
      console.log('Documents deleted: ' + result);
      return callback(true);
    } catch (error) {
      console.error('Error deleting many:', error);
      return callback(false);
    }
  }
};

module.exports = database;