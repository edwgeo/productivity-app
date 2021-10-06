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
    
    function ShowTodoItemsX (props) {
        return (
            <ul>
            {/* Multiple sections for each status, each of which use the .filter to display only the items with that status */}
            {props.todos.map((todo) =>
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
        )
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
            <h3>Todo</h3>
            <ShowTodoItemsX todos={todos.filter(todo => todo.status === "todo")} />
            <h3>In Progress</h3>
            <ShowTodoItemsX todos={todos.filter(todo => todo.status === "inProgress")} />
            <h3>Done</h3>
            <ShowTodoItemsX todos={todos.filter(todo => todo.status === "done")} />
        </div>
    )
}

export default TodoList;
