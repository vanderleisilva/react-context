import React from 'react';

import { useStore } from 'store';
import { filterTodo } from 'actions';

import { makeStyles } from '@material-ui/core/styles';
import { InputBase } from '@material-ui/core';
import { Search } from '@material-ui/icons';

import styles from './styles';
const useStyles = makeStyles(styles);

const Filter = () => {
  const [{ filter }, dispatch] = useStore();
  const classes = useStyles();

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <Search />
      </div>
      <InputBase
        placeholder='Search…'
        onChange={e => dispatch(filterTodo(e.target.value))}
        value={filter}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
      />
    </div>
  );
};

export default Filter;
