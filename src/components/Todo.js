import React, { useState } from 'react'

function Todo (props) {
    const [todoName, setTodoName] = useState(props.name)
    // const [description, setDescription] = useState(description)
    // const [time, setTime] = useState(time)
    return (
        <p>{props.name}</p>
    )
}

export default Todo
