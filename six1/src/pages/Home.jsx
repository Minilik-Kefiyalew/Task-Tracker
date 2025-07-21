import { useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

function Home() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default Home;
