import React, {useState} from 'react';

const EditTodo = ({ todo }) => {
    const [description, setDescription] = useState(todo.description)
    const updateDesc = async(e) =>{
        e.preventDefault();
        try {
            const body = {description};
            await fetch(`http://localhost:5000/todos/${todo.todo_id}`,{
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            window.location = "/";
        } catch (error) {
            console.error(error.message);
        }
    }
    return (
        <div style={{display: "initial"}}>
            <button className="btn btn-warning" data-toggle="modal" data-target={`#id${todo.todo_id}`}><i className="fas fa-pen"></i></button>
            <div id={`id${todo.todo_id}`} className="modal fade" role="dialog" >
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header d-flex justify-content-between">
                        <h4 className="modal-title">Edit Task</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div className="modal-body container">
                        <form id="editform" className="form-group">
                            <input className="form-control" placeholder="Describe your task again!" value={description} onChange={e =>{
                                setDescription(e.target.value)
                            }}/>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-success text-white" onClick={e =>{
                            updateDesc(e)
                        }} data-dismiss="modal">UPDATE</button>
                    </div>
                    </div>

                </div>
            </div>
        </div>
        
    );
}

export default EditTodo;
