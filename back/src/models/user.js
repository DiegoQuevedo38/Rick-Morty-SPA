const {DataTypes} = require("sequelize")

const User = (sequelize) =>{
    sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: {
                    msg: "Debe ser un email"
                }
            },
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(64),
            allowNull: false,
            validate: {
                is: /^[a-zA-Z0-9]/
            }
        }
    },
    {
        timestamps: false,
    }
    )
}

module.exports = User;