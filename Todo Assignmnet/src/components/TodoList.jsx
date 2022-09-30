import React,{useState} from 'react'
import Todo from './Todo'
import TodoInput from './TodoInput'

const TodoList = () => {
  const [todos, setTodos] = React.useState([])
  const [pageNumber, setPageNumber] = useState(1);  
  
  const onAdd = (newTodo) => {
      setTodos([...todos, newTodo]);
  }

  const onDelete = (id) => {
      const newTodos = todos.filter((todo)=>todo.id!==id)
      setTodos(newTodos)
  }

  const onEdit = (updatedTodo) => {
      const newTodos = todos.map((todo)=> {
          if(todo.id===updatedTodo.id) return updatedTodo;
          else return todo;
      })
      setTodos(newTodos);
  }

  React.useEffect(()=> {
    const getTodos = async () => {
        try{
            let res = await fetch(`http://localhost:3000/todos?_page=${pageNumber}`);
            let data = await res.json();
            setTodos(data);
        } catch(err) {
            console.log(err);
        }
    }
    getTodos();
  },[pageNumber])

  return (
    <div>
        {pageNumber}
        <TodoInput onAdd={onAdd} />
        {todos.map((todo)=> (
            <Todo key={todos.id} todo={todo} onDelete={onDelete} onEdit={onEdit} />
        ))}
        <div>
            <button onClick={()=> {
                if(pageNumber>1) {
                    setPageNumber(pageNumber-1)
                }
            }}>Previous</button> 
            <button onClick={()=> {
                if(pageNumber<3) {
                    setPageNumber(pageNumber+1)
                }
            }}>Next</button>
        </div>
    </div>
  )
}

export default TodoList