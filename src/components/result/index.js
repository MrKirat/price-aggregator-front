import React from 'react';

import { useRecoilValue } from 'recoil';
import { productListState } from '../../recoil';

import ProductGrid from '../product/grid';
import WaitingMessage from '../waiting-message';

const Result = () => {
  const productList = useRecoilValue(productListState);

  return (
    productList.length > 0
      ? <ProductGrid />
      : <WaitingMessage />
  );
};

export default Result;