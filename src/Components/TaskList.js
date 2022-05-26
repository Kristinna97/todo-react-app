function TaskList({ todoList }) {
  return (
    <ul>
      {todoList.map((task) => {
        return <li key={task}>{task}</li>;
      })}
    </ul>
  );
}

export default TaskList;
