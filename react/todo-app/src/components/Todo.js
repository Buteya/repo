import Button from 'react-bootstrap/Button';

const Todo = ({item,todoList,setTodoList})=>{
    const deleteTodo =()=>{
        setTodoList(todoList.filter((todo)=>todo.id !== item.id));
    }
    return(
        <div className="todoItem">
            <h4>{item.name}</h4>
            <Button variant="danger" onClick={deleteTodo}>done</Button>
        </div>
    );
}

export default Todo;