import React, {useState} from 'react'

const TodoForm = (props) => {
    const [todo, setTodo] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        props.newTodo({todo, isDone: false}); // Passes message from child to parent. When the form is submitted, it should be able to pass the input to the parent addTodos, changing the setTodos and then passing it to the other child.
        setTodo("") // This returns the form to empty after it is submitted.
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>
                    <input type="text" placeholder="Type a todo." onChange={e => setTodo(e.target.value)} value={todo}/>
                    <button type='submit'>Add</button>
                </p>
            </form>
        </div>
    )
}

export default TodoForm