import { useState } from "react";
function TaskAdder({ setTasks, tasks }) {
  const [newTask, setNewTask] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    setTasks((currentTasks) => {
      if (tasks.length === 10) {
        document.querySelector(".notification").style.display = "block";
        return [...currentTasks];
      } else {
        return [{ name: newTask, completed: false }, ...currentTasks];
      }
    });
    setNewTask("");
  }

  function deleteCompleted() {
    const active = [];
    for (let task of tasks) {
      if (!task.completed) {
        active.push(task);
      }
    }
    if (active.length < 11) {
      document.querySelector(".notification").style.display = "none";
    }
    return setTasks([...active]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label></label>
      <input
        type="text"
        placeholder="Add new task"
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
        required
      ></input>
      <button type="submit" id="add">
        Add Task
      </button>
      <button
        type="button"
        id="clear"
        onClick={() => {
          deleteCompleted();
        }}
      >
        {" "}
        Delete completed
      </button>
    </form>
  );
}

export default TaskAdder;
