import React, { useState, useEffect } from 'react';
import { Redirect, useLocation } from "react-router-dom";
import {
  Card, CardContent, CardMedia, IconButton,
  Typography, ThemeProvider, Container, Box,
  Divider, CardActionArea, Grid
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as api from '../../api';

const openInNewTab = url => {
  window.open(url, "_blank")
}

const useQuery = (name = null) => {
  const query = new URLSearchParams(useLocation().search);
  return name ? query.get(name) : query;
}

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    }
  },
  cardActionArea: {
    height: "100%"
  },
  media: {
    paddingTop: "56.25%",
    backgroundSize: "auto"
  },
  content: {
    textAlign: "left",
    padding: theme.spacing.unit * 3
  },
  divider: {
    margin: `${theme.spacing.unit * 3}px 0`
  },
  description: {
    lineHeight: 1.8
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold'
  },
}));

const Result = (props) => {
  const css = useStyles();
  const [items, setItems] = useState([]);
  const searchParamValue = useQuery('search');

  // TODO: add {product.marketLogo}
  const prepareProduct = product => {

    return (
      <Grid item xs={12} sm={6} md={4} xl={3}>
        <Card className={css.card}>
          <CardActionArea className={css.cardActionArea} onClick={e => openInNewTab(product.openUrl)}>

            <CardMedia className={css.media}
              image={product.productImg}
              title={searchParamValue}
            />
            <CardContent className={css.content}>
              <Typography component="h5" variant="h5" gutterBottom>
                {searchParamValue}
              </Typography>
              <Typography className={css.price} component="p" variant="caption">
                {product.price}
              </Typography>
              <Typography className={css.description} component="p" variant="caption">
                {product.productDesc}
              </Typography>
              <Divider className={css.divider} light />
            </CardContent>

          </CardActionArea>
        </Card>
      </Grid>
    );
  }

  const loadItems = () => {
    const preparedItems = [];

    api
      .search(searchParamValue)
      .then(response => {
        response.data.forEach(item => {
          console.log(item);
          preparedItems.push(prepareProduct(item));
        })
        setItems(preparedItems);
      });
  }

  useEffect(() => {
    loadItems();
  }, []);

  return (
    <>
      {searchParamValue ? null : <Redirect to='/' />}
      <Container maxWidth='lg'>
        <Box mt={10}>
          <Grid container spacing={3}>
            {items.length > 0 ? items : 'Loading...'}
          </Grid>
        </Box>
      </Container>
    </>
  )
}

export default Result;