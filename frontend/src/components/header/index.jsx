import { AppBar, Toolbar} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import useStyles from "./styles";


const Header = () => {
  
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Box className={classes.navLink}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/">Produtos</NavLink>
            <NavLink to="/category">Categorias</NavLink>
            <NavLink to="/">Fornecedores</NavLink>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header;