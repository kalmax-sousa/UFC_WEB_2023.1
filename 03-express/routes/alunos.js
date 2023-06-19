var express = require('express');
var router = express.Router();
var AlunoService = require('../services/aluno.services.mongo');

/* GET users listing. */
router.get('/', (req, res, next) => {
    AlunoService.getAll(req, res)
})

router.post('/register', (req, res, next) => {
    AlunoService.register(req, res)
})

router.put('/update/:id', (req, res, next) => {
    AlunoService.update(req, res)
})

router.delete('/delete/:id', (req, res, next) => {
    AlunoService.delete(req, res)
})

router.get('/retrieve/:id', (req, res, next) => {
    AlunoService.retrieve(req, res)
})
module.exports = router;