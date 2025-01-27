import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
export default function TodoItem({ todo, index, onDelete, onToggle,onEdit }) {
  return (
    <li className={todo.isDone ? "list-item done" : "list-item "}>
      <div>
        <input
          type="checkbox"
          checked={todo.isDone}
          onChange={() => onToggle(index)}
        />
        <span>{todo.text}</span>
      </div>
      <div>
        <DeleteIcon className="del-button" onClick={() => onDelete(index)} />
        <EditIcon onClick={()=>onEdit(index,todo)}  />
        </div>
 
    </li>
  );
}
