import React from "react";
import useTodo from "hooks/useTodo";

export default () => {
  const { todos } = useTodo();

  return todos.map(todo => (
    <p>
      ID: {todo.id}
      Name: {todo.name}
      Done: {todo.done ? 'yes' : 'false'}
    </p>
  ));
};
