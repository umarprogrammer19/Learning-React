import { useDispatch, useSelector } from "react-redux";
import { addTodos, deleteTodos } from "./store/slices/todosSlice";
import { useState } from "react";

export default function TodoApp() {
  const { todos } = useSelector(state => state.todosReducer);
  const dispatch = useDispatch();
  const [currentTodo, setCurrentTodo] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addTodos(currentTodo));
    setCurrentTodo("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96">
        {/* Heading */}
        <h2 className="text-xl font-bold mb-4 text-center">Todo List</h2>
        <div className="flex space-x-2 mb-4">
          {/* Input */}
          <input
            onChange={(e) => setCurrentTodo(e.target.value)}
            type="text"
            className="border p-2 flex-grow rounded-lg"
            placeholder="Add a task..."
          />
          {/* Add Button */}
          <button
            onClick={handleAdd}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Add
          </button>
        </div>
        {/* Lists To be Rendred */}
        <ul>
          {todos.map((todo, index) => <li className="flex justify-between items-center bg-gray-200 p-2 rounded-lg mb-2" key={todo.id}>
            <span>{todo.items}</span>
            <button
              onClick={() => dispatch(deleteTodos(index))}
              className="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600"
            >
              Delete
            </button>
          </li>)}
        </ul>
      </div>
    </div>
  );
}
