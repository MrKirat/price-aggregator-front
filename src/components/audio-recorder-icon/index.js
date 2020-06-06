import React from 'react';
import { makeStyles } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import PauseIcon from '@material-ui/icons/Pause';

const useStyles = makeStyles(theme => ({
  icon: {
    verticalAlign: 'middle',
    marginRight: 10,
  },
}));

const AudioRecorderIcon = ({ clickHandler, isActive }) => {
  const css = useStyles();
  const Icon = isActive ? PauseIcon : MicIcon;

  return (
    <Icon onClick={clickHandler} className={css.icon}/>
  )
}

export default AudioRecorderIcon;