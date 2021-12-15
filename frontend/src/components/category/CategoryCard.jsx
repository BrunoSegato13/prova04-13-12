import React, { useState } from 'react';
import { Delete, Edit } from '@mui/icons-material';
import { Card, CardHeader, CardActions, IconButton } from "@mui/material"
import CategoryUpdateCard from './CategoryUpdateCard';
import useStyles from "./styles/cardStyles"

import api from "../../config/api"

const CategoryCard = (props) => {
  const classes = useStyles();

  const { category, updateCards, updatecards } = props;
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleUpdateFormOpen = () => {
    setIsFormOpen(true);
  }

  const handleFormClose = () => {
    setIsFormOpen(false);
    updateCards(!updatecards);
  }

  const deleteCategory = async () => {
    try {
      await api.delete(`category/${category.id}`);
      updateCards(!updatecards);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div>
      <Card className={classes.card} sx={{ maxWidth: 400 }}>
        <CardHeader className={classes.cardHeader}
          title={category.name}
          name={`${category.name}`}
          id={`${category.id}`}
        />
        <CardActions className={classes.cardActions} disableSpacing>
          <IconButton id={`update-button-${category.id}`} aria-label="edit" onClick={handleUpdateFormOpen}>
            <Edit />
          </IconButton>
          <IconButton id={`delete-button-${category.id}`} aria-label="delete" onClick={deleteCategory}>
            <Delete />
          </IconButton>
        </CardActions>
      </Card>
      <CategoryUpdateCard openForm={isFormOpen} closeForm={handleFormClose} category={category} />
    </div>
  );
}

export default CategoryCard;