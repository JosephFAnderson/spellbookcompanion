const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class CharacterSpell extends Model {}

CharacterSpell.init({
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
    characterId: {
        type: DataTypes.INTEGER,
        require: true,
        references: {
            model: "characters",
            id: "id"
        }
    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "character_spells"
})

module.exports = CharacterSpell;