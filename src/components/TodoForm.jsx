import React from "react";
import { useState } from "react";
// for unique id genereator
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addTask } from "../Feature/Todo/todoSlice";
const TodoForm = () => {
  // use state -> todo for storing user input data
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  // Handle add task function
  const handleAddTask = (e) => {
    e.preventDefault();
    if (todo != "") dispatch(addTask({ id: uuidv4(), text: todo }));

    setTodo("");
  };
  return (
    // add todo component
    <form action="" className="flex" onSubmit={handleAddTask}>
      <input
        type="text"
        placeholder="Write todo ..."
        className=" w-full border-none outline-none p-1 px-2 md:p-1.5 md:px-4"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <input
        type="submit"
        className="bg-green-950 py-4 text-white px-6"
        value="Add"
      />
    </form>
  );
};

export default TodoForm;
