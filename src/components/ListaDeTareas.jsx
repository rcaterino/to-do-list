import React, { useState } from "react";
import Formulario from "./Formulario";
import "../estilos/listadetareas.css";
import { v4 as uuidv4 } from "uuid";

function ListaDeTareas() {
  const [todos, setTodos] = useState([]);

  const esCompletado = (i) =>
    setTodos(
      todos.map((todo, k) =>
        k === i
          ? {
              ...todo,
              complete: !todo.complete,
            }
          : todo
      )
    );

  const eliminarTarea = (id) => {
    const tareasActualizadas = todos.filter((todo) => todo.id !== id);
    setTodos(tareasActualizadas);
  };

  return (
    <div className="lista-de-tareas">
      <Formulario
        onSubmit={(text) =>
          setTodos([...todos, { text, complete: false, id: uuidv4() }])
        }
      />
      {todos.map(({ text, complete }, i) => (
        <li
          className="tarea"
          key={uuidv4()}
          onDoubleClick={() => esCompletado(i)}
          style={{
            textDecoration: complete ? "line-through" : "",
          }}
        >
          {text}
          <button
            hidden={complete ? false : true}
            onClick={() => eliminarTarea(todos[i].id)}
          >
            X
          </button>
        </li>
      ))}
      <div className="index">
        <span>{todos.length} Item left</span>
      </div>
    </div>
  );
}

export default ListaDeTareas;
