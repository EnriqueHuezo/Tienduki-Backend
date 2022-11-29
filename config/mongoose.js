const Mongoose = require("mongoose");
const debug = require("debug")("app:mongoose");

const dburi = process.env.CHAIN;

const connect = async () => {
  try {
    await Mongoose.connect(dburi);
    debug("Conexión a la base exitosa");
  } catch (error) {
    debug("Error en la conexión de la base");
    process.exit(1);
  }
}

module.exports = {
  connect
}