import React, { useState } from 'react';
import { Container, Box } from '@material-ui/core';
import NavBar from '../navbar/index';
import ProductGrid from '../product-grid/index';
import ProductGridItem from '../product-grid-item/index';
import Loading from '../loading/index';
import Camera from '../camera/index'
import { getBase64 } from '../../utils/FileUtils';
import * as api from '../../api';

const App = () => {
  const [searchString, setSearchString] = useState('');
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isCameraEnabled, setIsCameraEnabled] = useState(false);

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
    setSearchString(event.target.value);
  }

  const cameraToggleHandler = event => {
    setIsCameraEnabled(!isCameraEnabled);
  }

  // TODO: add api call
  const captureHandler = imageSrc => {
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
    <Container disableGutters maxWidth="false">
      <Box>
        <NavBar
          searchString={searchString}
          submitSearchHandler={submitSearchHandler}
          changeSearchHandler={changeSearchHandler}
          cameraToggleHandler={cameraToggleHandler}
          pickImageHandler={pickImageHandler}
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