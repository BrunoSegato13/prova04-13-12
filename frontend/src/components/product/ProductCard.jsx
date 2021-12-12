import React, { useState } from 'react';
import { Delete, Edit } from '@mui/icons-material';
import { Card, CardHeader, CardActions, IconButton, CardContent, Typography } from "@mui/material"
import ProductUpdateCard from './ProductUpdateCard';
import useStyles from "./styles/cardStyles"

import api from "../../config/api"

const ProductCard = (props) => {
  const classes = useStyles();
 
  const { product, updateCards, updatecards } = props;
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleUpdateFormOpen = () => {
    setIsFormOpen(true);
  }

  const handleFormClose = () => {
    setIsFormOpen(false);
    updateCards(!updatecards);
  }

  const deleteProduct = async () => {
    await api.delete(`product/${product.id}`);
    updateCards(!updatecards);
  };

  return (
    <div>
      <Card className={classes.card}>
        <CardHeader sm={4} md={4} className={classes.cardHeader}
          title={product.name}
        />
        <CardContent className={classes.cardContent}>
          <Typography sm={3} md={3} variant="body1" color="text.secondary" data-testid="category">
            {product.category.name}
          </Typography>
          <Typography sm={4} md={3} variant="body1" color="text.secondary" data-testid="vendor">
            {product.vendor.name}
          </Typography>
          <Typography sm={2} md={3} variant="body1" color="text.secondary" data-testid="balance">
            {product.balance}
          </Typography>
          <Typography sm={2} md={3} variant="body1" color="text.secondary" data-testid="buyprice">
            {product.buyPrice}
          </Typography>
          <Typography sm={2} md={3} variant="body1" color="text.secondary" data-testid="saleprice">
            {product.salePrice}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions} disableSpacing>
          <IconButton id={`${product.id}-update-button`} aria-label="edit" onClick={handleUpdateFormOpen}>
            <Edit />
          </IconButton>
          <IconButton id={`${product.id}-delete-button`} aria-label="delete" onClick={deleteProduct}>
            <Delete />
          </IconButton>
        </CardActions>
      </Card>
      <ProductUpdateCard openForm={isFormOpen} closeForm={handleFormClose} product={product} />
    </div>
  );
}

export default ProductCard;