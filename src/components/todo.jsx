import React from 'react'

const Todo = ({todo}) => {

  return (
    <div>
      <h1 className="text-end"></h1>

      <div className="card mt-3">
        <div className="card-body">
          <h3 className="card-title text-end">
              {todo.title}
              
            </h3>
            <div className="d-flex justify-content-end">
            <button className="btn btn-sm btn-success">Terminar</button>
            </div>
          <p className="card-text text-end">{todo.description}</p>
          <hr />
          <div className="d-flex justify-content-end">
            <button className="btn btn-sm btn-primary me-2">Editar</button>
            <button className="btn btn-sm btn-danger">Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Todo