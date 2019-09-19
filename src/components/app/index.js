import React from "react";

import { StoreProvider } from "store";
import reducers from "reducers"
import initialState from "store/initialState"

import Header from "components/header";
import List from "components/list";
import State from "components/state";

export default () => (
  <StoreProvider initialState={initialState} reducer={reducers}>
    <Header />
    <List />
    <State />
  </StoreProvider>
);
