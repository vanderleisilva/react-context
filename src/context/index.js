import React, { createContext, useState } from "react";

const AppContext = createContext([{}, () => {}]);

const AppProvider = ({ children }) => {
  const [state, setState] = useState({
    toDos: [
      {
        id: 1,
        name: "Item 1",
        done: false
      },
      {
        id: 2,
        name: "Item 2",
        done: false
      },
      {
        id: 3,
        name: "Item 3",
        done: false
      }
    ]
  });
  return <AppContext.Provider value={[state, setState]} children={children} />;
};

export { AppContext, AppProvider };
