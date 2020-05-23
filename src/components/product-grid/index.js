import React from 'react';
import { Container, Box, Grid } from '@material-ui/core';

const ProductGrid = ({ children }) => {
  return (
    <Container maxWidth='lg'>
      <Box mt={10}>
        <Grid container spacing={3}>
          {children}
        </Grid>
      </Box>
    </Container>
  )
}

export default ProductGrid;