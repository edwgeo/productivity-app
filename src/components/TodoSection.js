import Todo from './Todo'

function TodoSection (props) {
        return (
            <ul>
            {/* Multiple sections for each status, each of which use the .filter to display only the items with that status */}
            {props.todos.map((todo) =>
                <li key={todo.key}>
                    <Todo {...todo}/>
                    <form>
                        <select name="status" value={todo.status} onChange={(e) => props.handleStatusChange(todo.key, e)}>
                            <option value="todo">To do</option>
                            <option value="inProgress">In Progress</option>
                            <option value="done">Done</option>
                        </select>
                    </form>
                </li>
            )}
            </ul>
        )
    }

export default TodoSection;