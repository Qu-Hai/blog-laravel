import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import getAPI from "./../../../utils/getAPI";
const useStyles = makeStyles(theme => ({
    paper: {
        width: 250,
        height: 60,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: theme.spacing(3),
        cursor: "pointer"
    }
}));
function CategoryBox() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getAPI("api/category", "GET").then(res => {
            setData(res.data);
        });
    }, [setData]);
    const classes = useStyles();
    return (
        <Grid container spacing={2}>
            {data.map(el => (
                <Grid item lg={3} key={el.id}>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography>{el.name}</Typography>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    );
}

export default CategoryBox;
