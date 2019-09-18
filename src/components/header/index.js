import React from 'react';
import Filter from "components/filter";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(({ spacing }) => ({
  appBar: {
    padding: spacing(1),
    marginBottom: spacing(2),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
}));

export default () => {
  const classes = useStyles();
  return (
    <AppBar position='static' className={classes.appBar}>
      <Typography variant='h6' noWrap children='Todo hooks' />
      <Filter />
    </AppBar>
  );
};
