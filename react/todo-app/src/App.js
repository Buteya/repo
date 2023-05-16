import './App.css';
import Navbar from './components/Navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import TodoForm from './components/TodoForm.js';
import MyTodoList from './components/MyTodoList.js';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {
  const [todo,setTodo] = useState("");
  const [todoList,setTodoList] = useState([]);
  return (
    <Router>
         <div className="App">
      <Navbar /> 
      <div className="content">
      <Routes>
        <Route exact path="/" element={<MyTodoList setTodoList={setTodoList} todoList={todoList} />}/>
        <Route path="/TodoForm" element={  <TodoForm 
          todo={todo}
          setTodo={setTodo}
          todoList={todoList}
          setTodoList={setTodoList}
        />}></Route>
      </Routes>
      </div>
    </div>
    </Router>
 
  );
}

export default App;
