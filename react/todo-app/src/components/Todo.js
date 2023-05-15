import Button from 'react-bootstrap/Button';

const Todo = ({item,todoList,setTodoList})=>{
    const deleteTodo =()=>{
        setTodoList(todoList.filter((todo)=>todo.id !== item.id));
    }
    return(
        <div>
            <h4 className="text-start p-2 mt-4">{item.name}</h4>
            <Button className="mb-4" variant="danger" onClick={deleteTodo} >done</Button>
        </div>
    );
}

export default Todo;