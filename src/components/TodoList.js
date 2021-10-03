import React, { useState } from 'react'
import Todo from './Todo'

 function TodoList () {
     const [todos, setTodos] = useState([])
     const [latestTodo, setLatestTodo] = useState({name: "", desc: "", time: "", status: "todo"})

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
        setLatestTodo({name: "", desc: "", time: "", status: "todo"})
    }
    console.log(latestTodo)
    return (
        <div>
            <form onSubmit={handleSubmit}>
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
                <input
                    type="submit"
                    value="submit"
                />
            </form>
            <ul>
            {todos.map((todo, index) =>
                <li key={index}>
                    <Todo {...todo}/>
                    <form>
                        <select name="status" value={todo.status}>
                            <option value="todo">To do</option>
                            <option value="inProgress">In Progress</option>
                            <option value="done">Done</option>
                        </select>
                    </form>
                    {/* show the status of the todo here, and have an onSubmit handler 
                        Also make it so that there's multiple sections and based on status they're displayed in each section */}
                </li>
            )}
            </ul>
        </div>
    )
}

export default TodoList;
