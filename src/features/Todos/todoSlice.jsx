// import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// export const todoSlice = createSlice({
//     name: "todo",
//     initialState : {todo: []},
//     reducers: {
//         getAllTodo: state=> {
//             const res = axios.get("https://jsonplaceholder.typicode.com/todos")
//             state.todo = res.data
//         }
//     }
// })

// export const {getAllTodo} = todoSlice.actions;
// export default todoSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodos = createAsyncThunk("todo/fetchTodos", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todo"
  );

  return response.data;
});

export const todoSlice = createSlice({
  name: "todo",
  initialState: { todo: [], isLoading: true, error: "" },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.todo = action.payload;
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default todoSlice.reducer;
