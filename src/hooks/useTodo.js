import { useContext } from 'react';
import { TodoContext } from '../context/todo';

export default () => {
  const [state, setState] = useContext(TodoContext);

  const update = todo => {};

  const add = todo => {};

  const remove = todo => {};

  const setFilter = filter => {
    setState(st => ({
      ...st,
      todos: st.todos.filter(todo => RegExp(todo.name, 'i').test(filter)),
      filter
    }));
  };

  return {
    update,
    add,
    setFilter,
    remove,
    filter: state.filter,
    todos: state.todos,
  };
};
