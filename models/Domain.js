const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Domain extends Model {}

Domain.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        require: true,
        allowNull: false
    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "domains"
});

module.exports = Domain;