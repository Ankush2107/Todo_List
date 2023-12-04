import { useState } from "react";

function AddTodo({ addTodo }) {
    const [inputText, setInputText] = useState('');
    return (
        <div>
            <input 
                type="text" 
                value={inputText}
                placeholder="Add more todos..."
                onChange={(e) => setInputText(e.target.value)}
            />
            <button onClick={() => {
                addTodo({todoText: inputText});
                setInputText('');
            }}>Add</button>
        </div>
    )
}
export default AddTodo;