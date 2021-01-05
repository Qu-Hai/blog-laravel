import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import AppBars from "@material-ui/core/AppBar";
import Search from "../Search/Search";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Container from "@material-ui/core/Container";
import StyledIconButton from "../../../utils/StyledIconButton";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.default,
        zIndex: theme.zIndex.drawer + 1
    },
    grid: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
    },
    logo: {
        cursor: "pointer",
        display: "flex",
        alignItems: "center"
    },
    logoImg: {
        width: 60
    }
}));

function TopNavbar() {
    const classes = useStyles();
    const history = useHistory();
    return (
        <div>
            <AppBars className={classes.root} position="fixed">
                <Container>
                    <Grid
                        container
                        justify="space-between"
                        className={classes.grid}
                        alignItems="center"
                    >
                        <Box
                            component="div"
                            className={classes.logo}
                            onClick={() => history.push("/")}
                        >
                            <img
                                src="http://127.0.0.1:8000/logo_qh.png"
                                alt="logo"
                                className={classes.logoImg}
                            />
                        </Box>
                        <Search />
                        <Button variant="outlined" endIcon={<AddIcon />}>
                            Create
                        </Button>
                        <StyledIconButton title="Notification" badgeContent="0">
                            <NotificationsIcon />
                        </StyledIconButton>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => history.push("/login")}
                        >
                            Login
                        </Button>
                    </Grid>
                </Container>
            </AppBars>
        </div>
    );
}

export default TopNavbar;
