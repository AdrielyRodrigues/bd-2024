const { type } = require('os');
const {DataTypes} = require('sequelize');
const database = require('../db');

const Rotulo = database.define(
    'Rotulo',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: type
        },
        nome: {
            type:DataTypes.STRING,
            allowNull: false
        }
    }


)