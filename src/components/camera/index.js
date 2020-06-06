import React, { useRef, useCallback } from 'react'
import Webcam from "react-webcam";
import { makeStyles } from '@material-ui/core'
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import { removeBase64Prefix } from '../../utils/FileUtils';

const useStyles = makeStyles(theme => ({
  container: {
    position: 'absolute',
    width: '90%',
    maxWidth: 1000,
    marginLeft: 'auto',
    marginRight: 'auto',
    left: 0,
    top: 100,
    right: 0,
    textAlign: 'center',
  },
  camera: {
    position: 'relative',
    width: '100%',
  },
  button: {
    position: 'relative',
    bottom: 80,
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: '300%',
  }
}));

const Camera = ({ captureHandler }) => {
  const css = useStyles();
  const webcamRef = useRef(null);

  const capture = useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      captureHandler(removeBase64Prefix(imageSrc));
    },
    [webcamRef]
  );

  return (
    <div className={css.container}>
      <Webcam
        className={css.camera}
        screenshotFormat="image/jpeg"
        ref={webcamRef}
        audio={false} />
      <RadioButtonCheckedIcon
        className={css.button}
        onClick={capture} />
    </div>
  )
}

export default Camera;