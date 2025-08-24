import React, { useContext } from "react";
import TodoCard from "../../components/card/TodoCard";
import { TodoContext } from "../../context/TodoDatacontext";

const Content = () => {
  const { todos, updateTodo, deleteTodo } = useContext(TodoContext);

  return (
    <div>
      <div className="grid grid-cols-4 gap-5 px-18 py-4">
        {todos &&
          todos.map((todo, i) => {
            return <TodoCard todo={todo} deleteTodo={deleteTodo} key={i} />;
          })}
      </div>
    </div>
  );
};

export default Content;
