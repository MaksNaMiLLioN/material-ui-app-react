import { Grid, makeStyles } from "@material-ui/core";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")] : {
      display: "none"
    }
  }
}))

function App() {
  const classes = useStyles()

  return (
    <>
      <Navbar />

      <Grid container>
        <Grid item sm={2} xs={2}>
          <LeftBar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <RightBar />
        </Grid>
      </Grid>
      
    </>
  );
}

export default App;
