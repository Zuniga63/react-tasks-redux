import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeTitle, changeDescription, changePriority, addTask, resetForm } from "../store";

const TaskForm = () => {
  const { taskTitle, taskDescription, taskPriority } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="card">
      <header className="card__header">
        <h1 className="card__title">Registrar Tarea</h1>
      </header>
      <div className="card__body">
        {/* Titulo */}
        <div className="input-group">
          <label htmlFor="taskTitle" className="input-label">
            Titulo
          </label>
          <input
            type="text"
            name="taskTitle"
            id="taskTitle"
            className="input"
            value={taskTitle}
            onChange={(event) => dispatch(changeTitle(event.target.value))}
          />
        </div>
        {/* Descripcion */}
        <div className="input-group">
          <label htmlFor="taskDescription" className="input-label">
            Descripción
          </label>
          <textarea
            name="taskDescription"
            id="taskDescription"
            className="input"
            value={taskDescription}
            onChange={(event) => dispatch(changeDescription(event.target.value))}
          ></textarea>
        </div>
        {/* Prioridad */}
        <div className="input-group input-group--row">
          <input
            type="checkbox"
            name="taskPriority"
            id="taskPriority"
            className="input--checkbox"
            checked={taskPriority}
            onChange={(event) => dispatch(changePriority(!taskPriority))}
          />
          <label htmlFor="taskPriority" className="input-label">
            Es prioritario
          </label>
        </div>
      </div>
      <footer className="card__footer">
        <button className="card__link" onClick={() => dispatch(resetForm())}>
          Cancelar
        </button>
        <button className="card__button" onClick={() => dispatch(addTask())}>
          Registrar
        </button>
      </footer>
    </div>
  );
};

export default TaskForm;
