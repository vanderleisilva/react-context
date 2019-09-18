import React, { createContext, useState } from 'react';
import initialState from './initialState';

const TodoContext = createContext([{}, () => {}]);

const TodoProvider = ({ children }) => {
  const [state, setState] = useState(initialState);
  return <TodoContext.Provider value={[state, setState]} children={children} />;
};

export { TodoContext, TodoProvider };
