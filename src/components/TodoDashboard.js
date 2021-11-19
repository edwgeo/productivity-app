import React, { useState } from 'react'
import TodoSection from './TodoSection'
import Todoform from './Todoform'
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material'
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
            <Typography align="center" variant="h3">Add your tasks!</Typography>
            <Todoform latestTodo={latestTodo} setTodos={setTodos} setLatestTodo={setLatestTodo} />
            <Accordion>
                <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography variant="h5">To Do</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <TodoSection todos={todos.filter(todo => todo.status === "todo")} handleStatusChange={handleStatusChange}/>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography variant="h5">Progress</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <TodoSection todos={todos.filter(todo => todo.status === "inProgress")} handleStatusChange={handleStatusChange}/>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography variant="h5">Done</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <TodoSection todos={todos.filter(todo => todo.status === "done")} handleStatusChange={handleStatusChange}/>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default TodoDashboard;
