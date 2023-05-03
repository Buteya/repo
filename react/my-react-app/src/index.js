import React from 'react';
import ReactDOM from 'react-dom/client';

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
    </div>


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myFirstElement);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

