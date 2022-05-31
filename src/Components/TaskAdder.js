import { useState } from "react";
function TaskAdder({ setTasks, tasks }) {
    
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setTasks((currentTasks) => {
      if(tasks.length === 10) {
        document.querySelector('.notification').style.display = 'block'
        return [...currentTasks];
      }else{

        return [ {name: newTask ,completed: false}, ...currentTasks];
      }
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
