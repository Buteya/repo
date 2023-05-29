import React from 'react';
import ReactDOM from 'react-dom/client';
import NewCar from  './components/Car.js';
// import Header from './components/Header.js';
import MyForm from './components/MyForm.js';
import App from './App.js';
import './css/style.css';
import './sass/my-sass.scss';
import {useState,createContext,} from 'react';
import Timer from './components/Timer.js';
import ReactContext from './components/ReactContext.js';
import ReactRef from './components/ReactRef.js';

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
    return <h2>Hi, I am a new car!</h2>
}
let CarColor = (props)=>{
    return <h2>I am a {props.color} car!</h2>
}
const cars = [
    {id:1,brand:'Ford'},
    {id:2,brand:'BMW'},
    {id:3,brand:'Ford'}
];
const Garage = (props)=>{
    const cars = props.cars;
    return(
        <>
          <h1>Who lives in my garage?</h1>
          {cars.length > 0 && <h2>You have {cars.length} cars in your garage.</h2>}
          <ul>
            {cars.map((car)=><Car key={car.id} brand={car.brand}></Car>)}
          </ul>
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
const MissedGoal = ()=>{
    return <h1>MISSED!</h1>;
}
const MadeGoal = ()=>{
    return <h1>Goal!</h1>;
}
const Goal = (props)=>{
    const isGoal = props.isGoal;
        return(
        <div>
            {isGoal? <MadeGoal />: <MissedGoal />}
        </div>
        );  
}
const Header = ()=>{
    const myStyle = {
        color:'white',
        backgroundColor:'DodgerBlue',
        padding:'10px',
        fontFamily:'Sans-Serif',
    };
    return(
        <>
            <h1 style={{color:'red'}}>Hello style!</h1>
            <p style={{backgroundColor:'lightblue'}}>Add a little style!</p>
            <p style={myStyle}>Add a little more style.</p>
        </>
    );
}

const FavoriteColor = ()=>{
    const [color,setColor] = useState("red");

    return(
        <>
            <h1>My Fovrite color is {color}</h1>
            <button type="button" onClick={()=>setColor("Blue")}>Blue</button>
            <button type="button" onClick={()=>setColor("Red")}>Red</button>
            <button type="button" onClick={()=>setColor("Pink")}>Pink</button>
            <button type="button" onClick={()=>setColor("Green")}>Green</button>
        </>
    );
}

const UserContext = createContext();
const Component1 = ()=>{
    const [user,setUser] = useState("Jesse Hall");

    return (
        <UserContext.Provider value={user}>
            <h1>{`Hello ${user}`}</h1>
            <Component2 />
        </UserContext.Provider>
    )
}

const Component2 = ({user})=>{
    return(
        <>
            <h1>{`Hello ${user}`}</h1>
            <Component3/>
        </>
    )
}

const Component3 = ({user})=>{
    return(
        <>
            <h1>{`Hello  ${user}`}</h1>
            <Component4 />
        </>
    )
}

const Component4 = ({user}) => {
    return(
        <>
            <h1>{`Hello ${user}`}</h1>
            <ReactContext UserContext={UserContext} />
        </>
    )
}


const myFirstElement = <div>
    <h1>Hello React!</h1>
    <table border={1}>
        <thead>
         <tr>
            <th>Name</th>
        </tr>   
        </thead>
        <tbody>
            <tr>
            <td>John</td>
        </tr>
        <tr>
            <td>Elsa</td>
        </tr> 
        </tbody>
       
    </table>
    <Car model="Mustang"/>
    <MyCar color="green" />
    <CarColor color="red" />
    <Garage cars={cars} />
    <NewCar />
    <Container />
    {/* <Header /> */}
    <Football />
    <Goal isGoal={false} />
    <MyForm />
    <App />
    <Header />
    <FavoriteColor />
    <Timer />
    <Component1 />
    <ReactRef />
</div>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myFirstElement);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

