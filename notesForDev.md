### Notes for what certain things mean
**File:** *TodoList.js*:
```
let handleSubmit = (event) => {
    event.preventDefault()
    ...
}
```
This is done in order to prevent the page refresh which is native to the form "submit" button. If the page were to refresh, then what the user inputted would appear momentarily and then disappear as the page refreshed. Refer to [this article](https://www.robinwieruch.de/react-preventdefault) for more information.

**File:** *TodoList.js* *[this is from a previous version of the function]*
```
let handleChange = (input) => {
    setLatestTodo(input.target.value)
}
```
input.target.value is the way you access whatever the user is typing in the input field. Try doing `console.log(input)`,`console.log(input.target)`, and `console.log(input.target.value)` to see what the object actually is.

**File:** *TodoList.js*
```
let handleChange = (event) => {
    const value = event.target.value;
    setLatestTodo({
        ...latestTodo,
        [event.target.name]: value,
    });
}
```
The spread operator *...latestTodo* is kind of similar to the unpacking operator in python; it just takes an object containing multiple elements and unpacks those elements from the object. In this case, what we're doing is **merging** the previous state with the adjusted key-value pair. Basically `...latestTodo` stands for all the other key-value pairs in the latestTodo dictionary, and `[event.target.name]: value` represents the newly adjusted k-v pair. [This Pluralsight Article](https://www.pluralsight.com/guides/handling-multiple-inputs-with-single-onchange-handler-react), [this StackOverflow article](https://stackoverflow.com/questions/28452358/what-is-the-meaning-of-this-props-in-reactjs/28452430), and [this stackoverflow answer](https://stackoverflow.com/questions/55247378/spread-operator-in-react-setstate) all provide good understandings of what's happening.
You should note that the Pluralsight article is very helpful, it shows how to manage multiple `<input>` tags with a single onChange handler. It also explains what `[event.target.name]: value` is.



**File:** *TodoList.js* (Oct 4, 2021)
```react
let handleStatusChange = (key, event) => {
        setTodos(todos.map(object => {
            if (object.key === key) {
                return {
                    ...object,
                    status: event.target.value
                }
                object.status = event.target.value
            }
            else {
                return object
            }
        }))
    }
```
handleStatusChange handles the case where a user wants to adjust a task's status. We need to use the setTodos to change the status of the todo item. To accomplish that, within todos.map we define an arrow function that identifies the correct todo item and returns a duplicate with just the status changed.
I struggled with this for a while, but [this StackOverflow answer](https://stackoverflow.com/questions/49477547/setstate-of-an-array-of-objects-in-react) made me realize that .map returns some modified version of an array based on the function we pass into it (which it calls on each member of the array). Check out [.map's documentation](https://reactjs.org/docs/lists-and-keys.html) for more.
 
