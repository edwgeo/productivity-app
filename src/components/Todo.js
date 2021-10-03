import React, { useState } from 'react'

function Todo (props) {
    const [todoName, setTodoName] = useState(props.name)
    const [description, setDescription] = useState(props.desc)
    const [time, setTime] = useState(props.time)
    const [status, setStatus] = useState(props.status)
    // want to have a form where we can change the status
    // this should get a method from the TodoList component that adjusts the states of the current todos
    return (
        <div>{todoName}, {description}, {time}, {status}</div>
    )

}

export default Todo
