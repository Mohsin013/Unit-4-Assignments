import React, { useState } from 'react'

const Todo = ({todo, onDelete, onEdit}) => {
    const [isEditable, setIsEditable] = useState(false)
    const [value, setValue] = useState(todo.value)
    const deleteTodo = async () => {
        await fetch(`http://localhost:3000/todos/${todo.id}`, {
            method: "DELETE",
            headers: {"content-type":"application/json"}
        })
        onDelete(todo.id)
    }
    const editTodo = async () => {
        let res = await fetch(`http://localhost:3000/todos/${todo.id}`, {
            method: "PATCH",
            headers: {"content-type":"application/json"},
            body: JSON.stringify({
                value,
                completed: true,
            })
        })
        let data = await res.json()
        onEdit(data);
    }
  return (
    <div>
        {isEditable? (
            <div>
                <input type="text" 
                    placeholder='Enter your todo here'
                    value={value}
                    onChange={(e)=>setValue(e.target.value)}
                />
                <button
                    onClick={()=> {
                        let v = value.trim();
                        if(v) {
                            editTodo(v);
                            setIsEditable(false);
                        }
                    }}
                >
                    Update
                </button>
            </div>    
        ): (<div>{todo.value}</div>)}

        <div>
            <button onClick={()=>setIsEditable(!isEditable)}>Edit</button>
            <button onClick={deleteTodo}>Delete</button>
        </div>
    </div>
  )
}

export default Todo