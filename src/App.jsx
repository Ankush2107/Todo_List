import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
function App() { 

const [lists, setLists] = useState([
    {id: 1, todoData: 'todo 1', finished: true},
    {id: 2, todoData: 'todo 2', finished: false}
])
  return (
      <>
        <AddTodo updateList={(todo) => setLists([...lists, {id:lists.length + 1, todoData: todo, finished: false}])} />
        <TodoList lists={lists} />
      </>
  )
}

export default App
