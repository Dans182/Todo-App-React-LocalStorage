import React from "react";

const App = () => {
  return (
    // <> -->fragment, es un contenedor padre
    <div className="containet ,t-4">
      <div className="row">
        <div className="col-8">
          <h1>Lista de tareas</h1>
        </div>
        <div className="col-4">
          <h1>Formulario</h1>
        </div>
      </div>
    </div>
  );
};

export default App;
