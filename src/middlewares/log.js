const initial = (state, action) => {
  console.log(action);
  console.log(state);
  return state;
};

const final = state => {
  console.log(state);
  console.log('-------------------');
  return state;
};

export { initial, final };
