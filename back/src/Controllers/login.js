const { User } = require("../db")

async function login (req, res) {
    try {
    const { email, password } = req.query;
    if (!email || !password) return res.status(400).send("Faltan datos"); 
    const user = await User.findOne({
        where: {
            email,
        }
    });
    if (!user) return res.status(404)
    .send({message: "Usuario no encontrado"});
    if (user.password !== password) return res.status(403)
    .send({message: "Contraseña incorrecta"});
    res.send({
        message: "usuario",
        access: true
    });
    } catch (err){
        res.status(500).send(err.message)
    }
}

module.exports = login