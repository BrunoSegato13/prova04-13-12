import { Button, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import ProductCard from "../../components/product/ProductCard"
import Header from "../../components/header";
import ProductCreateCard from "../../components/product/ProductCreateCard";
import useStyles from "./styles";

import api from "../../config/api"

const customHeader = {
  id: 9999,
  name: "Nome",
  category: { id: 9999, name: "Categoria"},
  vendor:  { id: 9999, name: "Fornecedor"}, 
  balance: "Qtd",
  buyPrice: "Compra",
  salePrice: "Venda"
}

const Product = () => {
  const classes = useStyles();

  const [products, setProducts] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [updateCards, setUpdateCards] = useState(true);

  const getProducts = async () => {
    const { data } = await api.get('product');
    setProducts([customHeader,...data])
    console.log(data)
  }

  useEffect(() => {
    getProducts();
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
      <Typography variant="h2">Produtos</Typography>
      <Button name="create" variant="outlined" onClick={handleFormOpen}>Adicionar novo Produto</Button>
      <div>
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            updateCards={setUpdateCards}
            updatecards={updateCards}
          />
        ))}
      </div>
      <ProductCreateCard openForm={isFormOpen} closeForm={handleFormClose} />
    </div>
  )
}

export default Product;