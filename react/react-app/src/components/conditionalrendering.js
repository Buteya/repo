import {useState} from 'react';

const ConditionalRendering = ()=>{
    let [display, setDisplay] = useState(false);
    let output;
    if(display){
        setDisplay(display += !display);
        return(
            <div>
                <h1>Display is true hence this line is displayed.</h1>
            </div>
        );
    }else {
        setDisplay(display += !display);
        return(
            <div>
                <h1>Displat is false.</h1>
            </div>
        );
    }
    // return display ? (
    //     <div>
    //         <h1>Display is true hence this line is displayed</h1>
    //     </div>
    // ):(
    //     <div>
    //         <h1>Display is false</h1>
    //     </div>
    // );
    // if(display){
    //     setDisplay(display += !display);
    //     output = <h1>Display is true hence this line is displayed.</h1>
    // }else{
    //     output = <h1>Display is false.</h1>;
    // }
    // return output;
}

export default ConditionalRendering;