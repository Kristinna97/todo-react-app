import { useState } from 'react'
import TaskAdder from "./TaskAdder";
function TaskList() {

  const [tasks, setTasks] = useState( ["clean room", "go to the gym", 'Hi'])

  return (
    <>
    <ul>
      {tasks.map((task) => {
        return <li key={task}>
          <input type="checkbox"  ></input>
          {task} <button>Delete</button></li>;
      })}
    </ul>
    <TaskAdder setTasks = {setTasks}/>
    </>
  );
}

export default TaskList;
