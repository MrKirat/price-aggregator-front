import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
import { Box, TextField, Container, Button, makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const Home = (props) => {
  const css = useStyles();
  const [searchQuery, setSearchQuery] = useState('');
  const [toResultPage, setToResultPage] = useState(false);

  const submitHandler = event => {
    event.preventDefault();
    setToResultPage(true);
  }

  return (
    <>
      {toResultPage ? <Redirect push to={`/result?search=${searchQuery}`} /> : null}
      <Container maxWidth='md'>
        <Box mt={10}>
          <form onSubmit={submitHandler}>
            <TextField
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              label="Product name"
            />
            <Button
              endIcon={<SearchIcon />}
              type="submit"
              color="primary"
              variant="contained"
              className={css.button}>
              Search
          </Button>
          </form>
        </Box>
      </Container>
    </>
  )
}

export default Home;