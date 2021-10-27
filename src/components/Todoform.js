import react, { useState } from 'react'
import { NormalInput, FormContainer, InputInRow, SubmitInput, TextArea } from './StyledComponents'
import { Button, TextField, Grid, Container, Accordion } from '@mui/material';

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
        <>
        <Container maxWidth="sm">
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                    <Grid item md={8}>
                        <TextField
                            placeholder="I want to..."
                            value={latestTodo.name}
                            onChange={handleChange}
                            name="name"
                            variant="outlined"
                            fullWidth
                        />
                        {/* <div style= {{fontSize : 11, color : "red"}}>{errors.titleError}</div> */}
                    </Grid>
                    <Grid item md={4}>
                        <TextField
                            placeholder="45 minutes"
                            value={latestTodo.time}
                            onChange={handleChange}
                            name="time"
                            fullWidth
                        />
                        {/* <div style= {{fontSize : 11, color : "red"}}>{errors.timeError}</div> */}
                    </Grid>
                    <Grid item md={12}>
                        <TextField
                            multiline
                            rows={2}
                            placeholder="Add a description"
                            value={latestTodo.desc}
                            onChange={handleChange}
                            name="desc"
                            fullWidth
                        />
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" type="submit">Submit</Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
      </>
    )
}

export default Todoform