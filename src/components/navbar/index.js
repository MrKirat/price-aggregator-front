import React from 'react'
import { Box, makeStyles } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import SearchForm from '../search-form/index';
import CameraToggle from '../camera-toggle/index';
import ImagePicker from '../image-picker/index';

const useStyles = makeStyles(theme => ({
  toolBar: {
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  title: {
    fontSize: 36,
    lineHeight: '1.5',
  },
}));

const NavBar = ({
  searchString,
  submitSearchHandler,
  changeSearchHandler,
  cameraToggleHandler,
  pickImageHandler
}) => {
  const css = useStyles();

  return (
    <div>
      <AppBar>
        <Toolbar className={css.toolBar} variant="dense">
          <Typography className={css.title} variant="h1" color="inherit">
            Price Aggregator
          </Typography>
          <Box>
            <ImagePicker pickHandler={pickImageHandler} />
            <CameraToggle clickHandler={cameraToggleHandler} />
            <SearchForm
              searchString={searchString}
              submitHandler={submitSearchHandler}
              changeHandler={changeSearchHandler}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar;