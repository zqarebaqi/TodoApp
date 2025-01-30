import React, { useState } from "react";
import "../components/TodoApp.css";
import TodoItem from "./TodoItem";

export default function TodoApp() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([
    { text: "clean house", isDone: false, id: 1 },
    { text: "go to shopping", isDone: false, id: 2 },
  ]);

  const [edit, setEdit] = useState(null);

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function handleAdd() {
    if (edit) {
      setTodos((prev) =>
        prev.map((item) =>
          item.id === edit ? { ...item, text: inputValue } : item
        )
      );
      setEdit(null);
      setInputValue("");
    } else if (inputValue) {
      setTodos((prev) => [
        ...prev,
        { text: inputValue, isDone: false, id: new Date().getTime() },
      ]);
      setInputValue("");
    }
  }

  function handleDelete(id) {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  }

  function handleToggle(id) {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  }

  function handleEdit(todo) {
    console.log(todo);
    setInputValue(todo.text);
    setEdit(todo.id);
  }

  return (
    <>
      <div className="header">
        <span>Todo App</span>
      </div>
      <div className="todo-input-wrapper">
        <input
          className="todo-input"
          type="text"
          value={inputValue}
          placeholder="Enter your tasks here..."
          onChange={handleInputChange}
        />
        <button className="todo-button" onClick={handleAdd}>
          Add
        </button>
      </div>
      <div className="todo-list-wrapper">
        <ul>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDelete={()=>handleDelete(todo.id)}
              onToggle={()=>handleToggle(todo.id)}
              onEdit={()=>handleEdit(todo)}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
