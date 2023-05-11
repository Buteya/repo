import React from 'react';
import ReactDOM from 'react-dom/client';
import NewCar from  './components/Car.js';
import Header from './components/Header.js';

class Car extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            brand:"Ford",
            model:"Mustang",
            color: "red",
            year: 1964
        };
    }
    changeColor = ()=>{
        this.setState({color: 'blue'});
    }
    render(){
        return(
            <div>
               <h2>Hi, I am a {this.props.model} {this.state.color} car!</h2>  
               <h1>My {this.state.brand} </h1>
               <p>
                It is a {this.state.color}
                {this.state.model}
                from {this.state.year}
               </p>
               <button type="button" onClick={this.changeColor}>Change color</button>
            </div>
        )
    }
}

class Container extends React.Component {
    constructor(props){
        super(props);
        this.state = {show: true};
    }
    delHeader = ()=>{
        this.setState({show: false});
    }
    render(){
        let myHeader;
        if(this.state.show){
            myHeader = <Child />;
        };
        return (
            <div>
                {myHeader}
                <button type="button" onClick = {this.delHeader}>Delete Header</button>
            </div>
        )
    }
}

class Child extends React.Component {
    componentWillUnmount = ()=>{
        alert("The component named Header is about to be unmounted.")
    }
    render(){
        return(
            <h1>Hello World!</h1>
        );
    }
}

const MyCar = ()=>{
    return <h2>Hi, I am a new {this.props.color}car!</h2>
}
let CarColor = (props)=>{
    return <h2>I am a {props.color} car!</h2>
}
const Garage = ()=>{
    return(
        <>
          <h1>Who lives in my garage?</h1>
          <Car />
        </>
    )
}
const Football =()=>{
    const shoot = (a,b)=>{
        alert(a);
        alert(b.type);
    }
    return(
        <button onClick={(event)=>shoot("Goal!",event)}>Take the shot!</button>
    );
}
const myFirstElement = <div>
    <h1>Hello React!</h1>
    <table border={1}>
        <tr>
            <th>Name</th>
        </tr>
        <tr>
            <td>John</td>
        </tr>
        <tr>
            <td>Elsa</td>
        </tr>
    </table>
    <Car model="Mustang"/>
    <MyCar color="green" />
    <CarColor color="red" />
    <Garage />
    <NewCar />
    <Container />
    <Header />
    <Football />
</div>


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myFirstElement);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

