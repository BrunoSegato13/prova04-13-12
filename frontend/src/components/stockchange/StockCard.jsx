import React, { useState, useEffect } from 'react';
import {
  Button, Card, CardContent, CardHeader, DialogActions,
  Divider, Grid, TextField, InputLabel, Select, MenuItem, FormControl,
} from '@mui/material';

import useStyles from "./styles";

import api from "../../config/api"

const StockCard = () => {
  const classes = useStyles();

  const [values, setValues] = useState([]);
  const [product, setProduct] = useState({});
  const [stock, setStock] = useState();


  const getProducts = async () => {
    const { data } = await api.get('product');
    setValues(data)
  }

  useEffect(() => {
    getProducts();
  }, []);

  const updateValue = (event) => {
    setProduct(
      event.target.value
    );
  };

  const updateStock = (event) =>{
    setStock({
      [event.target.name]: event.target.value,
    });
  };

  const handleAddStock = async (event) => {
    event.preventDefault();
    try {
      await api.patch(`product/addstock/${product.id}`, stock);
      getProducts();
    } catch (error) {
      alert(error.response.data.message);
    }
  }

  const handleRemoveStock = async (event) => {
    event.preventDefault();
    try {
      await api.patch(`product/removestock/${product.id}`, stock);
      getProducts();
    } catch (error) {
      alert(error.response.data.message);
    }
  }

  return (
    <div>
      <Card className={classes.card}>
        <div className={classes.cardContent}>
          <CardHeader title="Gerenciar Estoque" />
          <Divider />
          <CardContent className={classes.cardContent}>
            <Grid container spacing={2} md={12} xs={12}>
              <Grid item md={12} xs={12}>
                <FormControl variant="outlined" className={classes.inputForm}>
                  <InputLabel id="product-id">Produto</InputLabel>
                  <Select md={12} xs={12}
                    labelId="product-id"
                    onChange={updateValue}
                    name="product"
                    label="Produto"
                    defaultValue=""
                    value={product}
                  >
                    {values.map((product) => (
                      <MenuItem key={product.id} value={product}>
                        {product.name}
                      </MenuItem>
                    ))}
                    {!values.length && <MenuItem value="" />}
                  </Select>
                </FormControl>
                <Grid item md={12} xs={12} className={classes.gridStock}>
                <Grid item md={6} xs={6}>
                  <InputLabel id="balance-id">Estoque</InputLabel>
                  <TextField
                    fullWidth
                    name="stock"
                    data-testid="stock"
                    disabled
                    value={product.balance || 0}
                    variant="outlined"
                  />
                </Grid>

                <Grid item md={6} xs={6}>
                <InputLabel id="quantity-id">Qauntidade</InputLabel>
                  <TextField
                    type="number"
                    fullWidth
                    name="quantity"
                    data-testid="quantity"
                    onChange={updateStock}
                    required
                    value={stock?.quantity}
                    variant="outlined"
                  />
                </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <DialogActions>
            <Button
              color="error"
              variant="contained"
              fullWidth
              size="large"
              onClick={handleRemoveStock}
            >
              RETIRAR
            </Button>
            <Button
              fullWidth
              color="primary"
              variant="contained"
              size="large"
              onClick={handleAddStock}
              name="save-button"
            >
              INSERIR
            </Button>
          </DialogActions>
        </div>
      </Card>
    </div>
  );

}

export default StockCard;