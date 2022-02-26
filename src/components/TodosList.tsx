import { FC } from "react";

export const TodosList: FC<{ item: { id: string; text: string } }> = ({
  item,
}) => {
  return <li key={item.id}>{item.text}</li>;
};
