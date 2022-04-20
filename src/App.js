import React, {useState} from "react";
import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";

const initialTodos = [
  {
    id: 1,
    title: "Todo #1",
    description: "Desc del Todo #1",
    completed: false,
  },
  {
    id: 2,
    title: "Todo #2",
    description: "Desc del Todo #2",
    completed: true,
  },
];

const App = () => {
  
const [todos, setTodos] = useState (initialTodos);

  return (
    // <> -->fragment, es un contenedor padre
    <div className="container mt-4">
      <div className="row">
        <div className="col-8">
          <TodoList
          todos = {todos}/> 
          {/* Aca se traduciria en que este componente, recibiría unos "todos" y enviaría estos "todos" */}
        </div>
        <div className="col-4">
          <TodoForm
          todos = {todos}/>
        </div>
      </div>
    </div>
  );
};

export default App;
