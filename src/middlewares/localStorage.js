import store from 'store2';

export default state => {
  store.set(state.storeId, state);
  return state;
};

export const get = state => store.get(state.storeId);
