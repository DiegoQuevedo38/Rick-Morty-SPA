const {Favorite} = require("../db")

const deleteFav = async (req, res)=>{
    try{
        const {id} = req.params;
        const response = await Favorite.destroy({
            where: {id},
        });
        if (!response) {
            return res.send({message: "No se pudo eliminar"});
        } const favorites = await Favorite.findAll();
        return res.send(favorites);
    } catch (error){
        res.status(500).send(error.message)
    }
}
module.exports = deleteFav