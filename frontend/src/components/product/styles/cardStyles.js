import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({

  card: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "space-around",
    margin: "auto"
  },

  cardHeader: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "flex-start",
    width: "45%"
  },

  cardContent: {
    display: "grid",
    gridTemplateColumns:"30% 40% 10% 10% 10%",
    width: "100%",
  },


})

export default useStyles;