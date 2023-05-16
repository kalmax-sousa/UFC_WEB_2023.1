import { useEffect, useState } from "react";

const Questao01X = () => {

    const [medias, setMedias] = useState([])
    const [loading, setLoading] = useState(true)

    const correntistas = [
        {nome: "Sicrano", aplic: {pp: 856.4, rf: 50.4, cc:34.0}},
        {nome: "Beltrano", aplic: {pp: 0.0, rf: 700.67, cc:800}},
        {nome: "Fulano", aplic: {pp: 5000.00, rf: 0.0, cc:500}},
    ]

    useEffect(() => {
        if(medias != [])
            setLoading(false)

    }, [medias])

    const buscarMedias = (array) => {
        setMedias(array)
    }

    const renderizarCorrentistas = () => {
        if(medias != []){
            const index = medias.findIndex(e => Math.max(...medias) === e)
            return(
                <h2>A maior média é de: <span className="font-bold">{correntistas[index].nome}</span></h2>
        )}
    }

    return(
        <div className="border-b-2 mb-6 pb-10">
            <h3 className="mb-6 text-xl font-bold">Questão 03</h3>
            <Questao01Y correntistas={correntistas} buscarMedias={buscarMedias}/>
            {loading ? "" : renderizarCorrentistas()}
        </div>
    )
}

const Questao01Y = ({correntistas, buscarMedias}) => {
    useEffect(() => {
        const arrayMedias = calcularMediaCorrentistas();
        buscarMedias(arrayMedias);
    }, [])

    const calcularMediaCorrentistas = () => {
        const medias = []
        correntistas.forEach(element => {
            const media = (element.aplic.pp + element.aplic.rf + element.aplic.cc)/3
            medias.push(media);
        })

        return medias
    }

    return(
        <div>
        </div>
    )
}

export default Questao01X