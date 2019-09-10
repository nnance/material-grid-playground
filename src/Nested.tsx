import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { createStyles, makeStyles, useTheme } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => createStyles({
  paper: {
    color: theme.palette.text.secondary,
    padding: theme.spacing(1),
    textAlign: "center",
  },
  root: {
    flexGrow: 1,
  },
}));

export default function NestedGrid() {
  const classes = useStyles(useTheme());

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item={true} xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item={true} xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item={true} xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container={true} spacing={1}>
        <Grid container={true} item={true} xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container={true} item={true} xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container={true} item={true} xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}
