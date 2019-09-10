import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { createStyles, makeStyles, useTheme } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => createStyles({
  paper: {
    color: theme.palette.text.secondary,
    padding: theme.spacing(2),
    textAlign: "center",
  },
  root: {
    flexGrow: 1,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles(useTheme());

  return (
    <div className={classes.root}>
      <Grid container={true} spacing={3}>
        <Grid container={true} item={true} xs={8} spacing={3}>
          <Grid item={true} xs={12}>
            <Paper className={classes.paper}>xs=12</Paper>
          </Grid>
          <Grid item={true} xs={12} sm={6}>
            <Paper className={classes.paper}>xs=12 sm=6</Paper>
          </Grid>
          <Grid item={true} xs={12} sm={6}>
            <Paper className={classes.paper}>xs=12 sm=6</Paper>
          </Grid>
          <Grid item={true} xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item={true} xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item={true} xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item={true} xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
        </Grid>
        <Grid container={true} item={true} xs={4} spacing={3} direction="column" >
            <Grid item={true}>
              <Paper className={classes.paper}>xs=12</Paper>
            </Grid>
            <Grid item={true}>
              <Paper className={classes.paper}>xs=12</Paper>
            </Grid>
        </Grid>
        <Grid container={true} item={true} xs={12}>
          <Grid item={true} xs={12}>
            <Paper className={classes.paper}>xs=12</Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
