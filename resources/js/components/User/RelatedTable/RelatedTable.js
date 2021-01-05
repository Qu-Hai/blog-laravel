import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import getAPI from "./../../../utils/getAPI";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.default
    },
    header: {
        display: "flex",
        justifyContent: "flex-start",
        margin: theme.spacing(2),
        marginBottom: 0
    },

    media: {
        maxWidth: "100%",
        maxHeight: 200,
        margin: theme.spacing(2),
        marginRight: 0
    },
    content: { margin: theme.spacing(2) },
    action: {
        display: "flex",
        justifyContent: "center"
    }
}));
function RelatedTable() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getAPI("api/post/limit", "GET").then(res => {
            setData(res.data);
        });
    }, [setData]);
    const classes = useStyles();
    return (
        <>
            <Grid container spacing={1}>
                {data.map(el => (
                    <Grid item md={6} key={el.id}>
                        <Card className={classes.root}>
                            <Button
                                variant="outlined"
                                color="primary"
                                className={classes.header}
                            >
                                Hack
                            </Button>
                            <Grid container spacing={2}>
                                <Grid item md={4}>
                                    <CardMedia
                                        className={classes.media}
                                        component="img"
                                        src={`/img/${el.image}`}
                                        alt="blog"
                                    />
                                </Grid>
                                <Grid item md={8}>
                                    <Typography
                                        variant="h6"
                                        style={{ fontWeight: 700 }}
                                        className={classes.content}
                                    >
                                        {el.title}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default RelatedTable;
