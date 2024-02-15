const { Favorite } = require("../db")

async function postFav (req, res) {
    try {
    const {
        id,
        name,
        origin,
        status,
        image, 
        species, 
        gender
    } = req.body;
    if(!name || !origin || !status || 
        !image || !species || ! gender)
        return res.status(401).send({message: "Faltan datos del personaje"});
    const response = await Favorite.findOrCreate({
        where: {name},
        defaults: { id, 
            origin: origin.name,
            status, image, 
            species, gender
        },
    });
    const favorites = await Favorite.findAll();
    res.send(favorites)
    } catch(err){
        res.send(err.message);
    }
}

module.exports = postFav