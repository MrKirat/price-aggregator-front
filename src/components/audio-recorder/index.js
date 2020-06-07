import React from 'react';

import MicRecorder from 'mic-recorder-to-mp3';

import { useSetRecoilState, useRecoilState } from 'recoil';
import {
  isAudioRecorderEnabledState,
  isCameraEnabledState,
  productListState,
  isLoadingState
} from '../../recoil';

import { makeStyles } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import PauseIcon from '@material-ui/icons/Pause';

import * as api from '../../api';

import { getBase64, createFileByBlobAndBuffer } from '../../utils/file-utils';

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

const useStyles = makeStyles(theme => ({
  icon: {
    verticalAlign: 'middle',
    marginRight: 10,
  },
}));

const AudioRecorder = () => {
  const css = useStyles();
  const [isRecording, setIsRecording] = useRecoilState(isAudioRecorderEnabledState);
  const setIsCameraEnabled = useSetRecoilState(isCameraEnabledState);
  const setProductList = useSetRecoilState(productListState);
  const setIsLoading = useSetRecoilState(isLoadingState);
  const Icon = isRecording ? PauseIcon : MicIcon;

  const audioRecorderStart = () => {
    setIsRecording(true);
    setIsCameraEnabled(false);
    Mp3Recorder.start();
  }

  const audioRecorderStop = async () => {
    setIsLoading(true);
    setIsRecording(false);
    const [buffer, blob] = await Mp3Recorder.stop().getMp3();
    const file = createFileByBlobAndBuffer(blob, buffer);
    const audioSrc = await getBase64(file);

    api
      .searchByAudio(audioSrc)
      .then(response => {
        setProductList(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const clickHandler = () => {
    setIsCameraEnabled(false);
    if (isRecording) {
      audioRecorderStop();
    } else {
      audioRecorderStart();
    }
  }

  return (
    <Icon onClick={clickHandler} className={css.icon} />
  )
}

export default AudioRecorder;