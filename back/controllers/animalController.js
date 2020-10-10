const { model } = require('../models/Animal')
const Animal = require('../models/Animal')

const animalController = {

    all(request, response) {
        Animal
            .find({})
            .exec((err, animales) => { response.json(animales) })
    },

    byId(request, response) {
        const IdAnimal = request.params.id
        Animal
            .find({ idCorral: IdAnimal })
            .exec((err, animalById) => { response.json(animalById) })
    },

    create(request, response) {
        const requestBody = request.body
        const newAnimal = new Animal(requestBody) 
        newAnimal.save((err, saved) => {
            Animal
                .findOne({ _id: saved._id })
                .exec((err, animal) => { response.status(404).json(animal) })
        })
    },

    update(request, response) {
        const idAnimalUpdate = request.params.id
        let animal = request.body
        Animal.findOne({ _id: idAnimalUpdate }, (err, data) => {
            data.name = animal.name
            data.desc = animal.desc
            data.cantidad = animal.cantidad
            data.state = animal.state
            data.save((err, updated) => { response.json(updated) })
        })
    },

    remove(request, response) {
        const idAnimalRemove = request.params.id
        Animal.findOne({ _id: idAnimalRemove }).remove((err, removed) => { response.json(idAnimalRemove) })
    }

}

module.exports = animalController