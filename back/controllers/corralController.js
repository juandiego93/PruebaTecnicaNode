const { model } = require('../models/Corral')
const Corral = require('../models/Corral')

const corralController = {

    all(request, response) {
        Corral
            .find({})
            .exec((err, corrales) => { response.json(corrales) })
    },

    byId(request, response) {
        const IdCorral = request.params.id
        Corral
            .findById(IdCorral)
            .exec((err, corralById) => { response.json(corralById) })
    },

    create(request, response) {
        const requestBody = request.body
        const newCorral = new Corral(requestBody)
        newCorral.save((err, saved) => {
            Corral
                .findOne({ _id: saved._id })
                .exec((err, corral) => { response.json(corral) })
        })
    },

    update(request, response) {
        const idCorralUpdate = request.params.id
        let corral = request.body
        Corral.findOne({ _id: idCorralUpdate }, (err, data) => {
            data.name = corral.name
            data.desc = corral.desc
            data.cantidad = corral.cantidad
            data.state = corral.state
            data.save((err, updated) => { response.json(updated) })
        })
    },

    remove(request, response) {
        const idCorralRemove = request.params.id
        const obj = Corral.findOne({ _id: idCorralRemove })
        if (obj) {
            obj.deleteOne((err, removed) => { response.json(idCorralRemove) })
        }
    }

}

module.exports = corralController