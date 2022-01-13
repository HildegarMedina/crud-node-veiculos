const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CarSchema = new Schema({
    placa: String,
    chassi: String,
    renavam: String,
    modelo: String,
    marca: String,
    ano: Number
});

module.exports = mongoose.model("cars", CarSchema);