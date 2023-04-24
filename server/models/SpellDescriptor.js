const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class SpellDescriptor extends Model {}

SpellDescriptor.init({
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
    descriptorId: {
        type: DataTypes.INTEGER,
        require: true,
        references: {
            model: "descriptors",
            id: "id"
        }
    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "spell_descriptors"
})

module.exports = SpellDescriptor;