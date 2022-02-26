import { FC } from "react";
import Todo from "../models/todo";
import { TodosList } from "./TodosList";

const Todos: FC<{ items: Todo[] }> = (props) => {
  return (
    <>
      <ul>
        {<li>{props.children}</li>}
        {props.items.map((item) => <TodosList item={item}/>)}
      </ul>
    </>
  );
};

export default Todos;
