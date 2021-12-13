import React, { useState } from 'react';
import { Button, Card, CardContent, CardHeader, Dialog, DialogActions, DialogContent,
  Divider,  Grid, TextField} from '@mui/material';

import api from "../../config/api"

const CategoryCreateCard = (props) => {
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
      await api.post('category', values);
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
          <CardHeader title="Adicionar Categoria" />
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item md={12} xs={12}>
                <TextField
                  fullWidth
                  label="Nome"
                  name="name"
                  onChange={updateValue}
                  required
                  value={values.name}
                  variant="outlined"
                  inputProps={{
                    "id": "category-name",
                    "data-testid": "name"
                  }}
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
              data-testid="add-button"
              id="add-button"
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

export default CategoryCreateCard;