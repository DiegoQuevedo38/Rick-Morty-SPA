require("dotenv").config();
const axios = require("axios")

async function getCharById (req, res){
  try{
    const { id } = req.params;
    const urlCharacterId = `${URL}/${id}?${QUERY_KEY}=${API_KEY}`
        const result = await axios(urlCharacterId(id));
        const character = result.data;
        if (character.name) {
            const personaje = {
              id: id,
              name: character.name,
              status: character.status,
              gender: character.gender,
              species: character.species,
              origin: character.origin,
              location: character.location,
              image: character.image,
            };
            res.status(200).json(personaje);
          } else {
            res.status(404).send("Character not found");
          }
        } catch (err) {
          res.status(500).send(err);
        }
}


module.exports = getCharById;