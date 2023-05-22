import {useEffect,useState} from 'react';

const HooksEffect = () =>{
    const [name, setName] = useState("John Doe");
    const [name1,setName1] = useState("John Doe");

    useEffect(()=>{
        console.log("Use Effect called")
    },[name]);

    return(
        <div>
            <h1>{name}</h1>
            <h1>{name1}</h1>
            <button onClick={()=>setName("Mary Doe")}>Change Name</button>
            <button onClick={()=>setName1("Samson Doe")}>Click Me</button>
        </div>
    );
}

export default HooksEffect;