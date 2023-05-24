import styles from '../css/my-style.module.css';
import {useState} from 'react';

const NewCar=()=>{
    const [car, setCar] = useState({
        brand:"Ford",
        model:"Mustang",
        year:"1964",
        color:"red",
    });

    const updateColor= ()=>{
        setCar(previousCar =>{
            return {...previousCar, color:"blue"}
        })
    }
    return(
        <>
            <h1>My {car.brand}</h1>
            <p>
                It is a {car.color} {car.model} from {car.year}.
            </p>
            <button type="button" onClick={updateColor}Blue></button>
        </>
    )
}

export default NewCar;