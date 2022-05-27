import { useState } from "react";
import TaskAdder from "./TaskAdder";
function TaskList() {
  const [tasks, setTasks] = useState([
    { name: "brush teets", completed: false },
    { name: "clean room", completed: false },
  ]);

  const deleteElement = (taskDeleted) => {
    const newTasks = tasks.filter((task) => task.name !== taskDeleted);
    setTasks(newTasks);
  };

  const toggleCompleted = () => {
    setTasks((currentTasks) => {
      return currentTasks.map((task) => {
        return { ...task, completed: !task.completed };
      });
    });
  };

  function toggleLineThrough(element) {
    toggleCompleted();
    if (!element.completed) {
      document.getElementById(element.name).style.textDecoration =
        "line-through";
    } else {
      document.getElementById(element.name).style.textDecoration = "none";
    }
  }
  return (
    <>
     <TaskAdder setTasks={setTasks} />
    <div className="main">
      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.name}>
              <div>
                <input
                  type="checkbox"
                  onClick={() => {
                    toggleLineThrough(task);
                  }}
                  className="check"
                ></input>
                <label id={task.name}> {task.name}</label>
              </div>
              <button
                id="delete"
                onClick={() => {
                  deleteElement(task.name);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
      </div>
     
    </>
  );
}

export default TaskList;
