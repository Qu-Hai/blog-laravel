import React from "react";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        alignItems: "center",
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        fontWeight: 700
    },
    divider: {
        flexGrow: 1
    },
    typo: {
        margin: theme.spacing(2)
    }
}));
export default function StyledDivider({ children }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="h5" className={classes.typo}>
                {children}
            </Typography>
            <Divider className={classes.divider} />
        </div>
    );
}
