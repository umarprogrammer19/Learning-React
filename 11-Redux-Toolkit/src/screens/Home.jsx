"use client"

import { useDispatch, useSelector } from "react-redux"
import { addTodos, deleteAll, deleteTodos, editTodos } from "../store/slices/todosSlice"
import { useState } from "react"
import Navbar from "../components/Navbar"

export default function Home() {
  const { todos } = useSelector((state) => state.todosReducer)
  const dispatch = useDispatch()
  const [currentTodo, setCurrentTodo] = useState("")

  const handleAdd = (e) => {
    e.preventDefault()
    if (currentTodo.trim()) {
      dispatch(addTodos(currentTodo))
      setCurrentTodo("")
    } else {
      console.warn("Cannot add an empty task.")
    }
  }

  const handleEdit = (item, index) => {
    const newValue = prompt("Please enter a new value", item)
    if (newValue && newValue.trim()) {
      dispatch(editTodos({ index, newValue }))
    }
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-50 p-4">
        <div className="bg-white shadow-lg rounded-xl p-6 min-w-[500px] max-w-2xl w-full">
          {/* Header with gradient */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 -m-6 mb-6 p-4 rounded-t-xl">
            <h2 className="text-xl font-bold text-white text-center">Todo List</h2>
          </div>

          <div className="flex space-x-2 mb-6">
            <input
              onChange={(e) => setCurrentTodo(e.target.value)}
              value={currentTodo}
              type="text"
              className="border border-gray-300 p-2 flex-grow rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
              placeholder="Add a task..."
            />
            <button
              onClick={handleAdd}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 font-medium"
            >
              Add
            </button>
            {todos.length > 1 && (
              <button
                onClick={() => dispatch(deleteAll())}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all duration-200 font-medium"
              >
                Clear
              </button>
            )}
          </div>

          {todos.length === 0 ? (
            <div className="text-center py-8 text-gray-500">No tasks yet. Add one above!</div>
          ) : (
            <ul className="space-y-3 max-h-[60vh] overflow-y-auto pr-1">
              {todos.map((todo, index) => (
                <li
                  key={todo.id}
                  className="flex justify-between items-center bg-gray-50 p-3 rounded-lg border border-gray-100 hover:shadow-md transition-all duration-200"
                >
                  <span className="text-gray-800 break-words max-w-[60%]">{todo.items}</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(todo.items, index)}
                      className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-lg hover:bg-indigo-200 transition-colors font-medium text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => dispatch(deleteTodos(index))}
                      className="bg-red-100 text-red-700 px-3 py-1 rounded-lg hover:bg-red-200 transition-colors font-medium text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {todos.length > 0 && (
            <div className="mt-4 text-sm text-gray-500 text-right">
              {todos.length} {todos.length === 1 ? "task" : "tasks"}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
