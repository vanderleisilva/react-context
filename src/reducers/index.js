import * as todo from './todo';
import * as types from 'actions/types';
import applyMiddlewares from 'middlewares';

const createReducer = handlers => (state, action) => {
  if (!handlers.hasOwnProperty(action.type)) {
    return state;
  }

  return applyMiddlewares({
    state,
    action,
    next: handlers[action.type],
  });
};

export default createReducer({
  [types.ADD_TODO]: todo.add,
  [types.REMOVE_TODO]: todo.remove,
  [types.UPDATE_TODO]: todo.update,
  [types.FILTER_TODO]: todo.filter,
  [types.SHOW_STATE]: todo.showState,
});
