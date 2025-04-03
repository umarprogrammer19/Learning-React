import { useDispatch, useSelector } from "react-redux";
import { addTodos, deleteAll, deleteTodos, editTodos } from "./store/slices/todosSlice";
import { useState } from "react";

export default function TodoApp() {
  const { todos } = useSelector(state => state.todosReducer);
  const dispatch = useDispatch();
  const [currentTodo, setCurrentTodo] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (currentTodo.trim()) {
      dispatch(addTodos(currentTodo));
      setCurrentTodo("");
    } else {
      console.warn("Cannot add an empty task.");
    }
  };

  const handleEdit = (item, index) => {
    const newValue = prompt("Please enter a new value", item);
    if (newValue && newValue.trim()) {
      dispatch(editTodos({ index, newValue }));
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 min-w-[500px]">
        <h2 className="text-xl font-bold mb-4 text-center">Todo List</h2>
        <div className="flex space-x-2 mb-4">
          <input
            onChange={(e) => setCurrentTodo(e.target.value)}
            value={currentTodo}
            type="text"
            className="border p-2 flex-grow rounded-lg"
            placeholder="Add a task..."
          />
          <button
            onClick={handleAdd}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Add Item
          </button>
          {todos.length > 1 && (
            <button
              onClick={() => dispatch(deleteAll())}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Delete All
            </button>
          )}
        </div>
        <ul>
          {todos.map((todo, index) => (
            <li key={todo.id} className="flex justify-between items-center bg-gray-200 p-2 rounded-lg mb-2">
              <span>{todo.items}</span>
              <div className="flex gap-2">
                <button
                  onClick={() => dispatch(deleteTodos(index))}
                  className="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleEdit(todo.items, index)}
                  className="bg-green-500 text-white px-2 py-1 rounded-lg hover:bg-green-600"
                >
                  Edit
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
