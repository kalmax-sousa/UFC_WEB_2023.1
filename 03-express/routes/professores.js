var express = require('express');
var router = express.Router();
var ProfessorServices = require('../services/professor.services');
var ProfessorServiceMongo = require('../services/professor.services.mongo');

/* GET users listing. */
router.get('/', (req, res, next) => {
    ProfessorServiceMongo.getAll(req, res)
})

router.post('/register', (req, res, next) => {
    ProfessorServiceMongo.register(req, res)
})

router.put('/update/:id', (req, res, next) => {
    ProfessorServiceMongo.update(req, res)
})

router.delete('/delete/:id', (req, res, next) => {
    ProfessorServiceMongo.delete(req, res)
})

router.get('/retrieve/:id', (req, res, next) => {
    ProfessorServiceMongo.retrieve(req, res)
})
module.exports = router;