import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({

  root: {
    padding: "70px",
    display: "flex",
    flexDirection: "column",
    justifyContent:"center",
    "& h2": {
      display: "flex",
      justifyContent: "center"
    },

    button:{
      "&&":{
        width: "400px"
      },
    }
    
  },
})

export default useStyles;