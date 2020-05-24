import React, { useState } from 'react';
import { Container, Box, makeStyles } from '@material-ui/core';
import NavBar from '../navbar/index';
import ProductGrid from '../product-grid/index';
import ProductGridItem from '../product-grid-item/index';
import Loading from '../loading/index';
import Camera from '../camera/index'
import * as api from '../../api';

const App = () => {
  const [searchString, setSearchString] = useState('');
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadProducts = () => {
    setIsLoading(true);
    api
      .search(searchString)
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

  const prepareProduct = product => (
    <ProductGridItem
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
        />
      </Box>
      {isLoading
        ? <Loading />
        : <ProductGrid> {products.map(prepareProduct)} </ProductGrid>
      }
    </Container>
  );
};

export default App;