import Todo from './Todo'
import { FormControl, Select, MenuItem } from '@mui/material'
import { StyledList, StyledTodoContainer } from './StyledComponents'

function TodoSection (props) {
        return (
            <ul>
            {/* Multiple sections for each status, each of which use the .filter to display only the items with that status */}
            {props.todos.map((todo) =>
                <StyledList key={todo.key}>
                    <StyledTodoContainer>
                        <Todo {...todo}/>
                    </StyledTodoContainer>
                    <FormControl variant='standard'>
                        <Select name="status" value={todo.status} onChange={(e) => props.handleStatusChange(todo.key, e)}>
                            <MenuItem value="todo">To do</MenuItem>
                            <MenuItem value="inProgress">In Progress</MenuItem>
                            <MenuItem value="done">Done</MenuItem>
                        </Select>
                    </FormControl>
                </StyledList>
            )}
            </ul>
        )
    }

export default TodoSection;