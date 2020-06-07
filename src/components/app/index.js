import React from 'react';
import { Container, Box } from '@material-ui/core';
import { useRecoilValue } from 'recoil';
import { isLoadingState, isCameraEnabledState } from '../../recoil/index';
import NavBar from '../navbar/index';
import ProductGrid from '../product/grid/index';
import Loading from '../loading/index';
import Camera from '../camera/index'

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