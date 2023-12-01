import { useReducer } from 'react';
import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import TodoContext from './context/TodoContext';
import TodoReducer from './reducers/TodoReducer';
import TodoDispatchContext from './context/TodoDispatchContext';
function App() { 
// const [lists, setLists] = useState([
//     {id: 1, todoData: 'todo 1', finished: true},
//     {id: 2, todoData: 'todo 2', finished: false}
// ])

const [lists, dispatch] = useReducer(TodoReducer, []);
  return (
      <TodoContext.Provider value={{lists}}>
          <TodoDispatchContext.Provider value={{dispatch}}>
              <AddTodo />
              <TodoList />
          </TodoDispatchContext.Provider>
      </TodoContext.Provider>
      
  )
}
export default App;
