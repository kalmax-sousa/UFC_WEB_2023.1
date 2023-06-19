var mongoose = require("mongoose")

var ProfessorSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    curso: {type: String, required: true},
    titulacao: {type: String, required: true},
    areaInteresse: {type: Object, required: true}
})

var professorModel = mongoose.model("professores", ProfessorSchema)

module.exports = professorModel