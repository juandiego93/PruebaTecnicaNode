const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    id: String,
    name: String,
    desc: String,
    cantidad: Number,
    danger: Number,
    idCorral: Number,
    state: Boolean
})

const Animal = mongoose.model('Animal', schema);

module.exports = Animal