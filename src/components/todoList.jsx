import React from "react";
import Todo from "./todo";

const TodoList = ({ todos }) => {
  // aca recibo los todos de App.js
  return (
    <div>
      <h1 className="text-end">Soy TodoList</h1>

      {todos.map((todo) => (
        <Todo 
        todo={todo} 
        key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
