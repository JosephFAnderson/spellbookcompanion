const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Descriptor extends Model {}

Descriptor.init({
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
    modelName: "descriptors"
});

module.exports = Descriptor;