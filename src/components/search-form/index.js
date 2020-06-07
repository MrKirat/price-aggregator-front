import React from 'react';

import { useSetRecoilState, useRecoilState } from 'recoil';
import {
  productListState,
  isLoadingState,
  searchStringState
} from '../../recoil/index';

import { Box, TextField, Button, makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import * as api from '../../api';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'inline-block',
  },
  textField: {
    marginRight: '10px',
  },
  input: {
    backgroundColor: 'white'
  }
}));

const SearchForm = () => {
  const css = useStyles();
  const [searchString, setSearchString] = useRecoilState(searchStringState);
  const setProductList = useSetRecoilState(productListState);
  const setIsLoading = useSetRecoilState(isLoadingState);

  const submitHandler = event => {
    event.preventDefault();
    setIsLoading(true);
    api
      .searchByString(searchString)
      .then(response => {
        console.log(response.data);
        setProductList(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const changeHandler = ({ target: { value } }) => {
    // audioRecorderAbort();
    setSearchString(value);
  }

  return (
    <Box className={css.container}>
      <form onSubmit={submitHandler}>
        <TextField
          className={css.textField}
          type="text"
          size="small"
          color="secondary"
          value={searchString}
          onChange={changeHandler}
          variant="outlined"
          placeholder="Product name"
          InputProps={{
            className: css.input,
          }}
        />
        <Button
          endIcon={<SearchIcon />}
          type="submit"
          color="secondary"
          variant="contained"
          className={css.button}>
          Search
        </Button>
      </form>
    </Box>
  )
}

export default SearchForm;