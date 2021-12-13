import { Button, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import CategoryCard from "../../components/category/CategoryCard.jsx"
import Header from "../../components/header";
import CategoryCreateCard from "../../components/category/CategoryCreateCard";
import useStyles from "./styles";

import api from "../../config/api"

const Category = () => {
  const classes = useStyles();

  const [categories, setCategories] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [updateCards, setUpdateCards] = useState(true);

  const getCategories = async () => {
    const { data } = await api.get('category');
    setCategories(data)
    console.log(data)
  }

  useEffect(() => {
    getCategories();
  }, [updateCards]);


  const handleFormOpen = () => {
    setIsFormOpen(true);
  }

  const handleFormClose = () => {
    setIsFormOpen(false);
    setUpdateCards(!updateCards);
  }


  return (
    <div className={classes.root}>
      <Header />
      <Typography variant="h2">Categorias</Typography>
      <Button name="create" id="create-button" variant="outlined" onClick={handleFormOpen} className={classes.button} >Adicionar nova categoria</Button>
      <div>
        {categories.map(category => (
          <CategoryCard
            key={category.id}
            category={category}
            updateCards={setUpdateCards}
            updatecards={updateCards}
          />
        ))}
      </div>
      <CategoryCreateCard openForm={isFormOpen} closeForm={handleFormClose} />
    </div>
  )
}

export default Category;