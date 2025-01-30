import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function TodoItem({ todo, onDelete, onToggle, onEdit }) {
  return (
    <li className={`list-item ${todo.isDone ? "done" : ""}`}>
      <div>
        <input
          type="checkbox"
          checked={todo.isDone}
          onChange={() => onToggle(todo.id)}
        />
        <span>{todo.text}</span>
      </div>
      <div>
        <DeleteIcon className="del-button" onClick={() => onDelete(todo.id)} />
        <EditIcon onClick={() => onEdit(todo)} />
      </div>
    </li>
  );
}


