import React from 'react';
import Filter from 'components/filter';
import Add from 'components/add';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(({ spacing }) => ({
  '@global': {
    body: {
      margin: 0,
    },
  },
  appBar: {
    padding: spacing(1),
    marginBottom: spacing(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actions: {
    display: 'flex',
  },
  add: {
    marginLeft: spacing(1),
  },
}));

export default () => {
  const classes = useStyles();
  return (
    <AppBar position='static' className={classes.appBar}>
      <Typography variant='h6' noWrap children='Todo hooks' />
      <div className={classes.actions}>
        <Filter />
        <Add className={classes.add} />
      </div>
    </AppBar>
  );
};
