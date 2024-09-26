import { useEffect, useRef, useState } from "react";
import { deleteDocument, getAllData, sendData, updateDocument, signOutUser } from "../config/firebase/firebaseMethods";
import { useNavigate } from "react-router-dom";

export default function Todo() {
  const [data, setData] = useState([]);
  const todoVal = useRef();
  const navigate = useNavigate();

  const addTodo = async () => {
    const newTodo = { todo: todoVal.current.value };
    if (todoVal.current.value) {
      try {
        const documentId = await sendData(newTodo, "todos");
        const newItem = { ...newTodo, documentId };
        setData((prevData) => [...prevData, newItem]);
        todoVal.current.value = "";
      } catch (error) {
        console.log("Error adding todo:", error);
      }
    } else {
      alert("Input Field Cannot Be Empty");
    }
  };

  const removeTodo = async (index) => {
    const todoToRemove = data[index];
    try {
      await deleteDocument(todoToRemove.documentId, "todos");
      const updatedData = [...data];
      updatedData.splice(index, 1);
      setData(updatedData);
    } catch (error) {
      console.error("Error removing document: ", error);
    }
  };

  const editTodo = async (index) => {
    const currentTodo = data[index];
    const newValue = prompt("Enter a New Value", currentTodo.todo);

    if (newValue && newValue !== currentTodo.todo) {
      try {
        await updateDocument(currentTodo.documentId, { todo: newValue }, "todos");
        const updatedData = [...data];
        updatedData[index] = { ...currentTodo, todo: newValue };
        setData(updatedData);
      } catch (error) {
        console.error("Error updating document: ", error);
      }
    } else {
      alert("Please Enter A New Value");
    }
  };

  const handleLogout = async () => {
    try {
      await signOutUser();
      console.log("User logged out successfully");
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  useEffect(() => {
    getAllData("todos")
      .then((fetchedData) => {
        setData(fetchedData);
      })
      .catch((err) => {
        console.log("Error fetching data:", err);
      });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-center text-4xl font-bold text-gray-800 mb-6">
          Todo App Using Firebase
        </h1>
        <div className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Enter Todo"
            ref={todoVal}
            className="flex-1 p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:border-blue-500"
          />
          <button
            className="ml-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition-all duration-300"
            onClick={addTodo}
          >
            Add Todo
          </button>
        </div>
        <ul className="divide-y divide-gray-200 mb-4">
          {data.length > 0 ? (
            data.map((item, index) => (
              <li
                key={item.documentId}
                className="flex justify-between items-center p-4 bg-gray-300 rounded-lg mb-3 shadow"
              >
                <span className="text-gray-800 font-medium">{item.todo}</span>
                <div>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition-all duration-300"
                    onClick={() => removeTodo(index)}
                  >
                    Remove
                  </button>
                  <button
                    className="ml-2 bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600 transition-all duration-300"
                    onClick={() => editTodo(index)}
                  >
                    Edit
                  </button>
                </div>
              </li>
            ))
          ) : (
            <h2 className="text-center text-gray-600">No Todos Found</h2>
          )}
        </ul>
        <button
          className="w-full bg-red-600 text-white px-6 py-3 rounded-lg shadow hover:bg-red-700 transition-all duration-300"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
