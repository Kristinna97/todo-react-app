import { useState } from "react";
import TaskAdder from "./TaskAdder";
function TaskList() {
  const [tasks, setTasks] = useState([
    { name: "brush teeth", completed: false },
    { name: "clean room", completed: false },
  ]);

  const deleteElement = (taskDeleted) => {
    const newTasks = tasks.filter((task) => task.name !== taskDeleted);
    setTasks(newTasks);
    if (tasks.length < 11) {
      document.querySelector(".notification").style.display = "none";
    }
  };

  const toggleCompleted = (element) => {
    setTasks((currentTasks) => {
      return currentTasks.map((task) => {
        if (task.name === element.name) {
          return { ...task, completed: !task.completed };
        } else {
          return { ...task, completed: task.completed };
        }
      });
    });
  };

  function toggleLineThrough(element) {
    if (!element.completed) {
      document.getElementById(element.name).style.textDecoration =
        "line-through";
    } else {
      document.getElementById(element.name).style.textDecoration = "none";
    }
  }

  return (
    <>
      <TaskAdder setTasks={setTasks} tasks={tasks} />
      <div className="main">
        <p className="notification">
          You can have only 10 tasks at a time. Please delete an existing one to
          be able to add new task
        </p>
        <ul>
          {tasks.map((task) => {
            return (
              <li key={task.name}>
                <div>
                  <input
                    type="checkbox"
                    onClick={() => {
                      toggleCompleted(task);
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
