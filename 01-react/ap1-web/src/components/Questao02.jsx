import { useState } from "react";
import { Icon360 } from '@tabler/icons-react';

const Questao02 = () => {
    const [front, setFront] = useState(true);

    return(
        <div>
            <h3 className="text-xl font-bold">Questão 02</h3>
            
            <div className="flex justify-center items-center mb-4 border-b-2">
                <img
                    className="h-80 w-80" 
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${front ? '' : 'back/'}25.png`} 
                    alt="Pikachu" 
                />
    
                <button 
                    onClick={() => setFront(prev => !prev)}
                    className="bg-zinc-500 p-3 rounded flex gap-2 w-24 h-12"
                >
                    <Icon360 />
                    Girar
                </button>
            </div>
        </div>

    )
}

export default Questao02;