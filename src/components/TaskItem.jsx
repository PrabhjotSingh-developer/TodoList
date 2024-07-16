import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, editTask } from "../Feature/Todo/todoSlice";
const TaskList = ({ todoItem }) => {
  const [todoMsg, setTodoMsg] = useState(todoItem.text);
  const [isEditable, setIsEditable] = useState(false);
  const dispatch = useDispatch();
  // updateTodo function for updating todo
  const updateTodo = () => {
    if (todoMsg != "") dispatch(editTask({ ...todoItem, text: todoMsg }));
    else setTodoMsg(todoItem.text);
    setIsEditable(false);
  };
  // HandleDelete function for deleting todos
  const HandleDelete = (id) => {
    dispatch(deleteTask(id));
  };
  return (
    // Single todo item -> data comes thorugh props
    <div className="flex w-full bg-[#ccbed7] gap-5 p-3  items-center">
      <input
        type="text"
        name=""
        id=""
        readOnly={!isEditable}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        className={`w-full bg-transparent border-2   ${
          isEditable ? "border-black/9 px-2" : "border-transparent"
        } outline-none py-2  px-4`}
      />
      <button
        onClick={() => {
          if (isEditable) updateTodo();
          else setIsEditable((prev) => !prev);
        }}
      >
        {isEditable ? "📁" : "✏️"}
      </button>
      <button onClick={() => HandleDelete(todoItem.id)}>❌</button>
    </div>
  );
};

export default TaskList;
