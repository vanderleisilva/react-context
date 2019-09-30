import log from './log';

const chain = [log];

export default ({ state, action, next }) => {
  chain.push(next);

  return chain.reduce(
    (state, fn, index) => fn(state, action, chain[index + 1]),
    state
  );
};
