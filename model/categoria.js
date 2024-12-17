const { DataTypes } = require('sequelize');
const db = require('./conexion.js');
const Usuario = require('./usuario.js');

const Categoria = db.define('CATEGORIAS', {
    cat_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    cat_Name: {
        type: DataTypes.STRING(20),
        allowNull: false,
        primaryKey: true
    },
    cat_IDUsr: {
        type: DataTypes.STRING(20),
        allowNull: false,
        references: {
            model: Usuario,
            key: 'usr_ID'
        }
    }
    },
    {
        freezeTableName: true,
        timestamps: false
    }

);

Categoria.sync();

Usuario.hasMany(Categoria, { foreignKey: 'cat_IDUsr' });
Categoria.belongsTo(Usuario, { foreignKey: 'cat_IDUsr' });

module.exports = Categoria;