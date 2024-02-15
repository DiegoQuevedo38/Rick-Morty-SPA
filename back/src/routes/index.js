const getCharById = require("../Controllers/getCharById");
const deleteFav = require("../Controllers/deleteFav");
const postUser = require("../Controllers/postUser")
const postFav = require("../Controllers/postFav");
const login = require("../Controllers/login");
const router = require("express").Router();


router.get(`/character/:id`, getCharById)
router.post("/login", postUser)
router.get("/login", login)
router.post("/fav", postFav)
router.delete("/fav/:id", deleteFav)


module.exports = router

