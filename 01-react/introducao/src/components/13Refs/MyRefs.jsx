import { useRef, useState } from "react";

let globalX = 0;

const MyRefs = () => {
    let x = 0;
    const [stateX, setStateX] = useState(0);
    const [flag, setFlag] = useState(false);
    const refX = useRef(0);

    return(
        <>
        {console.log("RENDER")}
            <h1>x: {x}</h1>
            <h1>stateX: {stateX}</h1>
            <h1>globalX: {globalX}</h1>
            <h1>refX: {refX.current}</h1>
            <button 
                onClick={() => {
                    x += 1;
                    console.log("x: " + x);
                }}
            >
                x+1
            </button>
            <button 
                onClick={() => {
                    setStateX(prev => prev+1)
                    console.log("stateX: " + stateX)
                }}
            >
                stateX+1
            </button>
            <button 
                onClick={() => {
                    globalX += 1;
                    setFlag(prev => prev+1);
                    console.log("globalX: " + globalX);
                }}
            >
                globalX+1
            </button>
            <button 
                onClick={() => {
                    refX.current += 1;
                    console.log("refX: " + refX.current)
                }}
            >
                refX+1
            </button>
        </>
    );
}

export default MyRefs;