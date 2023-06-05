var express = require('express');
var router = express.Router();
var ProfessorServices = require('../services/professor.services');

/* GET users listing. */
router.get('/', (req, res, next) => {
    res.json(ProfessorServices.getAll());
})

router.post('/register', (req, res, next) => {
    const professor = ProfessorServices.register(req.body)
    res.json(professor);
})

router.put('/update/:id', (req, res, next) => {
    const professor = ProfessorServices.update(req.params.id, req.body)
    res.json(professor);
})

router.delete('/delete/:id', (req, res, next) => {
    const ok = ProfessorServices.delete(req.params.id)

    if(ok)
        return res.json({"success": true})

    return res.json({"success": false})
})

router.get('/retrieve/:id', (req, res, next) => {
    const professor = ProfessorServices.retrieve(req.params.id)
    res.json(professor);
})
module.exports = router;