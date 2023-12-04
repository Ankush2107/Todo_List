import Todo from "../Todo/Todo";
import { useSelector } from "react-redux";
function TodoList({ editTodo, todoFinished, deleteTodo}) {
   
    const lists = useSelector(state => state.todo.todoList);
    console.log(lists);

    function onFinished(todo, isFinished) {
        todoFinished({todo, isFinished});
    }

    function onDelete(todo) {
        deleteTodo({todo});
    }

    function onEdit(todo, todoText) {
        editTodo({todo, todoText});
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