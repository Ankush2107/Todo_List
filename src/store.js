import { createStore, combineReducers } from "redux";

// Import reducers
import TodoReducer from "./reducers/TodoReducer";

const reducer = combineReducers({todo: TodoReducer});
const store = createStore(reducer);

export default store;