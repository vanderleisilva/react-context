import React from 'react';
import ReactJson from 'react-json-view';
import { useStore } from 'store';
import { showState } from 'actions';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(({ spacing }) => ({
  card: {
    margin: spacing(1),
  },
}));

export default () => {
  const [state, dispatch] = useStore();
  const classes = useStyles();

  return (
    <Card elevation={0} className={classes.card}>
      <CardHeader
        title='Application state'
        subheader='Application state using react hooks and context'
        action={
          <IconButton
            onClick={() => dispatch(showState(!state.state))}
            children={state.state ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          />
        }
      />
      <Collapse in={state.state} timeout='auto' unmountOnExit>
        <CardContent>
          <ReactJson src={state} displayDataTypes={false} />
        </CardContent>
      </Collapse>
    </Card>
  );
};
