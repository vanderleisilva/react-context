export const add = (state, { payload }) => ({
  ...state,
  todos: [...state.todos, payload.todo],
});

export const remove = (state, { payload }) => ({
  ...state,
  todos: state.todos.filter(t => t.id !== payload.todo.id),
});

export const update = (state, { payload }) => ({
  ...state,
  todos: state.todos.map(t => (t.id === payload.todo.id ? payload.todo : t)),
});

export const filter = (state, { payload }) => ({
  ...state,
  filter: payload.filter
});
