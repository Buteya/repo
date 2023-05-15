import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import shortid from 'shortid';

const TodoForm = ({todo,setTodo,todoList,setTodoList})=>{
    const handleChange = (event)=>{
        setTodo(event.target.value);
        console.log(todo);
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        setTodoList([...todoList,{name:todo,id:shortid.generate()}]);
        console.log(todoList);
    }
    return(
        <div className="mb-5">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="float-start" >Add Item:</Form.Label>
                    <Form.Control value={todo} type="text" placeholder="Add Item..." onChange={handleChange}></Form.Control>
                </Form.Group>
            </Form>
            <Button className="float-start" variant="primary" type="submit" onClick={handleSubmit}>Add Item</Button>
        </div>
    );
}

export default TodoForm;