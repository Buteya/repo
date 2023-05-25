import {useState,useEffect} from 'react';

const Timer = ()=>{
    const [count,setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(()=>{
        setCalculation(()=>count * 2);
        // let timer = setTimeout(()=>{
        //     setCount(count => count + 1);
        // },1000);
        // return ()=> clearTimeout(timer);
    },[count]);

    

    return(
        <>
            {/* <h1>I`ve rendered {count} times!</h1> */}
            <p>Count: {count}</p>
            <button onClick={()=>setCount((c)=>c+1)}>+</button>
            <p>Calculation: {calculation}</p>
        </>
    )
};

export default Timer;