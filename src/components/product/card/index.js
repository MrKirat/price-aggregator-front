import React from 'react';
import {
  Grid, Card, CardMedia, CardContent, CardActionArea,
  Divider, Typography, makeStyles
} from '@material-ui/core';
import { openInNewTab } from '../../../utils/link-utils'

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
  price: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  info: {
    display: 'flex',
    flexFlow: 'row nowrap'
  },
  priceShop: {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'space-evenly',
    marginRight: 5
  },
  description: {
    lineHeight: 1.8
  }
}));

const ProductCard = ({ price, description, openUrl, productImage, productName, shopLogo }) => {
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
            <Divider className={css.divider} light />
            <Typography className={css.info} component="p" variant="caption">
              <div className={css.priceShop}>
                <Typography className={css.price} component="p" variant="caption">
                  {price}
                </Typography>
                <div className={css.shopImage}>
                  <img src={shopLogo} />
                </div>
              </div>
              <div className={css.description}>
                {description}
              </div>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}

export default ProductCard;