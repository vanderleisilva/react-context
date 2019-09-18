import React from 'react';
import useTodo from 'hooks/useTodo';

import TextField from '@material-ui/core/TextField';

export default () => {
  const { filter, setFilter } = useTodo();

  return (
    <TextField
      value={filter}
      fullWidth
      placeholder='Filter'
      autoFocus
      onChange={e => setFilter(e.target.value)}
    />
  );
};
