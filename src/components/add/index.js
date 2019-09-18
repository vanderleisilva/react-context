import React from 'react';
import useTodo from 'hooks/useTodo';

import Button from '@material-ui/core/Button';

export default props => {
  const { filter, add } = useTodo();

  return (
    <Button
      {...props}
      variant='contained'
      onClick={add}
      disabled={!filter}
      children='Add'
    />
  );
};
