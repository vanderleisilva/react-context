export default (state, action, next) => {
  console.log(action);
  console.log('current state', state);
  console.log('next state', next(state, action));
  console.log('---------');
  return state;
};
