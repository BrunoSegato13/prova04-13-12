import React, { useState } from 'react';
import { Delete, Edit } from '@mui/icons-material';
import { Card, CardHeader, CardActions, IconButton } from "@mui/material"
import VendorUpdateCard from './VendorUpdateCard';
import useStyles from "./styles/cardStyles"

import api from "../../config/api"

const VendorCard = (props) => {
  const classes = useStyles();
 
  const { vendor, updateCards, updatecards } = props;
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleUpdateFormOpen = () => {
    setIsFormOpen(true);
  }

  const handleFormClose = () => {
    setIsFormOpen(false);
    updateCards(!updatecards);
  }

  const deleteVendor = async () => {
    await api.delete(`vendor/${vendor.id}`);
    updateCards(!updatecards);
  };

  return (
    <div>
      <Card className={classes.card} sx={{ maxWidth: 400 }}>
        <CardHeader className={classes.cardHeader}
          title={vendor.name}
        />
        <CardActions className={classes.cardActions} disableSpacing>
          <IconButton id={`${vendor.id}-update-button`} aria-label="edit" onClick={handleUpdateFormOpen}>
            <Edit />
          </IconButton>
          <IconButton id={`${vendor.id}-delete-button`} aria-label="delete" onClick={deleteVendor}>
            <Delete />
          </IconButton>
        </CardActions>
      </Card>
      <VendorUpdateCard openForm={isFormOpen} closeForm={handleFormClose} vendor={vendor} />
    </div>
  );
}

export default VendorCard;