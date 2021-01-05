import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";
import getAPI from "./../../../utils/getAPI";
const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.default,
        display: "flex",
        flexDirection: "column"
    },
    typo: {
        fontWeight: 500,
        marginLeft: theme.spacing(2)
    }
}));
function Categories() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getAPI("api/category", "GET").then(res => {
            setData(res.data);
        });
    }, [setData]);
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <Grid container direction="column" spacing={1}>
                {data.map(el => (
                    <Grid item key={el.id}>
                        <Typography variant="h5" className={classes.typo}>
                            {el.value}
                        </Typography>
                        <Divider />
                    </Grid>
                ))}
            </Grid>
        </Paper>
    );
}

export default Categories;
