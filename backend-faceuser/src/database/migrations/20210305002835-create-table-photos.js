'use strict';
const {DataTypes} = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.createTable('photos', { 
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        file_name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        original_name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        mimetype: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        created_at: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        updated_at: {
          type: DataTypes.DATE,
          allowNull: false,
        },
      });
     
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('photos');
  }
};
