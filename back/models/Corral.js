const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    id: String,
    name: String,
    desc: String,
    cantidad: Number,
    state: Boolean
})

const Corral = mongoose.model('Corral', schema);

module.exports = Corral