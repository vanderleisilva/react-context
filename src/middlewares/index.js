import { initial, final } from './log';
import localStorage from './localStorage';

export default ({ state, action, handler }) => {
  const chain = [initial, handler, localStorage, final];

  return chain.reduce((st, fn) => fn(st, action), state);
};
