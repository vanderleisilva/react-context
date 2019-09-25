import log from './log';

export default (state, action) => {
  const middlewares = [log];
  return middlewares.reduce((state, m) => m({ state, action }), state);
};
