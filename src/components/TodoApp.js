import React, { useState } from "react";
import "../components/TodoApp.css";
import TodoItem from "./TodoItem";

export default function TodoApp() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([
    { text: "clean house", isDone: false },
    { text: "go to shopping", isDone: false },
  ]);

  const [edit, setEdit] = useState("");

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function handleAdd() {
    if (edit !== null) {
      setTodos((prev) =>
        prev.map((item, index) =>
          index === edit ? { ...item, text: inputValue } : item
        )
      );
      setEdit(null);
    } else if (inputValue !== "") {
      setTodos((prev) => [...prev, { text: inputValue, isDone: false }]);
      setInputValue("");
    }
  }

  // function handleDelete(id) {
  //   setTodos((prev) => [prev.filter((item) => item.id !== id)]);
  // }
  function handleDelete(index) {
    setTodos((prev) => prev.filter((_, i) => i !== index));
  }

  function handleToggle(index) {
    setTodos((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, isDone: !item.isDone } : item
      )
    );
  }

  function handleEdit(index, todo) {
    setInputValue(todo.text);
    setEdit(index);
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
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              index={index}
              todo={todo}
              onDelete={handleDelete}
              onToggle={handleToggle}
              onEdit={handleEdit}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
