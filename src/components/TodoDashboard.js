import React, { useState } from 'react'
import Todo from './Todo'
import TodoSection from './TodoSection'

 function TodoDashboard () {
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

    console.log(latestTodo)
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        placeholder="Wash the dishes..."
                        value={latestTodo.name}
                        onChange={handleChange}
                        name="name"
                    />
                </div>
                <div>
                <input
                    placeholder="Make sure to scrub them with the new sponge!"
                    value={latestTodo.desc}
                    onChange={handleChange}
                    name="desc"
                />
                </div>
                <div>
                <input
                    placeholder="45 minutes"
                    value={latestTodo.time}
                    onChange={handleChange}
                    name="time"
                />
                </div>
                <div>
                <input
                    type="submit"
                    value="submit"
                />
                </div>
            </form>
            <h3>Todo</h3>
            <TodoSection todos={todos.filter(todo => todo.status === "todo")} handleStatusChange={handleStatusChange}/>
            <h3>In Progress</h3>
            <TodoSection todos={todos.filter(todo => todo.status === "inProgress")} handleStatusChange={handleStatusChange}/>
            <h3>Done</h3>
            <TodoSection todos={todos.filter(todo => todo.status === "done")} handleStatusChange={handleStatusChange}/>
            {/* next steps - validation for the different fields (i.e. make sure that the time field is an int) 
                           - change the name of TodoList to something else and the name of ShowTodoItemsX too */}

        </div>
    )
}

export default TodoDashboard;
