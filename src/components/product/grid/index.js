import React from 'react';
import { Container, Box, Grid } from '@material-ui/core';
import { useRecoilValue } from 'recoil';
import { productListState } from '../../../recoil';
import ProductCard from '../card';

const prepareProduct = product => (
  <ProductCard
    key={product.openUrl}
    price={product.price}
    description={product.description}
    openUrl={product.openUrl}
    productImage={product.image}
    productName={product.title}
    shopLogo={product.shopLogo}
  />
)

const ProductGrid = () => {
  const productList = useRecoilValue(productListState);

  return (
    <Container maxWidth='lg'>
      <Box mt={10}>
        <Grid container spacing={3}>
          {productList.map(prepareProduct)}
        </Grid>
      </Box>
    </Container >
  )
}

export default ProductGrid;