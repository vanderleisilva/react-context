import { useContext } from "react";
import { TodoContext } from "../context/todo";

export default () => {
  const [state, setState] = useContext(TodoContext);

  const update = todo => {};

  const add = todo => {};

  const remove = todo => {};

  return {
    update,
    add,
    remove,
    todos: state
  };
};
