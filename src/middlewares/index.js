import log from './log';
import localStorage from './localStorage';

const middlewares = [localStorage, log];

export default ({ state, action, next }) => {
  const chain = [...middlewares, next];

  return chain.reduce(
    (state, fn, index) => fn(state, action, chain[index + 1]),
    state
  );
};
