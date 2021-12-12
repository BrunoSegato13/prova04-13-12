import React, { useState } from 'react';
import { Delete, Edit } from '@mui/icons-material';
import {Card, CardHeader, CardActions, IconButton } from "@mui/material"
import CategoryUpdateCard from './CategoryUpdateCard';
import useStyles from "./styles/cardStyles"

import api from "../../config/api"

const CategoryCard = (props) =>{
  const classes = useStyles();
  const { category, updateCards, updatecards } = props;
  const [formOpened, setFormOpened] = useState(false);

  const openUpdateForm = () => {
    setFormOpened(true);
  }

  const formClose = () => {
    setFormOpened(false);
    updateCards(!updatecards);
  }


  const deleteCategory = async() => {
    await api.delete(`category/${category.id}`);
    updateCards(!updatecards);
  };

  return(
    <div>
      <Card className={classes.card} sx={{ maxWidth: 400 }}>
        <CardHeader className={classes.cardHeader}
          title={category.name}
        />
        <CardActions className={classes.cardActions} disableSpacing>
          <IconButton id={`${category.id}-update-button`} aria-label="edit" onClick={openUpdateForm}>
            <Edit />
          </IconButton>
          <IconButton id={`${category.id}-delete-button`} aria-label="delete" onClick={deleteCategory}>
            <Delete />
          </IconButton>
        </CardActions>
      </Card>
      <CategoryUpdateCard openForm={formOpened} handleFormClose={formClose} category={category} />
    </div>
  );
}

export default CategoryCard;