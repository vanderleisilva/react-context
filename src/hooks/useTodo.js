import { useContext } from "react";
import { TodoContext } from "../context/todo";

export default () => {
  const [state, setState] = useContext(TodoContext);

  const update = todo => {};

  const add = todo => {};

  const remove = todo => {};

  const setFilter = name => {
    setState(state.filter(todo => RegExp(todo.name, 'i').test(name)))
  };

  return {
    update,
    add,
    setFilter,
    remove,
    filter: state.filter,
    todos: state.todos
  };
};
