import React from "react";

import { StoreProvider } from "store";
import reducers from "reducers"
import initialState from "store/initialState"

import Header from "components/header";
import List from "components/list";

export default () => (
  <StoreProvider initialState={initialState} reducer={reducers}>
    {/* <Header /> */}
    <List />
  </StoreProvider>
);
