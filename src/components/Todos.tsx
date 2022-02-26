import { FC } from "react";
import Todo from "../models/todo";
import TodosList from "./TodosList";

const Todos: FC<{ items: Todo[]; onTodoDelete: (id: string) => void }> = (
  props
) => {
  return (
    <>
      {props.children}
      {props.items.map((item) => (
        <TodosList
          key={item.title}
          onTodoDelete={props.onTodoDelete.bind(null, item.title)}
          item={item}
        />
      ))}
    </>
  );
};

export default Todos;
