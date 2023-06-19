const ProfessorModel = require('../models/professor.models.mongo')

class ProfessorService{
    static getAll(req, res) {
        ProfessorModel.find()
            .then(professores => res.status(200).json(professores)) 
            .catch(err => res.status(500).json(err))
    }

    static register(req, res){
        ProfessorModel.create(req.body)
            .then(professor => res.status(201).json(professor))
    }

    static update(req, res){
        ProfessorModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
            .then(professor => res.status(200).json(professor))
    }

    static delete(req, res){
        ProfessorModel.findByIdAndRemove(req.params.id)
            .then(professor => res.status(200).json(professor))
    }

    static retrieve(req, res){
        ProfessorModel.findById(req.params.id)
            .then(professor => res.status(200).json(professor))
            .catch(err => res.status(500).json(err))
    }
}

module.exports = ProfessorService