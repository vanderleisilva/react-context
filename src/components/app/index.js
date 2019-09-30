import React from 'react';

import { StoreProvider } from 'store';
import reducers from 'reducers';

import state from 'store/initialState';
import { get } from 'middlewares/localStorage';
import merge from 'lodash.merge';

import Header from 'components/header';
import List from 'components/list';
import State from 'components/state';

export default () => (
  <StoreProvider initialState={merge(state, get(state))} reducer={reducers}>
    <Header />
    <List />
    <State />
  </StoreProvider>
);
