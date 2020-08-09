import React, {useState} from 'react';


const InputTodo = () => {
    const [description, setDescription] = useState("");

    const onSubmitForm = async(e) =>{
        e.preventDefault();
        try {
            const body={description};
            await fetch('http://localhost:5000/todos',{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body:JSON.stringify(body)
            })
            window.location = '/';
        } catch (error) {
            
        }
    }
    return (
        <div className="container p-3">
            <div className="container mt-4" id="searchbox">
                <form id="addform" onSubmit={onSubmitForm} className="form-group">
                    <div className="d-flex justify-content-around">
                        <input id="addTodo" className='form-control' value={description} onChange={e =>{
                            setDescription(e.target.value)
                        }}placeholder="Describe your task..."/>
                        <button className="btn btn-success" type="submit"><i className="fas fa-plus"></i></button>
                    </div>
                </form>
            </div>
            <br/>
            <hr/>
            <br/>
        </div>
        
    );
}

export default InputTodo;
