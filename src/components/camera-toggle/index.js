import React from 'react'
import { makeStyles } from '@material-ui/core'
import PhotoCameraOutlinedIcon from '@material-ui/icons/PhotoCameraOutlined';

const useStyles = makeStyles(theme => ({
  icon: {
    verticalAlign: 'middle',
    marginRight: 5,
  },
}));

const CameraToggle = ({ clickHandler }) => {
  const css = useStyles();

  return (
    <PhotoCameraOutlinedIcon className={css.icon} onClick={clickHandler}/>
  )
}

export default CameraToggle;