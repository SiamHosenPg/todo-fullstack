import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin3Line } from "react-icons/ri";

const TodoCard = ({ todo, deleteTodo }) => {
  return (
    <div className="px-6 py-5 bg-Background-Second border rounded-xl border-Border">
      <div className="flex items-center justify-end gap-3">
        <button onClick={() => deleteTodo(todo.id)}>
          <AiOutlineEdit className="text-lg" />
        </button>
        <button>
          <RiDeleteBin3Line className="text-lg" />
        </button>
      </div>
      <h2 className="mt-1">{todo.Tile}</h2>
      <p className="mt-3 text-sm">{todo.Text}</p>
    </div>
  );
};

export default TodoCard;
