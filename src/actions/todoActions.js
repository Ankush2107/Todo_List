import { FINISH_TODO, ADD_TODO, DEL_TODO, EDIT_TODO } from "../constants/actions";

export const todoFinished = (todo, isFinished) => ({type: FINISH_TODO, payload: {todo, isFinished: isFinished}});
export const addTodo = (inputText) => ({type: ADD_TODO, payload:{todoText: inputText}});
export const deleteTodo = (todo) => ({type: DEL_TODO, payload: {todo}});
export const editTodo = (todo, todoText) => ({type: EDIT_TODO, payload: {todo, todoText}});