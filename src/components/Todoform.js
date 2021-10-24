import react, { useState } from 'react'
import { NormalInput, FormContainer, InputInRow, SubmitInput, TextArea } from './StyledComponents'

function Todoform ({latestTodo, setTodos, setLatestTodo}) {
    const [errors, setErrors] = useState({titleError : "", timeError : ""})

    const validate = (todoItem) => {
        let newTitleError = ""
        let newTimeError = ""

        if (!todoItem.name) {
            newTitleError = "Must input a title for the todo item"
        }
        if (todoItem.time.trim() === "" || isNaN(todoItem.time)) {
            newTimeError = "Time field must contain only integers"
        }
        if (newTitleError || newTimeError) {
            setErrors({titleError : newTitleError, timeError : newTimeError})
            return false
        }
        
        return true
    }    

    let handleChange = (event) => {
        const value = event.target.value;
        setLatestTodo({
            ...latestTodo,
            [event.target.name]: value,
        });
    }

    let handleSubmit = (event) => {
        event.preventDefault() // without, the page refreshes and no data gets printed
        console.log(event.target.value)
        // validate updates the page on submission, and displays the errors
        if (validate(latestTodo)) {
            setTodos(todos => todos.concat(latestTodo))
            setLatestTodo({key: Date.now(), name: "", desc: "", time: "", status: "todo"}) // empty the form
        }
    }

    return (
        
        <form onSubmit={handleSubmit}>
            <FormContainer>
                <InputInRow>
                    <div>
                        <NormalInput
                            placeholder="I want to..."
                            value={latestTodo.name}
                            onChange={handleChange}
                            name="name"
                        />
                        <div style= {{fontSize : 11, color : "red"}}>{errors.titleError}</div>
                    </div>
                    <div>
                        <NormalInput
                            placeholder="45 minutes"
                            value={latestTodo.time}
                            onChange={handleChange}
                            name="time"
                        />
                        <div style= {{fontSize : 11, color : "red"}}>{errors.timeError}</div>
                    </div>
                </InputInRow>
                <InputInRow>
                    <div>
                        <TextArea
                            placeholder="Add a description"
                            value={latestTodo.desc}
                            onChange={handleChange}
                            name="desc"
                        />
                    </div>
                </InputInRow>
                <InputInRow>
                    <SubmitInput
                        type="submit"
                        value="Submit"
                    />
                </InputInRow>
            </FormContainer>
        </form>
    )
}

export default Todoform