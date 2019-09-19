import React from 'react';

import { useStore } from 'store';
import { addTodo, filterTodo } from 'actions';

import uuid from 'uuid/v1';

import Button from '@material-ui/core/Button';

export default props => {
  const [{ filter }, dispatch] = useStore();

  const onClick = () => {
    dispatch(addTodo({ id: uuid(), name: filter, done: false }));
    dispatch(filterTodo(''));
  };

  return (
    <Button
      {...props}
      variant='contained'
      onClick={onClick}
      disabled={!filter}
      children='Add'
    />
  );
};
