import React from 'react';
import { Box, TextField, Button, makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  button: {
    // margin: theme.spacing(1),
  },
  textField: {
    marginRight: '10px',
  },
  input: {
    backgroundColor: 'white'
    // color: 'white'
  }
}));

const SearchForm = ({ searchString, submitHandler, changeHandler }) => {
  const css = useStyles();

  return (
    <Box>
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