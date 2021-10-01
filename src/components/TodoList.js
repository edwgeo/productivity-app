import React, { useState } from 'react'
import Todo from './Todo'

function TodoList () {
    const [todos, setTodos] = useState([])
    const [latestTodo, setLatestTodo] = useState("")

    let handleChange = (input) => {
        setLatestTodo(input.target.value)
    }
    let handleSubmit = (event) => {
        event.preventDefault() // without, the page refreshes and no data gets printed
        setLatestTodo("")
        setTodos(todos.concat(latestTodo))
    }
    console.log(latestTodo)
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input placeholder="Wash the dishes..." value={latestTodo} onChange={handleChange} />
                </label>
                <input type="submit" value="submit" />
            </form>
            <ul>
            {todos.map((todo, index) =>
                <li key={index}>
                    <Todo name={todo} />
                </li>
            )}
            </ul>
        </div>
    )
}

export default TodoList;
