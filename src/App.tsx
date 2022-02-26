import Todos from "./components/Todos";
import Todo from "./models/todo";
import { ChakraProvider } from "@chakra-ui/react";
import NewTodo from "./components/NewTodo";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function onAddTodo(todoText: string) {
    const newTodo = new Todo(todoText);
    setTodos(prev => [...prev, newTodo]);
  }

  function handleDelete(title: string) {
    setTodos(prev => prev.filter(todo => todo.title !== title));
  }
  return (
    <ChakraProvider>
      <div>
        <NewTodo onAddTodo={onAddTodo} />
        <Todos items={todos}
        onTodoDelete={handleDelete}
        >hello world</Todos>
      </div>
    </ChakraProvider>
  );
}

export default App;
