import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="container">
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
