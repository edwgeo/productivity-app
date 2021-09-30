import './App.css';
import TodoList from './components/TodoList';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
