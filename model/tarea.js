const db = require('./conexion.js');
const { DataTypes, DATE } = require('sequelize');
const Categoria = require('./categoria.js');

const Tarea = db.define('TAREAS', {
        tr_ID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        tr_Titulo: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        tr_Completado: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        tr_FechaInicio: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        tr_FechaFin: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        tr_CatID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Categoria,
                key: 'cat_ID'
            }
        }
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

Categoria.hasMany(Tarea, { foreignKey: 'tr_CatID' });
Tarea.belongsTo(Categoria, { foreignKey: 'tr_CatID' });

module.exports = Tarea;