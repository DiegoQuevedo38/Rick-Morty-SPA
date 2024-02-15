const {DataTypes} = require("sequelize")

const Favorite = (sequelize) => {
    sequelize.define("Favorite", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true, 
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM,
            values: ["Alive", "Dead", "Unknown"],
            allowNull: false,
        },
        species: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gender: {
            type: DataTypes.ENUM,
            values: ["Female", "Male", "Genderless", "Unknown"],
            allowNull: false
        },
        origin: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}


module.exports = Favorite;