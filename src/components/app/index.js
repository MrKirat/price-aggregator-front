import React from 'react';
import { ThemeProvider, Container, Box, makeStyles } from '@material-ui/core';
import theme from '../../theme';
import NavBar from '../../components/navbar/index';
import Footer from '../../components/footer/index';
import Routes from '../../routes';

const useStyle = makeStyles(theme => ({
  // footerContainer: {
    // position: "relative",
    // paddingBottom: "75px",
    // height: "wv100",
  // },
}));

const App = () => {
  const css = useStyle();

  return (
    <ThemeProvider theme={theme}>
      <Container disableGutters maxWidth="false">
        <Box className={css.footerContainer}>
          <NavBar />
          <Routes />
          {/* <Footer /> */}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;