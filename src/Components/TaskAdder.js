import { useState } from "react";
function TaskAdder({ setTasks }) {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setTasks((currentTasks) => {
      return [...currentTasks, newTask];
    });
    setNewTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label></label>
      <input
        type="text"
        placeholder="Add new task"
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
      ></input>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskAdder;
