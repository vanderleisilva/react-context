import React from "react";
import { TodoProvider } from "context/todo";
import Header from "components/header";
import List from "components/list";

export default () => (
  <TodoProvider>
    <Header />
    <List />
  </TodoProvider>
);
