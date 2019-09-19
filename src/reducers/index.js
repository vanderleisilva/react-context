import todoReducer from './todo';

export default ({ todo }, action) => ({
  todo: todoReducer(todo, action),
});
