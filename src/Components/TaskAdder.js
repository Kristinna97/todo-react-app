import { useState } from "react";
function TaskAdder({ setTasks }) {
    
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setTasks((currentTasks) => {
      return [ {name: newTask ,completed: false}, ...currentTasks];
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
        required
      ></input>
      <button type="submit" id="add">Add Task</button>
    </form>
  );
}

export default TaskAdder;
