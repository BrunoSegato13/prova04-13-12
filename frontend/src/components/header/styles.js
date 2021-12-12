import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({

  appBar: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    margin: "auto"
  },

  toolBar: {
    display: "flex",
    justifyContent: "center",
    width: "50%"
  },


  navLink: {
    display: "flex",
    flex: "2",
    justifyContent: "space-between",
    fontSize: "20px",
    fontWeight: "700",
    width: "600 rm"
    
  },
})

export default useStyles;