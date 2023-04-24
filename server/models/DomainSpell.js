const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class DomainSpell extends Model {}

DomainSpell.init({
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
    domainId: {
        type: DataTypes.INTEGER,
        require: true,
        references: {
            model: "domains",
            id: "id"
        }
    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "domain_spells"
})

module.exports = DomainSpell;