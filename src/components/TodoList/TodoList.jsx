import { useContext } from "react";
import Todo from "../Todo/Todo";
import TodoContext from "../../context/TodoContext";
import TodoDispatchContext from "../../context/TodoDispatchContext";
function TodoList() {
    const {lists} = useContext(TodoContext);
    const {dispatch} = useContext(TodoDispatchContext)

    function onFinished(todo, isFinished) {
        dispatch({type: 'finish_todo', payload: {todo, isFinished: isFinished}})
    }

    function onDelete(todo) {
        dispatch({type: 'delete_todo', payload: {todo}})

    }

    function onEdit(todo, todoText) {
        dispatch({type: 'edit_todo', payload: {todo, todoText}})
    }

    return (
        <div>
            {lists.length > 0 && 
            lists.map(li => <Todo key={li.id}
                                  id={li.id} 
                                  todoData={li.todoData} 
                                  isFinished={li.finished}
                                  changeFinished={(isFinished) => onFinished(li, isFinished)}
                                  onDelete={() => onDelete(li)}  
                                  onEdit={(todoText) => onEdit(li, todoText)}
                                  />)}
                                  
        </div>
    )
}
export default TodoList;