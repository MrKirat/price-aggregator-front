import React from 'react';

import { useRecoilValue } from 'recoil';
import { isLoadingState, isCameraEnabledState } from '../../recoil';

import { Container, Box } from '@material-ui/core';

import NavBar from '../navbar';
import ProductGrid from '../product/grid';
import Loading from '../loading';
import Camera from '../camera'

const App = () => {
  const isLoading = useRecoilValue(isLoadingState);
  const isCameraEnabled = useRecoilValue(isCameraEnabledState);

  return (
    <Container disableGutters maxWidth={false}>
      <Box>
        <NavBar />
      </Box>
      {isLoading
        ? <Loading />
        : <ProductGrid />}
      {isCameraEnabled
        ? <Camera />
        : null}
    </Container>
  );
};

export default App;