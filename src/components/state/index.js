import React from 'react';
import ReactJson from 'react-json-view';
import { useStore } from 'store';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(({ spacing }) => ({
  card: {
    margin: spacing(1),
  },
}));

export default () => {
  const [state] = useStore();
  const classes = useStyles();
  return (
    <Card elevation={0} className={classes.card}>
      <CardHeader
        title='Application state'
        subheader='Click to show or hide the application global state'
        action={<IconButton children={<ExpandMoreIcon />} />}
      />
      <Collapse in={true} timeout='auto' unmountOnExit>
        <CardContent>
          <ReactJson src={state} displayDataTypes={false} />
        </CardContent>
      </Collapse>
    </Card>
  );
};
