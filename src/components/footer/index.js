import React from 'react';
import { Typography, Link, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    footer: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0,
    },
}));

const Footer = () => {
    const css = useStyles();

    return (
        <Box className={css.footer} bgcolor="primary.main" color="primary.contrastText" mt={6} p={2}>
            <Typography variant="body2" align="center">
                Created by Taras Viyatyk
            </Typography>
        </Box>
    )
}

export default Footer;