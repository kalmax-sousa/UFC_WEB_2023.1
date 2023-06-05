const ProfessorModel = require('../models/professor.models')

let professores = [
    {id: 0, nome: "Vito Corleone", curso: "SI", titulacao: "GRAD", ai: {es: true, al: true, ds: false, mc: true}},
    {id: 1, nome: "Michael Corleone", curso: "DD", titulacao: "DOUT", ai: {es: true, al: true, ds: false, mc: false}},
    {id: 2, nome: "Kay Adams", curso: "CC", titulacao: "MEST", ai: {es: false, al: true, ds: true, mc: false} },
    {id: 3, nome: "Luca Brasil", curso: "SI", titulacao: "GRAD", ai: {es: true, al: true, ds: false, mc: true}},
    {id: 4, nome: "Peter Clemenza", curso: "SI", titulacao: "DOUT", ai: {es: true, al: true, ds: false, mc: true}},
]

let id = 5

class ProfessorServices {
    static getAll() {
        return professores
    }

    static register(data){
        let professor = new ProfessorModel(id++, data.nome, data.curso, data.titulacao, data.areaInteresse)

        professores.push(professor)
        return professor
    }

    static update(id, data){
        for (const professor of professores) {
            if(professor.id == id) {
                professor.nome = data.nome
                professor.curso = data.curso
                professor.titulacao = data.titulacao
                professor.areaInteresse = data.areaInteresse

                return professor
            }
        }

        return null
    }

    static delete(id){
        const professoresAtualizados = professores.filter(professor => professor.id != id)    

        if(professores.length == professoresAtualizados.length){
            return false
        }

        professores = professoresAtualizados
        return true
    }

    static retrieve(id){
        const professor = professores.find(professor => professor.id == id)

        return professor ?? {};
    }

}

module.exports = ProfessorServices