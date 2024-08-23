import { useState, useRef } from "react";
import "./App.css";

const App = () => {
  const [todo, setTodo] = useState([]);
  const getItem = useRef();
  const addTodo = (event) => {
    event.preventDefault();
    if (getItem.current.value) {
      todo.push(getItem.current.value);
      setTodo([...todo]);
      getItem.current.value = '';
    } else {
      alert("Please Enter a List Item To Add");
    }
  }

  const deleteTodo = (index) => {
    todo.splice(index, 1);
    setTodo([...todo]);
  }

  const editTodo = (index) => {
    const newValue = prompt("Enter a New Value");
    if (newValue !== todo[index]) {
      todo.splice(index, 1, newValue);
      setTodo([...todo]);
    } else {
      alert('Value Cannot Be Same As Previous Value');
    }
  }
  return (
    <>
      <div className="main">
        <h1>Hello World</h1>
        <div className="todo">
          <form onSubmit={addTodo} className="todo-form">
            <input type="text" placeholder="Enter an item to add" ref={getItem} className="todo-input" />
            <button type="submit" className="add-button">Add</button>
          </form>
          <ul className="todo-list">
            {todo.map((item, index) => {
              return (
                <li key={index} className="todo-item">
                  {item}
                  <div className="li-buttons">
                    <button onClick={() => deleteTodo(index)} className="delete-button">Delete</button>
                    <button onClick={() => editTodo(index)} className="edit-button">Edit</button>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

    </>
  )
}

export default App;