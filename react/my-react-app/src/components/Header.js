import React from 'react';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {favoritecolor: 'red'};
    }
    static getDerivedStateFromProps(props, state){
        return {favoritecolor: props.favcol};
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({favoritecolor: "yellow"});
        },1000)
    }
    changeColor =()=>{
        this.setState({favoritecolor: "blue"});
    }
    shouldComponentUpdate= ()=>{
        return true;
    }
    getSnapshotBeforeUpdate = (prevProps,prevState)=>{
        document.getElementById("div1").innerHTML = "Before the update the favorite was " + this.prevState.favoritecolor;
    }
    componentDidUpdate = ()=>{
        document.getElementById("div2").innerHTML = "The updated favorite is " + this.state.favoritecolor;
    }
    render(){
        return(
            <div>
                <h1>My Favorite color is {this.state.favoritecolor}</h1>
                <div id="div1"></div>
                <div id="div2"></div>
                <button type="button" onClick={this.changeColor}>Change color</button>
            </div>
            
        );
    }
}

export default Header;