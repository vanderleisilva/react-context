import { useContext } from 'react';
import { TodoContext } from '../context/todo';

export default () => {
  const [state, setState] = useContext(TodoContext);

  const update = todo => {
    setState(st => ({
      ...st,
      todos: st.todos.map(t => (t.id === todo.id ? todo : t)),
    }));
  };

  const add = () => {
    setState(st => ({
      ...st,
      todos: [
        ...st.todos,
        {
          id: 4,
          name: st.filter,
          done: false,
        },
      ],
      filter: '',
    }));
  };

  const remove = todo => {};

  const setFilter = filter => {
    setState(st => ({
      ...st,
      filter,
    }));
  };

  return {
    update,
    add,
    setFilter,
    remove,
    filter: state.filter,
    todos: !state.filter
      ? state.todos
      : state.todos.filter(t => RegExp(state.filter, 'i').test(t.name)),
  };
};
