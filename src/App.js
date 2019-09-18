import React from "react";
import { TodoProvider } from "context/todo";
import List from "components/list";
import Filter from "components/filter";

export default () => (
  <TodoProvider>
    <Filter />
    <List />
  </TodoProvider>
);
