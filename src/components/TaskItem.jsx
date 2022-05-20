import React from "react";
import TaskIcon from "./TaskIcon";
import { deleteTask } from "../store";
import { useDispatch } from "react-redux";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  console.log(task);

  return (
    <div className="task">
      <div className="task__body">
        <h3 className="task__title"> {task.title} </h3>
        <p className="task__description"> {task.description} </p>
        {task.priority && <TaskIcon />}
      </div>
      <div className="task__actions">
        <button className="card__link task__delete" onClick={() => dispatch(deleteTask(task.id))}>
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
