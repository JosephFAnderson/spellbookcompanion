const { Model, DataTypes }= require('sequelize');
const sequelize = require('../config/connection');

class Class extends Model {};

Class.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        require: true,        
    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "classes"
});

module.exports = Class;