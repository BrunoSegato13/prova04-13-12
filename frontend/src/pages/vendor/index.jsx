import { Button, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import VendorCard from "../../components/vendor/VendorCard"
import Header from "../../components/header";
import VendorCreateCard from "../../components/vendor/VendorCreateCard";
import useStyles from "./styles";

import api from "../../config/api"

const Vendor = () => {
  const classes = useStyles();

  const [vendors, setVendors] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [updateCards, setUpdateCards] = useState(true);

  const getVendors = async () => {
    const { data } = await api.get('vendor');
    setVendors(data)
    console.log(data)
  }

  useEffect(() => {
    getVendors();
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
      <Typography variant="h2">Fornecedores</Typography>
      <Button name="create" variant="outlined" onClick={handleFormOpen}>Adicionar novo Fornecedor</Button>
      <div>
        {vendors.map(vendor => (
          <VendorCard
            key={vendor.id}
            vendor={vendor}
            updateCards={setUpdateCards}
            updatecards={updateCards}
          />
        ))}
      </div>
      <VendorCreateCard openForm={isFormOpen} closeForm={handleFormClose} />
    </div>
  )
}

export default Vendor;