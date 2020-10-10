const express = require('express')
const router = express.Router()

//import controllers
const corralController = require('../controllers/corralController')
const animalController = require('../controllers/animalController')

router.get('/controllers', (request, response) => {
    console.log(request);
    response.send('routes controllers')
})

router.get('/getAnimals', animalController.all)
router.post('/getAllAnimalsFromACorral', animalController.byId)
router.post('/createAnimal', animalController.create)
router.post('/updateAnimal', animalController.update)
router.post('/removeAnimal', animalController.remove)

router.get('/getAllCorrales', corralController.all)
router.post('/getCorralById', corralController.byId)
router.post('/createCorral', corralController.create)
router.post('/updateCorral', corralController.update)
router.get('/removeCorral/:id', corralController.remove)

module.exports = router