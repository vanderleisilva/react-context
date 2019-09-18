import React from "react";
import useTodo from "hooks/useTodo";

export default () => {
  const { filter } = useTodo();

  return 'filter'
};
