import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  paragraph: {
    marginTop: theme.spacing(17),
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center'
  }
}));

const WaitingMessage = () => {
  const css = useStyles();

  return <p className={css.paragraph}> Waiting for your input. </p>
}

export default WaitingMessage;