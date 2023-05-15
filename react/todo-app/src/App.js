import './App.css';
import Navbar from './components/Navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import TodoForm from './components/TodoForm.js';
import MyTodoList from './components/MyTodoList.js';

function App() {
  const [todo,setTodo] = useState("");
  const [todoList,setTodoList] = useState([]);
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <TodoForm 
          todo={todo}
          setTodo={setTodo}
          todoList={todoList}
          setTodoList={setTodoList}
        />
        <MyTodoList setTodoList={setTodoList} todoList={todoList} />
      </div>
    </div>
  );
}

export default App;
