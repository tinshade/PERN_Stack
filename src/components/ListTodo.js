import React, {useEffect, useState} from 'react';
import EditTodo from './EditTodo';
const ListTodo = () => {
    const [todos, setTodos] = useState([]);

    //Delete Function
    const deleteTodos = async(id) =>{
        try {
            await fetch(`http://localhost:5000/todos/${id}`,{
                method: "DELETE"
            });
            setTodos(todos.filter(todo => todo.todo_id !== id));
        } catch (error) {
            console.error(error.message);
        }
    }
    const getTodos = async () =>{
        try {
            const response = await fetch("http://localhost:5000/todos");
            const JsonData = await response.json();
            
            setTodos(JsonData);
        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(()=>{
        getTodos();
    }, []);
    return (
        <div className="container human table-responsive p-3">
            <table className="table table-bordered text-center table-hover mb-5 shadow">
                <thead className="thead-dark">
                    <tr>
                        <th>Task</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(todo=>(
                        <tr key={todo.todo_id}>
                            <td><strong>{todo.description}</strong></td>
                            <td>
                                <EditTodo todo={todo}/>
                                <span style={{color: "lightgray"}}>&ensp; | &ensp;</span>
                                <button onClick={() => deleteTodos(todo.todo_id)} className="btn btn-danger"><i className="fas fa-trash"></i></button>
                            </td>
                        </tr>
                    ))}

                </tbody>
                </table>
        </div>
    );
}

export default ListTodo;
