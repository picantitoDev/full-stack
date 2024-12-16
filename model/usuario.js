const { DataTypes } = require('sequelize');
const db = require('./conexion.js');

const Usuario = db.define('USUARIOS', {
        usr_ID: {
            primaryKey: true,
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        usr_Password: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
    },
    {
        freezeTableName: true,
        timestamps: false
    }
);

Usuario.sync();

module.exports = Usuario;