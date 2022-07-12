import React, {useState} from 'react'
import TodoDisplay from './TodoDisplay'
import TodoForm from './TodoForm'

const TodoContainer = () => {
    const [todos, setTodos] = useState([])

    const addTodos = (newTodo) => {
        setTodos([...todos, newTodo])
    }
    const updateTodos = (updatedTodos) => {
        setTodos(updatedTodos)
    }
    
    return (
        <div>
            <TodoForm newTodo={addTodos}/>
            <TodoDisplay todos={todos} onTodosUpdate={updateTodos}/>
        </div>
    )
}

export default TodoContainer