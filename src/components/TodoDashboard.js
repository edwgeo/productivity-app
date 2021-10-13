import React, { useState } from 'react'
import TodoSection from './TodoSection'
import Todoform from './Todoform'

// currently: working on creating Todoform, passing in the handleChange, handleSubmit functions, and displaying the <form>

 function TodoDashboard () {
    const [todos, setTodos] = useState([])
    const [latestTodo, setLatestTodo] = useState({key: Date.now(), name: "", desc: "", time: "", status: "todo"})

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
    
    console.log(latestTodo)

    return (
        <div>
            <Todoform latestTodo={latestTodo} setTodos={setTodos} setLatestTodo={setLatestTodo} />
            <h3>Todo</h3>
            <TodoSection todos={todos.filter(todo => todo.status === "todo")} handleStatusChange={handleStatusChange}/>
            <h3>In Progress</h3>
            <TodoSection todos={todos.filter(todo => todo.status === "inProgress")} handleStatusChange={handleStatusChange}/>
            <h3>Done</h3>
            <TodoSection todos={todos.filter(todo => todo.status === "done")} handleStatusChange={handleStatusChange}/>

        </div>
    )
}

export default TodoDashboard;
