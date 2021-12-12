import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Study React Pre-Class Notes",
      day: "Dec 12th at 2:30pm",
      detail: "Lorem ipsum dolor sit, amet consectetur  elit.",
      isDone: false,
    },
    {
      id: 2,
      text: "Feed the Dog",
      day: "Dec 13th at 1:30pm",
      detail: "Lorem ipsum dolor sit, amet consectetur optio!",

      isDone: false,
    },
    {
      id: 3,
      text: "Attend In-Class",
      day: "Dec 14th at 3:00pm",
      detail: "Lorem ipsum adipisicing elit. Suscipit, optio!",
      isDone: false,
    },
  ]);

  const [showAddTask, setShowAddTask] = useState(false);

  // ADD TASK
  const addTask = (newTask) => {
    // console.log("Add Task From App.js");
    const id = Math.floor(Math.random() * 100) + 1;
    const addNewTask = { id, ...newTask };
    setTasks([...tasks, addNewTask]);
  };

  // DELETE TASK
  const deleteTask = (deletedTaskId) => {
    // console.log("delete", deletedTaskId);
    setTasks(tasks.filter((task) => task.id !== deletedTaskId));
  };

  //TOGGLE DONE
  const toggleDone = (toggleDoneId) => {
    setTasks(
      tasks.map((task) =>
        task.id === toggleDoneId ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  // SHOW ADD TASK
  const toggleShow = () => setShowAddTask(!showAddTask);

  // DELETE ALL TASKS
  const deleteAllTask = () => {
    setTasks([]);
  };
  // TO DO FOR YOU

  return (
    <div className="container">
      <Header
        title="TASK TRACKER"
        showAddTask={showAddTask}
        toggleShow={toggleShow}
      />

      {showAddTask && <AddTask addTask={addTask} />}

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} deleteTask={deleteTask} toggleDone={toggleDone} />
      ) : (
        <p style={{ textAlign: "center" }}>NO TASK TO SHOW</p>
      )}
      <Footer deleteAllTask={deleteAllTask} />
    </div>
  );
}

export default App;
