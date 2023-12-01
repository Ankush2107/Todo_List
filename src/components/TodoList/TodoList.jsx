import { useContext } from "react";
import Todo from "../Todo/Todo";
import TodoContext from "../../context/TodoContext";
function TodoList() {
    const {lists, setLists} = useContext(TodoContext);

    function onFinished(todo, isFinished) {
        const updateList = lists.map(t => {
            if(t.id == todo.id) {
                todo.finished = isFinished;
            }
            return t;
        })
        setLists(updateList);
    }

    function onDelete(todo) {
        const updateList = lists.filter((t) => t.id !== todo.id);
        setLists(updateList);
    }

    function onEdit(todo, todoText) {
        const updateList = lists.map(t => {
            if(t.id == todo.id) {
                todo.todoData = todoText;
            }
            return t;
        })
        setLists(updateList);
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