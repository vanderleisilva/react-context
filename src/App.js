import React, { useContext } from "react";
import Context from "./context";

export default () => {
  const [count, setCounter] = useContext(Context);

  return 'test'
};
