import { legacy_createStore as createStore } from "redux";

//Creo los tipos de acciones
export const CHANGE_TITLE = "CHANGE_TITLE",
  CHANGE_DESCRIPTION = "CHANGE_DESCRIPTION",
  CHANGE_PRIORITY = "CHANGE_PRIORITY",
  RESET_FORM = "RESET_FORM",
  ADD_TASK = "ADD_TASK",
  DELETE_TASK = "DELETE_TASK",
  DELETE_TASKS = "DELETE_TASKS";

//Se crean las acciones
const actionBody = (type, payload) => ({ type, payload });

export const changeTitle = (value) => actionBody(CHANGE_TITLE, value);
export const changeDescription = (value) => actionBody(CHANGE_DESCRIPTION, value);
export const changePriority = (value) => actionBody(CHANGE_PRIORITY, value);
export const resetForm = () => actionBody(RESET_FORM);
export const addTask = () => actionBody(ADD_TASK);
export const deleteTask = (value) => actionBody(DELETE_TASK, value);
export const clearList = () => actionBody(DELETE_TASKS);

const initialState = {
  nextId: 1,
  taskTitle: "",
  taskDescription: "",
  taskPriority: true,
  tasks: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === CHANGE_TITLE) {
    return {
      ...state,
      taskTitle: action.payload,
    };
  } else if (action.type === CHANGE_DESCRIPTION) {
    return {
      ...state,
      taskDescription: action.payload,
    };
  } else if (action.type === CHANGE_PRIORITY) {
    return {
      ...state,
      taskPriority: action.payload ? true : false,
    };
  } else if (action.type === RESET_FORM) {
    return {
      ...state,
      taskTitle: "",
      taskDescription: "",
      taskPriority: false,
    };
  } else if (action.type === ADD_TASK) {
    const task = {
      id: state.nextId,
      title: state.taskTitle,
      description: state.taskDescription,
      priority: state.taskPriority,
    };

    return {
      ...state,
      nextId: state.nextId + 1,
      taskTitle: "",
      taskDescription: "",
      taskPriority: false,
      tasks: [...state.tasks, task],
    };

    //TODO
  } else if (action.type === DELETE_TASK) {
    const taskId = action.payload;
    const tasks = state.tasks.filter((task) => task.id !== taskId);

    return {
      ...state,
      tasks: tasks,
    };
  } else if (action.type === DELETE_TASKS) {
    return {
      ...state,
      tasks: [],
    };
  } else {
    return state;
  }
};

const store = createStore(reducer);

export default store;
