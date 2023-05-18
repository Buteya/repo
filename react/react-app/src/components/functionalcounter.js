import {useState} from 'react';

const FunctionalCounter = ()=>{
    const [counter, setCounter] = useState(0);
    const increment = ()=>{
        setCounter(previous => previous + 1);
    }
    const incrementFive = ()=>{
        for(let i=0;i<5;i++){
            setCounter(previous=>previous +1);
        }
    }
    return(
        <div>
            <h1>The counter is at : {counter}</h1>
            <button onClick={()=>setCounter(0)}>Reset</button>
            <button onClick={increment}>Increment</button>
            <button onClick={incrementFive}>Increment 5</button>
        </div>
    );
}

export default FunctionalCounter;