import React from 'react'

import ReactLoading from 'react-loading';

import { Container, makeStyles } from '@material-ui/core'

import theme from '../../theme';

const useStyles = makeStyles(theme => ({
  loading: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  container: {
    marginTop: theme.spacing(20),
  }
}));

const Loading = () => {
  const css = useStyles();

  return (
    <Container className={css.container}>
      <ReactLoading className={css.loading} type='bars' color={theme.palette.primary.main} width={100} />
    </Container>
  )
}

export default Loading;