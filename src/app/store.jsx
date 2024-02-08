import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../features/Counter/CounterSlice";
import todoReducer from "../features/Todos/todoSlice";


const store = configureStore({
    reducer: {
        counter: CounterReducer,
        todo: todoReducer
    }
})

export default store;