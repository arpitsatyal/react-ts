import React, { FC } from "react";
import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

const TodosList: FC<{ item: { title: string; completed?: boolean; }, onTodoDelete: () => void; }> = (props) => {
  return (
    <div>
      <List spacing={3}>
        <ListItem onClick={props.onTodoDelete}>
          <ListIcon as={CheckIcon} color="green.500" />
          {props.item.title}
        </ListItem>
      </List>
    </div>
  );
};

export default TodosList;
