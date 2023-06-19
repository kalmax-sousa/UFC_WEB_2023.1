var mongoose = require("mongoose")

var AlunoSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    curso: {type: String, required: true},
    ira: {type: Number, required: true},
})

var alunoModel = mongoose.model("alunos", AlunoSchema)

module.exports = alunoModel