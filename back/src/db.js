require("dotenv").config();
const { Sequelize } = require("sequelize");
const {DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME, DB} = process.env;
const {UserModel, FavoriteModel} = require("./models/index")

const URL_CONECTION = `${DB}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`

const sequelize = new Sequelize(URL_CONECTION, {
    logging: console.log("Connected")
})

UserModel(sequelize);
FavoriteModel(sequelize)

const {User, Favorite} = sequelize.models
User.belongsToMany(Favorite, {through: "user_favorite"})
Favorite.belongsToMany(User, {through: "user_favorite"})

module.exports = {
    conn: sequelize,
    User,
    Favorite
}