import Todo from './Todo'
import { Select, MenuItem } from '@mui/material'
import { StyledList, StyledTextWrapper, StyledTodoContainer, StyledFormControl } from './StyledComponents'

function TodoSection (props) {
        return (
                <StyledList>
                    {props.todos.map((todo) =>
                        <StyledTodoContainer key={todo.key}>
                            <StyledTextWrapper>
                                <Todo {...todo}/>
                            </StyledTextWrapper>
                            <StyledFormControl size="small">
                                <Select name="status" value={todo.status} onChange={(e) => props.handleStatusChange(todo.key, e)}>
                                    <MenuItem value="todo">To do</MenuItem>
                                    <MenuItem value="inProgress">In Progress</MenuItem>
                                    <MenuItem value="done">Done</MenuItem>
                                </Select>
                            </StyledFormControl>
                        </StyledTodoContainer>
                    )}
                </StyledList>
        )
    }

export default TodoSection;