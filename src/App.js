import "./App.css";
import Header from "./Components/Header";
import TaskList from "./Components/TaskList";

const todoList = ["clean room", "go to the gym"];

function App() {
  return (
    <div className="App">
      <Header />
      <TaskList todoList={todoList} />
    </div>
  );
}

export default App;
