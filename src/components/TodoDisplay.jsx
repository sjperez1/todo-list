import React from 'react'

const TodoDisplay = (props) => {

    const handleDelete = (deletei) => {
        const updatedTodos = props.todos.filter((element, i) => {
            return i !== deletei
        })
        console.log(updatedTodos)
        props.onTodosUpdate(updatedTodos)
    }

    const handleDone = (e, donei) => {
        const copyTodos = [...props.todos]
        copyTodos[donei].isDone = e.target.checked
        props.onTodosUpdate(copyTodos)
    } 

    return (
        <div>
            {   
                // the plural of messages helps indicate an array.
                props.todos.map((todo, i)=>{
                    return(
                    <p key={i}  style={todo.isDone? {textDecorationLine:'line-through'} : {textDecoration: 'none'}}>{todo.todo} <input type="checkbox" checked={todo.isDone} onChange={e => handleDone(e, i)}/> <button onClick={e => handleDelete(i)}>Delete</button></p>
                    )
                })
            }
        </div>
    )
}

export default TodoDisplay