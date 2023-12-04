import todoReducer from "./Slices/todoSlices";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        todo: todoReducer
    },
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;