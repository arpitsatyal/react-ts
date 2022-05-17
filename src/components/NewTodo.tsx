import { Button, Input, FormControl, FormLabel } from "@chakra-ui/react";
import React, { useRef, FC } from "react";

const NewTodo: FC<{ onAddTodo: (val: string) => void }> = (props) => {
  const textInput = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = textInput.current!.value;
    props.onAddTodo(enteredText);
  };
  return (
    <div>
      <FormControl>
        <FormLabel htmlFor="text">Add Todo</FormLabel>
        <Input placeholder="add todo" id="text" ref={textInput} style={{ marginBottom: '20px' }}/>
        <Button colorScheme="blue" onClick={submitHandler}>
          Button
        </Button>
      </FormControl>
    </div>
  );
};

export default NewTodo;
