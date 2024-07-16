import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Feature/Todo/todoSlice";
import { loadState, saveState } from "../Feature/Todo/LocalStorage";
const preloadedState = loadState();
const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  preloadedState,
});
store.subscribe(() => {
  saveState({
    todos: store.getState().todos,
  });
});
export default store;
