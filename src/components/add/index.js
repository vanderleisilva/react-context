import React from 'react';
// import useTodo from 'hooks/useTodo';

import Button from '@material-ui/core/Button';

export default props => {
  // const { filter, add } = useTodo();

  const filter = ''
  const add = ''

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
