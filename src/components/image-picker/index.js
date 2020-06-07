import React from 'react'

import { makeStyles } from '@material-ui/core'
import ImageIcon from '@material-ui/icons/Image';

import { useSetRecoilState } from 'recoil';
import { productListState, isLoadingState } from '../../recoil';

import * as api from '../../api';

import { getBase64 } from '../../utils/file-utils';


const useStyles = makeStyles(theme => ({
  input: {
    display: 'none',
  },
  icon: {
    marginRight: 10,
    verticalAlign: 'middle',
  },
}));

const ImagePicker = () => {
  const css = useStyles();
  const setIsLoading = useSetRecoilState(isLoadingState);
  const setProductList = useSetRecoilState(productListState);

  const pickHandler = async event => {
    event.preventDefault();
    setIsLoading(true);
    const image = event.target.files[0];
    const imageSrc = await getBase64(image);

    api
      .searchByImage(imageSrc)
      .then(response => {
        setProductList(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <>
      <label htmlFor="imagePicker" className={css.label}>
        <ImageIcon className={css.icon} />
      </label>
      <input
        accept=".jpg, .jpeg, .png"
        className={css.input}
        id='imagePicker'
        type="file"
        name="image"
        onChange={pickHandler}
      />
    </>
  )
}

export default ImagePicker;

