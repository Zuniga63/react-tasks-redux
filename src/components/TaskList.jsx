import React from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";
import { useDispatch } from "react-redux";
import { clearList } from "../store";

const TaskList = () => {
  const tasks = useSelector(({ tasks }) => tasks);
  const dispatch = useDispatch();

  return (
    <div className="card">
      <header className="card__header">
        <h2 className="card__title">Lista de tareas</h2>
      </header>
      <div className="card__body">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>

      <footer className="card__footer">
        <button type="button" className="card__button btn-clear" onClick={() => dispatch(clearList())}>
          Limpiar Lista
        </button>
      </footer>
    </div>
  );
};

export default TaskList;
