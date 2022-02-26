import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const todos = [new Todo("king crimson"), new Todo("pink floyd")];
  return (
    <div>
      <Todos items={todos}>hello world</Todos>
    </div>
  );
}

export default App;
