const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class SpellSubschool extends Model {}

SpellSubschool.init({
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
    subschoolId: {
        type: DataTypes.INTEGER,
        require: true,
        references: {
            model: "subschools",
            id: "id"
        }
    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "spell_subschools"
})

module.exports = SpellSubschool;