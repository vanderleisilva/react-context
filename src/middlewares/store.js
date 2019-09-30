import store from 'store';

export default state => {
  store.set('app', state);
  return state;
};
