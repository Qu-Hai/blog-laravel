import React from "react";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
const BorderLinearProgress = withStyles(theme => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
  },
}))(LinearProgress);
export default function StyledLinearProgress() {
  return (
    <>
      <Grid container justify="space-between">
        <Typography>Already Sold: 20</Typography>
        <Typography>Available: 39</Typography>
      </Grid>

      <BorderLinearProgress variant="determinate" value={60} />
    </>
  );
}
