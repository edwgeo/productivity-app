import React, { useState } from 'react'

function Todo (props) {
    const [todoName, setTodoName] = useState(props.name)
    const [description, setDescription] = useState(props.desc)
    const [time, setTime] = useState(props.time)
    return (
        <div>{todoName}, {description}, {time}</div>
    )
}

export default Todo
