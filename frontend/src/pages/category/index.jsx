import { Button, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import CategoryCard from "../../components/category/CategoryCard.jsx"
import Header from "../../components/header";
import useStyles from "./styles";
import api from "../../config/api"
import CategoryCreateCard from "../../components/category/CategoryCreateCard";


const Category = () => {
  const classes = useStyles();

  const [categories, setCategories] = useState([]);
  const [formOpened, setFormOpened] = useState(false);
  const [updateCards, setUpdateCards] = useState(true);

  const getCategories = async () =>{
    const { data } = await api.get('category');
    setCategories(data)
    console.log(data)
  }

  useEffect(() => {
    getCategories();
  }, [updateCards]);


  const formOpen = () => {
    setFormOpened(true);
  }

  const formClose = () => {
    setFormOpened(false);
    setUpdateCards(!updateCards);
  }


  return(
    <div className={classes.root}>
     <Header/>
     <Typography variant="h2">Categorias</Typography>
     <Button name="create" variant="outlined" onClick={formOpen}>Adicionar nova categoria</Button>
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
     <CategoryCreateCard openForm={formOpened} handleFormClose={formClose}/>
    </div>
  )
}

export default Category;