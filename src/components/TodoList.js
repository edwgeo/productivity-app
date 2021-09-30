import React, { useState } from 'react'

function TodoList () {
    const [tasks, setTasks] = useState(["hello"]);
    let a = 0;

    return (
        <div>
            <button onClick={()=>setTasks(["Coraline"])}>Click</button>
            <div>{tasks}</div>
        </div>
    )
}

export default TodoList;
