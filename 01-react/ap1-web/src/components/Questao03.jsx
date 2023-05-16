import { useEffect, useState } from "react"
import axios from 'axios'

const Questao03 = () => {
    const [paises, setPaises] = useState([]);
    useEffect(() => {
        const buscarPaises = async () => {
            try{
                const obj = await axios.get("https://restcountries.com/v3.1/all?fields=capital,population")
                setPaises(obj.data);
            } catch(error) {
                alert(error)
            }
        }

        buscarPaises();
        
        
    }, [])

    const mediaPopulacao = () => {
        let media = 0;

        paises.forEach(e => {
            media += e.population
        })

        return media /= paises.length
    }

    const renderizarPaises = () => {
        const media = mediaPopulacao()

        const paisesAcima = paises.map(e => {
            if(e.population > media)
                return e
        })

        return paises.map((pais, index) => {
            if(pais.population > media)
                return(
                    <div className="border-2 border-zinc-200/20 border-collapse flex gap-6 justify-center" key={index}>
                        {pais.capital.map((capital, index) => (
                            <h3 key={index}>{capital}</h3>
                        ))}
                    </div>)

            }
        )
    }


    return(
        <div>
            <div>
                <h3 className="mb-6 text-xl font-bold">Questão 03</h3>
            </div>
            <div className="grid grid-cols-3">
                {renderizarPaises()}
            </div>
        </div>
    )
}

export default Questao03