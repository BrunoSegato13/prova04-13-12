import React from "react";
import Header from "../../components/header";
import StockCard from "../../components/stockchange/StockCard";
import useStyles from "./styles";


const HomePage = () => {
  
  const classes = useStyles();

  return(
    <div>
     <Header/>
     <StockCard/>
    </div>
  )
}

export default HomePage;

