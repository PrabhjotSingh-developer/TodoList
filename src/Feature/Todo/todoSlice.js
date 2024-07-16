import { configureStore, createSlice } from "@reduxjs/toolkit";
import { loadState, saveState } from "./LocalStorage";

const initialState = {
  tasks: [],
};
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      console.log();
    },
    deleteTask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    editTask: (state, action) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },
  },
});
export const { addTask, deleteTask, editTask } = todoSlice.actions;
export default todoSlice.reducer;

// store.subscribe(()=>{
//     saveState(store.getState().todos);
// })
