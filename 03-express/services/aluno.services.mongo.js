const  AlunoModel = require('../models/aluno.models.mongo')

class AlunoService{
    static getAll(req, res) {
        AlunoModel.find()
            .then(alunos => res.status(200).json(alunos)) 
            .catch(err => res.status(500).json(err))
    }

    static register(req, res){
        AlunoModel.create(req.body)
            .then(aluno => res.status(201).json(aluno))
    }

    static update(req, res){
        AlunoModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
            .then(aluno => res.status(200).json(aluno))
    }

    static delete(req, res){
        AlunoModel.findByIdAndRemove(req.params.id)
            .then(aluno => res.status(200).json(aluno))
    }

    static retrieve(req, res){
        AlunoModel.findById(req.params.id)
            .then(aluno => res.status(200).json(aluno))
            .catch(err => res.status(500).json(err))
    }
}

module.exports = AlunoService