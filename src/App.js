import React from "react";
import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";

const App = () => {
  return (
    // <> -->fragment, es un contenedor padre
    <div className="container mt-4">
      <div className="row">
        <div className="col-8">
          <TodoList/>
        </div>
        <div className="col-4">
          <TodoForm/>
        </div>
      </div>
    </div>
  );
};

export default App;
