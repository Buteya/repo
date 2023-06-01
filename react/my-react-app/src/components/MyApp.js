import {useState,useMemo} from 'react';
import MyTodos from './MyTodos';

const MyApp = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    const calculation = useMemo(()=>expensiveCalculation(count),[count]);
  
    const increment = () => {
      setCount((c) => c + 1);
    };
    const addTodo = () => {
      setTodos((t) => [...t, "New Todo"]);
    };
  
    return (
      <>
      <>
        <MyTodos todos={todos} addTodo={addTodo} />
        <hr />
        <div>
          Count: {count}
          <button onClick={increment}>+</button>
        </div>
      </>
      <hr />
      <>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </>
      </>
    );
  };

  const expensiveCalculation = (num)=>{
    console.log('Calculating ...');
    for(let i = 0; i < 10000000000;i++){
      num += i;
    }

    return num;
  }

export default MyApp;
