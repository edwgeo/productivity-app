import React, { useState } from 'react'
import Todo from './Todo'

function TodoList () {
    const [todos, setTodos] = useState([])
    const [latestTodo, setLatestTodo] = useState({name: "", desc: "", time: ""})

    let handleChange = (event) => {
        const value = event.target.value;
        setLatestTodo({
            ...latestTodo,
            [event.target.name]: value,
        });
    }
    let handleSubmit = (event) => {
        event.preventDefault() // without, the page refreshes and no data gets printed
        setTodos(todos.concat(latestTodo))
        setLatestTodo({name: "", desc: "", time: ""})
    }
    console.log(latestTodo)
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        placeholder="Wash the dishes..."
                        value={latestTodo.name}
                        onChange={handleChange}
                        name="name"
                    />
                    <input
                        placeholder="Make sure to scrub them with the new sponge!"
                        value={latestTodo.desc}
                        onChange={handleChange}
                        name="desc"
                    />
                    <input
                        placeholder="45 minutes"
                        value={latestTodo.time}
                        onChange={handleChange}
                        name="time"
                    />
                </label>
                <input type="submit" value="submit" />
            </form>
            <ul>
            {todos.map((todo, index) =>
                <li key={index}>
                    <Todo {...todo} />
                </li>
            )}
            </ul>
        </div>
    )
}

export default TodoList;
