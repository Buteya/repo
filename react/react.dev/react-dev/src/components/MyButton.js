const MyButton = ({count,onClick})=>{
 
    return (<button onClick={onClick}>Click {count} times</button>);
}

export default MyButton;