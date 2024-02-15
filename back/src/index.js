require("dotenv").config();

const { PORT, HOST } = process.env;
const server = require("./app");
const { conn } = require("./db");

conn
  .sync({ force: true })
  .then(() => {
    server.listen(PORT, HOST, function () {
      console.log(`Server listening on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });