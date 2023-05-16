import {useState} from 'react';

const MyForm = ()=>{
    // const [name, setName] = useState("")
    const [inputs, setInputs] = useState({});
    const [textarea, setTextarea] = useState(
        "The content of a textarea goes in the value attribute"
        );
    const [myCar,setMyCar] = useState("Volvo");

    const handleSubmit = (event)=>{
        event.preventDefault();
        // alert(`The name you entered was! ${name}`);
        alert(inputs.username+"  "+inputs.age+"  "+textarea+"  "+myCar);
    }

    const handleChange = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values=>({...values,[name]:value}));
        setTextarea(event.target.value);
        setMyCar(event.target.value);
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
                <input
                 type="text"
                 name="username"
                 value={inputs.username || ""}
                 onChange={handleChange}
                />
            </label><br></br>
            <label>Enter your age :
                <input
                    type="text"
                    name="age"
                    value={inputs.age || ""}
                    onChange={handleChange}/>
            </label><br></br>
            <textarea value={textarea} onChange={handleChange}></textarea><br></br>
            <select value={myCar} onChange={handleChange}>
                <option value="Ford">Ford</option>
                <option value="Volvo">Volvo</option>
            </select><br></br>
            <input type="submit"></input>
        </form>
    );
}

export default MyForm;