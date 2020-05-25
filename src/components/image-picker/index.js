import React from 'react'
import { makeStyles } from '@material-ui/core'
import ImageIcon from '@material-ui/icons/Image';

const useStyles = makeStyles(theme => ({
  input: {
    display: 'none',
  },
  icon: {
    marginRight: 10,
    verticalAlign: 'middle',
  },
}));

const ImagePicker = ({ pickHandler }) => {
  const css = useStyles();

  return (
    <>
      <label for="imagePicker" className={css.label}>
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

