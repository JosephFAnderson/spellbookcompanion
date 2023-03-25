const { Model, DataTypes }= require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User');
const Class = require('./class');

class Character extends Model {}

Character.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        required: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        required: true,
        references: {
            model: "users",
            id: 'id'
        }
    },
    class_id: {
        type: DataTypes.INTEGER,
        required: true,
        references: {
            model: "classes",
            id: 'id'
        }
    }
},{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "characters"
})

module.exports = Character;