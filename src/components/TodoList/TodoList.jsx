import { useContext } from "react";
import Todo from "../Todo/Todo";
import TodoContext from "../../context/TodoContext";
function TodoList() {
    const {lists, setLists} = useContext(TodoContext);
    return (
        <div>
            {lists.length > 0 && 
            lists.map(li => <Todo key={li.id}
                                  id={li.id} 
                                  todoData={li.todoData} 
                                  isFinished={li.finished}
                                  changeFinished={(isFinished) => {
                                        const updateList = lists.map(t => {
                                            if(t.id == li.id) {
                                                li.finished = isFinished;
                                            }
                                            return t;
                                        })
                                        setLists(updateList);
                                   }}
                                  onDelete={() => {
                                     const updateList = lists.filter((t) => t.id !== li.id);
                                     setLists(updateList);
                                  }}  
                                  onEdit={(todoText) => {
                                    const updateList = lists.map(t => {
                                            if(t.id == li.id) {
                                                li.todoData = todoText;
                                            }
                                            return t;
                                        })
                                        setLists(updateList); 
                                  }}
                                  />)}
                                  
        </div>
    )
}
export default TodoList;