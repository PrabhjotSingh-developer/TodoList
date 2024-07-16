import { useState } from "react";
import { useSelector } from "react-redux";
import TodoForm from "./components/TodoForm";
import TaskItem from "./components/TaskItem";
function App() {
  const [count, setCount] = useState(0);
  const tasks = useSelector((state) => state.todos.tasks);

  return (
    <div className="todo_main flex flex-col items-center bg-[#172842] min-h-screen py-10 w-full  ">
      <div className="container w-[90%] md:max-w-2xl">
        <h1 className="text-3xl font-semibold text-white">Manage your todos</h1>
        <div className="my-8">
          <TodoForm />
        </div>
        <div className="my-4 flex flex-col gap-8">
          {tasks.map((todoItem) => (
            <div className="singleItem" key={todoItem.id}>
              <TaskItem todoItem={todoItem} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
