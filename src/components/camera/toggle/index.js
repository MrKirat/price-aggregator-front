import React from 'react'

import { useRecoilState } from 'recoil';
import { isCameraEnabledState } from '../../../recoil/index';

import { makeStyles } from '@material-ui/core'
import PhotoCameraOutlinedIcon from '@material-ui/icons/PhotoCameraOutlined';

const useStyles = makeStyles(theme => ({
  icon: {
    verticalAlign: 'middle',
    marginRight: 10,
  },
}));

const CameraToggle = () => {
  const css = useStyles();
  const [isCameraEnabled, setIsCameraEnabled] = useRecoilState(isCameraEnabledState);

  const clickHandler = event => {
    // if (!isCameraEnabled) audioRecorderAbort();
    setIsCameraEnabled(!isCameraEnabled);
  }

  return (
    <PhotoCameraOutlinedIcon className={css.icon} onClick={clickHandler} />
  )
}

export default CameraToggle;