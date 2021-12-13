import React, { useState, useEffect } from 'react';
import { Button, Card, CardContent, CardHeader, Dialog, DialogActions, DialogContent,
  Divider,  Grid, TextField, InputLabel, Select, MenuItem, FormControl} from '@mui/material';

import useStyles from "./styles/cardCreateStyles";

import api from "../../config/api"

const VendorUpdateCard = (props) => {
  const classes = useStyles();

  const { product, openForm, closeForm } = props;
  const [values, setValues] = useState(product);
  const [categories, setCategories] = useState([]);
  const [vendors, setVendors] = useState([]);

  const getCategories = async () => {
    const { data } = await api.get('category');
    setCategories(data)
    console.log(data)
  }

  const getVendors = async () => {
    const { data } = await api.get('vendor');
    setVendors(data)
  }

  useEffect(() => {
    getCategories();
    getVendors();
  }, []);

  const updateValue = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const submitForm = async (event) => {
    event.preventDefault();
    try {
      await api.put('product', values);
      closeForm();
    } catch (error) {
      alert(error.response.data.message);
    }
  }

  return(
    <Dialog open={openForm} onClose={closeForm} maxWidth="800px">
      <DialogContent style={{ padding: 0 }}>
        <Card>
          <form onSubmit={submitForm} data-testid="form">
          <CardHeader title="Editar Produto" />
          <Divider />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item md={6} xs={6}>
                <TextField
                  fullWidth
                  label="Nome"
                  name="name"
                  data-testid="name"
                  onChange={updateValue}
                  required
                  value={values?.name}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={3} xs={3}>
                  <TextField
                    fullWidth
                    label="Preço de compra"
                    name="buyPrice"
                    data-testid="buyPrice"
                    onChange={updateValue}
                    required
                    value={values?.buyPrice}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={3} xs={3}>
                  <TextField
                    fullWidth
                    label="Preço de venda"
                    name="salePrice"
                    data-testid="salePrice"
                    onChange={updateValue}
                    required
                    value={values?.salePrice}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={6}>
                <FormControl variant="outlined" className={classes.inputForm}>
                  <InputLabel id="category-id">Categoria</InputLabel>
                  <Select md={12} xs={12}
                    labelId="category-id"
                    onChange={updateValue}
                    name="category"
                    label="Categoria"
                    defaultValue=""
                    value={values?.category}
                    {...props}
                  >
                    {categories.map((category) => (
                      <MenuItem key={category.id} value={category}>
                        {category.name}
                      </MenuItem>
                    ))}
                    {!categories.length && <MenuItem value="" />}
                  </Select>
                  </FormControl>
                </Grid>
                <Grid item md={6} xs={6}>
                <FormControl variant="outlined" className={classes.inputForm}>
                  <InputLabel id="vendor-id">Fornecedor</InputLabel>
                  <Select md={12} xs={12}
                    labelId="vendor-id"
                    onChange={updateValue}
                    name="vendor"
                    label="Fornecedor"
                    defaultValue={values?.vendor}
                    value={values?.vendor}
                    {...props}
                  >
                    {vendors.map((vendor) => (
                      <MenuItem key={vendor.id} value={vendor}>
                        {vendor.name}
                      </MenuItem>
                    ))}
                    {!vendors.length && <MenuItem value="" />}
                  </Select>
                  </FormControl>
                </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <DialogActions>
            <Button
              variant="outlined"
              fullWidth
              onClick={closeForm}
              size="large"
            >
              CANCELAR
            </Button>
            <Button
              fullWidth
              color="primary"
              variant="contained"
              size="large"
              type="submit"
              name="save-button"
            >
              ATUALIZAR
            </Button>
          </DialogActions>
        </form>
      </Card>
      </DialogContent>
    </Dialog>
  );

}

export default VendorUpdateCard;