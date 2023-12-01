import Todo from "../Todo/Todo";
function TodoList({ lists }) {
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
                                    return updateList;
                                  }}  
                                  />)}
                                  
        </div>
    )
}
export default TodoList;