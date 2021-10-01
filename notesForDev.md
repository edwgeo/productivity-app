### Notes for what certain things mean
**File:** *TodoList.js*:
```
let handleSubmit = (event) => {
    event.preventDefault()
    ...
}
```
This is done in order to prevent the page refresh which is native to the form "submit" button. If the page were to refresh, then what the user inputted would appear momentarily and then disappear as the page refreshed. Refer to [this article](https://www.robinwieruch.de/react-preventdefault) for more information.

**File:** *TodoList.js*
```
let handleChange = (input) => {
    setLatestTodo(input.target.value)
}
```
input.target.value is the way you access whatever the user is typing in the input field. Try doing `console.log(input)`,`console.log(input.target)`, and `console.log(input.target.value)` to see what the object actually is.
