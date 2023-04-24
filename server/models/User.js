const { Model, DataTypes }= require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {};

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
        validate: {
            min: 8
        }
    }
}, {
    hooks:{
        beforeCreate: async (user, options) => {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password, salt);
        },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "users"
})

User.prototype.validPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

module.exports = User;
