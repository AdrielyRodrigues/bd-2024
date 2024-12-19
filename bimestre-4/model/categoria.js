const { DataTypes } = require('sequelize');
const database = require('../db');

const Categoria = database.define(
    'Categoria',
    {
        id: {
            type: DateTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }
);

module.exports = Categoria;
