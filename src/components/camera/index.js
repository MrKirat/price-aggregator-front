import React, { useRef, useCallback } from 'react'

import Webcam from "react-webcam";

import { useSetRecoilState } from 'recoil';
import { isCameraEnabledState, productListState, isLoadingState } from '../../recoil/index';

import { makeStyles } from '@material-ui/core'
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

import { removeBase64Prefix } from '../../utils/file-utils';

import * as api from '../../api';

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

const Camera = () => {
  const css = useStyles();
  const webcamRef = useRef(null);
  const setIsLoading = useSetRecoilState(isLoadingState);
  const setIsCameraEnabled = useSetRecoilState(isCameraEnabledState);
  const setProductList = useSetRecoilState(productListState);

  const capture = useCallback(
    () => {
      const base64Image = webcamRef.current.getScreenshot();
      const imageSrc = removeBase64Prefix(base64Image);
      // audioRecorderAbort();
      setIsLoading(true);
      setIsCameraEnabled(false);

      api
        .searchByImage(imageSrc)
        .then(response => {
          setProductList(response.data);
        })
        .finally(() => {
          setIsLoading(false);
        });
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