const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Spell extends Model {}

Spell.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    components: {
        type: DataTypes.STRING,
        require: true,
        allowNull: false
    },
    castingTime: {
        type: DataTypes.STRING,
        require: true,
        allowNull: false
    },
    range: {
        type: DataTypes.STRING,
        require: true,
        allowNull: false
    },
    area: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    effect: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    duration: {
        type: DataTypes.STRING,
        require: true,
        allowNull: false
    },
    savingThrow: {
        type: DataTypes.STRING,
        require: true,
        allowNull: false
    },
    spellResistance: {
        type: DataTypes.STRING,
        require: true,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        require: true,
        allowNull: false
    },
    materials: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null
    },
    sourcebook: {
        type: DataTypes.STRING,
        require: true,
        allowNull: false
    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "spells"
});

module.exports = Spell;