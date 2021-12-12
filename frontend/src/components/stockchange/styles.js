import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({

  card: {
    padding: "70px",
    flexGrow: 1,
    display: "flex",
    justifyContent:"center",
    
  },

  cardHeader: {
    flexGrow: 1,
    display: "flex",
    width: "100%"
  },

  cardContent: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },

  inputForm: {
    width: "100%",
    backgroundColor: "white",
    color: "black",
    margin: "0",
    height: "60px",
  },

  gridStock:{
    display: "flex"
  }


})

export default useStyles;