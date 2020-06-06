import React from 'react';
import {
  Grid, Card, CardMedia, CardContent, CardActionArea,
  Divider, Typography, makeStyles
} from '@material-ui/core';

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
    padding: theme.spacing(3)
  },
  divider: {
    margin: `${theme.spacing(3)}px 0`
  },
  description: {
    lineHeight: 1.8
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold'
  },
}));

const openInNewTab = url => {
  window.open(url, "_blank")
}

const ProductGridItem = ({ price, description, openUrl, productImage, productName, shopImage }) => {
  const css = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4} xl={3}>
      <Card className={css.card}>
        <CardActionArea className={css.cardActionArea} onClick={e => openInNewTab(openUrl)}>

          <CardMedia className={css.media}
            image={productImage}
            title={productName}
          />
          <CardContent className={css.content}>
            <Typography component="h5" variant="h5" gutterBottom>
              {productName}
            </Typography>
            <Typography className={css.price} component="p" variant="caption">
              {price}
            </Typography>
            <Typography className={css.description} component="p" variant="caption">
              {description}
            </Typography>
            <Divider className={css.divider} light />
          </CardContent>

        </CardActionArea>
      </Card>
    </Grid>
  )
}

export default ProductGridItem;