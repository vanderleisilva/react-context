import log from './log';
import store from './store';

const middlewares = [store, log];

export default ({ state, action, next }) => {
  const chain = [...middlewares, next]

  return chain.reduce(
    (state, fn, index) => fn(state, action, chain[index + 1]),
    state
  );
};
