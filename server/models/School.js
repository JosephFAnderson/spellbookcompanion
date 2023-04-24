const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class School extends Model {}

School.init({
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
    modelName: "schools"
});

module.exports = School;