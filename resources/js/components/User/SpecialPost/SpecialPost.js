import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import Grid from "@material-ui/core/Grid";
import getAPI from "./../../../utils/getAPI";
const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(2),
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
        marginRight: theme.spacing(1)
    },
    content: {},
    action: {
        display: "flex",
        justifyContent: "center"
    }
}));
function SpecialPost() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getAPI("api/post/first", "GET").then(res => {
            setData(res.data);
        });
    }, [setData]);
    console.log(data);
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <Button
                variant="outlined"
                color="primary"
                className={classes.header}
            >
                Hack
            </Button>
            <Grid container spacing={2}>
                <Grid item lg={8}>
                    <CardContent>
                        <Typography variant="h3" style={{ fontWeight: 700 }}>
                            {data.title}
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item lg={4}>
                    <CardMedia
                        className={classes.media}
                        component="img"
                        src={`/img/${data.image}`}
                        alt="blog"
                    />
                </Grid>
            </Grid>

            <CardContent>
                <Typography gutterBottom>{data.description}</Typography>
            </CardContent>
            <CardActions className={classes.action}>
                <Button
                    variant="outlined"
                    endIcon={<DoubleArrowIcon />}
                    color="primary"
                >
                    More
                </Button>
            </CardActions>
        </Card>
    );
}

export default SpecialPost;
