import React, { useState } from 'react';
import { Container, Box } from '@material-ui/core';
import NavBar from '../navbar/index';
import ProductGrid from '../product-grid/index';
import ProductGridItem from '../product-grid-item/index';
import Loading from '../loading/index';
import Camera from '../camera/index'
import { getBase64, createFileByBlobAndBuffer } from '../../utils/FileUtils';
import * as api from '../../api';
import MicRecorder from 'mic-recorder-to-mp3';
const Mp3Recorder = new MicRecorder({ bitRate: 128 });

const App = () => {
  const [searchString, setSearchString] = useState('');
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isCameraEnabled, setIsCameraEnabled] = useState(false);
  const [isAudioRecorderActive, setIsAudioRecorderActive] = useState(false);

  const loadProducts = () => {
    setIsLoading(true);
    api
      .searchByString(searchString)
      .then(response => {
        console.log(response.data);
        setProducts(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const submitSearchHandler = event => {
    event.preventDefault();
    loadProducts();
  }

  const changeSearchHandler = event => {
    audioRecorderAbort();
    setSearchString(event.target.value);
  }

  const cameraToggleHandler = event => {
    if(!isCameraEnabled) audioRecorderAbort();
    setIsCameraEnabled(!isCameraEnabled);
  }

  const captureHandler = imageSrc => {
    audioRecorderAbort();
    setIsLoading(true);
    setIsCameraEnabled(false);

    api
      .searchByImage(imageSrc)
      .then(response => {
        setProducts(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const pickImageHandler = async event => {
    event.preventDefault();
    audioRecorderAbort();
    setIsLoading(true);
    const image = event.target.files[0];
    const imageSrc = await getBase64(image);

    api
      .searchByImage(imageSrc)
      .then(response => {
        setProducts(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const audioRecorderAbort = () => {
    setIsAudioRecorderActive(false);
    Mp3Recorder.stop();
  }
  
  const audioRecorderStart = () => {
    setIsAudioRecorderActive(true);
    setIsCameraEnabled(false);
    Mp3Recorder.start();
  }

  const audioRecorderStop = async () => {
    setIsLoading(true);
    setIsAudioRecorderActive(false);
    const [buffer, blob] = await Mp3Recorder.stop().getMp3();
    const file = createFileByBlobAndBuffer(blob, buffer);
    const audioSrc = await getBase64(file);

    api
      .searchByAudio(audioSrc)
      .then(response => {
        setProducts(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const audioRecorderClickHandler = () => {
    setIsCameraEnabled(false);
    if (isAudioRecorderActive) {
      audioRecorderStop();
    } else {
      audioRecorderStart();
    }
  }

  const prepareProduct = product => (
    <ProductGridItem
      key={product.openUrl}
      price={product.price}
      description={product.description}
      openUrl={product.openUrl}
      productImage={product.image}
      productName={product.title}
      shopImage={product.shopLogo}
    />
  )

  return (
    <Container disableGutters maxWidth={false}>
      <Box>
        <NavBar
          searchString={searchString}
          submitSearchHandler={submitSearchHandler}
          changeSearchHandler={changeSearchHandler}
          cameraToggleHandler={cameraToggleHandler}
          pickImageHandler={pickImageHandler}
          audioRecorderClickHandler={audioRecorderClickHandler}
          isAudioRecorderActive={isAudioRecorderActive}
        />
      </Box>
      {isLoading
        ? <Loading />
        : <ProductGrid> {products.map(prepareProduct)} </ProductGrid>
      }
      {isCameraEnabled ? <Camera captureHandler={captureHandler} /> : null}
    </Container>
  );
};

export default App;