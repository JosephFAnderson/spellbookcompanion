const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ClassSpell extends Model {}

ClassSpell.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true    
    }, 
    level: {
        type: DataTypes.INTEGER,
        require: true,
        allowNull: false
    },
    spellId: {
        type: DataTypes.INTEGER,
        require: true,
        references: {
            model: "spells",
            id: "id"
        }
    },
    classId: {
        type: DataTypes.INTEGER,
        require: true,
        references: {
            model: "classes",
            id: "id"
        }
    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "class_spells"
})

module.exports = ClassSpell;