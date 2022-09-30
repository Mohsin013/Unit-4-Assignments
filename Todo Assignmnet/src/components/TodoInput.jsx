import React,{useState} from 'react'

const TodoInput = ({onAdd}) => {
  const [newTodo, setNewTodo] = useState("");
  const postTodo = async (value) => {
      let res = await fetch("http://localhost:3000/todos/", {
          method: "POST",
          headers: {"content-type":"application/json"},
          body: JSON.stringify({
              value,
              completed: false
          })
      })
      let data = await res.json()
      onAdd(data)
  }

  return (
    <div>
        <input type="text" 
            placeholder='Enter your todo here'
            value={newTodo}
            onChange={(e)=>setNewTodo(e.target.value)} 
        />
        <button onClick={()=> {
            let value = newTodo.trim();
            if(value) {
                postTodo(value);
                setNewTodo("");
            }
        }}>Add</button>
    </div>
  )
}

export default TodoInput