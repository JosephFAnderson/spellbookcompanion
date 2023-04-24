const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class SpellSchool extends Model {}

SpellSchool.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true    
    },
    spellId: {
        type: DataTypes.INTEGER,
        require: true,
        references: {
            model: "spells",
            id: "id"
        }
    },
    schoolId: {
        type: DataTypes.INTEGER,
        require: true,
        references: {
            model: "schools",
            id: "id"
        }
    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "spell_schools"
})

module.exports = SpellSchool;