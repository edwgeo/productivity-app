import React, { useState } from 'react'
import Todo from './Todo'

 function TodoList () {
    // push new changes to develop branch
    const [todos, setTodos] = useState([])
    const [latestTodo, setLatestTodo] = useState({key: Date.now(), name: "", desc: "", time: "", status: "todo"})

    let handleChange = (event) => {
        const value = event.target.value;
        setLatestTodo({
            ...latestTodo,
            [event.target.name]: value,
        });
    }
    let handleStatusChange = (key, event) => {
        setTodos(todos.map(object => {
            if (object.key === key) {
                return {
                    ...object,
                    status: event.target.value
                }
                object.status = event.target.value
            }
            else {
                return object
            }
        }))
        
    }
    let handleSubmit = (event) => {
        event.preventDefault() // without, the page refreshes and no data gets printed
        setTodos(todos.concat(latestTodo))
        console.log(todos)
        setLatestTodo({key: Date.now(), name: "", desc: "", time: "", status: "todo"})
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
            {todos.map((todo) =>
                <li key={todo.key}>
                    <Todo {...todo}/>
                    <form>
                        <select name="status" value={todo.status} onChange={(e) => handleStatusChange(todo.key, e)}>
                            <option value="todo">To do</option>
                            <option value="inProgress">In Progress</option>
                            <option value="done">Done</option>
                        </select>
                    </form>
                </li>
            )}
            </ul>
        </div>
    )
}

export default TodoList;
