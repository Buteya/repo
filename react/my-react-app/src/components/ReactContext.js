import {useContext} from 'react';
    const ReactContext = ({UserContext})=>{
    const user = useContext(UserContext);

    return(
        <>
            <h1>{`Hello ${user}`} </h1>
        </>
    );
}

export default ReactContext;