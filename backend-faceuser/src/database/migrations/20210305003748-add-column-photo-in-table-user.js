'use strict';
const { DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.addColumn('users', 'id_photo',
      {
        type: DataTypes.INTEGER,
        references: { model: 'photos', key: 'id' },
        allowNull: true,
      });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('users', 'id_photo');
  },
};
