import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, editTodo, removeTodo } from "./config/redux/reducers/todoSlice";

export default function App() {

  const todoInputRef = useRef();

  const dispatch = useDispatch();

  const selector = useSelector(state => state.todos.todo);

  const addTodoIntoRedux = (event) => {
    event.preventDefault();
    const todoTitle = todoInputRef.current.value.trim();
    if (todoTitle) {
      dispatch(addTodo({
        title: todoTitle,
      }));
      todoInputRef.current.value = "";
    } else {
      alert("Input cannot be empty");
    }
  }

  const removeTodoFromRedux = (index) => {
    dispatch(removeTodo({ index }));
  }

  const editTodoInRedux = (index) => {
    const title = prompt("Enter New Value");
    if (title?.trim()) {
      dispatch(editTodo({ index, title }));
    } else {
      alert("New value cannot be empty");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 flex flex-col items-center justify-center p-6 text-white">
      <h1 className="text-5xl font-extrabold mb-10 drop-shadow-lg">Todo List</h1>
  
      <div className="flex space-x-4 mb-8 w-full max-w-lg">
        <input
          type="text"
          ref={todoInputRef}
          className="flex-grow p-3 text-gray-800 border-2 border-transparent rounded-lg focus:outline-none focus:ring-4 focus:ring-yellow-300 shadow-lg placeholder-gray-400"
          placeholder="Enter a new todo..."
        />
        <button
          onClick={addTodoIntoRedux}
          className="bg-yellow-400 text-gray-800 font-semibold px-5 py-3 rounded-lg shadow-md transform hover:scale-105 hover:bg-yellow-500 transition duration-300"
        >
          Add Todo
        </button>
      </div>
  
      <ul className="w-full max-w-lg space-y-4">
        {selector.length > 0 ? (
          selector.map(({ id, title }, index) => (
            <li
              key={id}
              className="flex justify-between items-center p-5 bg-white bg-opacity-90 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105"
            >
              <span className="text-gray-900 font-semibold text-lg">{title}</span>
              <div className="flex space-x-3">
                <button
                  onClick={() => removeTodoFromRedux(index)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-600 transition duration-300 shadow-lg"
                >
                  Delete
                </button>
                <button
                  onClick={() => editTodoInRedux(index)}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 transition duration-300 shadow-lg"
                >
                  Edit
                </button>
              </div>
            </li>
          ))
        ) : (
          <h1 className="text-xl font-semibold text-yellow-300 text-center mt-8">No data found</h1>
        )}
      </ul>
    </div>
  );
  
}
