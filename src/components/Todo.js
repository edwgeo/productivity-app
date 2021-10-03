import React, { useState } from 'react'

function Todo (props) {
    const [todoName, setTodoName] = useState(props.name)
    const [description, setDescription] = useState(props.desc)
    const [time, setTime] = useState(props.time)
    const [status, setStatus] = useState(props.status)
    return (
        <div>{todoName}, {description}, {time}</div>
    )
}

export default Todo
