import React, { useState } from 'react';
import { Button, Card, CardContent, CardHeader, Dialog, DialogActions, DialogContent,
  Divider,  Grid, TextField} from '@mui/material';

import api from "../../config/api"

const VendorCreateCard = (props) => {
  const { openForm, closeForm } = props;
  const [values, setValues] = useState({ name: ""});

  const updateValue = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const submitForm = async (event) => {
    event.preventDefault();
    try {
      await api.post('vendor', values);
      closeForm();
      setValues({
        name: '',
      })
    } catch (error) {
      alert(error.response.data.message);
    }
  }

  return(
    <Dialog open={openForm} onClose={closeForm} maxWidth="xs">
      <DialogContent style={{ padding: 0 }}>
        <Card>
          <form onSubmit={submitForm} data-testid="form">
          <CardHeader title="Adicionar Fornecedor" />
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item md={12} xs={12}>
                <TextField
                  fullWidth
                  label="Nome"
                  name="name"
                  data-testid="name"
                  onChange={updateValue}
                  required
                  value={values.name}
                  variant="outlined"
                />
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
              ADICIONAR
            </Button>
          </DialogActions>
        </form>
      </Card>
      </DialogContent>
    </Dialog>
  );

}

export default VendorCreateCard;