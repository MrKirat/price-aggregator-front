import React, { useRef, useCallback } from 'react'
import Webcam from "react-webcam";
// import { Container } from '@material-ui/core'
// import theme from '../../theme';

// const useStyles = makeStyles(theme => ({
//   loading: {
//     marginLeft: 'auto',
//     marginRight: 'auto',
//   },
//   container: {
//     marginTop: theme.spacing(20),
//   }
// }));
const Camera = () => {
  const webcamRef = useRef(null);

  const capture = useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      console.log(imageSrc);
    },
    [webcamRef]
  );

  return (
    <>
      <Webcam
        screenshotFormat="image/jpeg"
        ref={webcamRef}
        audio={false} />
      <button onClick={capture}>Capture photo</button>
    </>
  )
}

export default Camera;