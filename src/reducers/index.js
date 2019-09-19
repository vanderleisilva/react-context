import * as todo from './todo';
import * as types from 'actions/types';

const createReducer = handlers => (state, action) =>
  handlers.hasOwnProperty(action.type)
    ? handlers[action.type](state, action)
    : state;

export default createReducer({
  [types.ADD_TODO]: todo.add,
  [types.REMOVE_TODO]: todo.remove,
  [types.UPDATE_TODO]: todo.update,
  [types.FILTER_TODO]: todo.filter,
});
