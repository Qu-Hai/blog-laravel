import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
const useStyles = makeStyles(theme => ({
    content: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start"
    },
    media: {
        height: 200
    },
    action: {
        paddingTop: 0,
        paddingBottom: 5,
        display: "flex",
        justifyContent: "flex-start"
    },
    title: {
        fontWeight: 700
    }
}));
function BlogCard(props) {
    const { title, description, image } = props;
    const classes = useStyles();
    return (
        <Card>
            <CardMedia
                className={classes.media}
                component="img"
                src={`/img/${image}`}
                alt="blog"
            />
            <CardContent>
                <Typography variant="p" className={classes.title}>
                    {title}
                </Typography>
                <Typography variant="p" color="textSecondary" component="div">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton>
                    <FavoriteIcon />
                </IconButton>
                <IconButton>
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default BlogCard;
