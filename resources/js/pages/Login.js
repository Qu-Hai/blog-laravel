import React, { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import Link from "@material-ui/core/Link";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import CardContent from "@material-ui/core/CardContent";
import GoogleButton from "react-google-button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import callAPI from "../utils/callAPI";
const useStyles = makeStyles(theme => ({
    logo: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3)
    },
    logoImg: {
        cursor: "pointer",
        width: 100
    },
    share: {
        display: "flex",
        alignItems: "center"
    },
    divider: {
        flexGrow: 1
    },
    typo: {
        margin: theme.spacing(2)
    }
}));
export default function Login() {
    const classes = useStyles();
    const history = useHistory();
    const handleRedirect = () => {
        history.push("/");
    };
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const submitHandle = event => {
        event.preventDefault();
        let formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        callAPI("api/login", "POST", formData).then(res => {
            if (res.data.status == "success") {
                localStorage.setItem("token",`Bearer ${res.data.token}`);
                localStorage.setItem("user_id", res.data.user.id);
                localStorage.setItem("first_name", res.data.user.first_name);
                
                res.data.user.role_id == 1
                    ? window.location.assign("/admin")
                    : window.location.assign("/");
            }
        });
    };
    return (
        <form onSubmit={submitHandle} autoComplete="off">
            <CssBaseline />
            <Container maxWidth="sm">
                <Grid container justify="center" className={classes.logo}>
                    <img
                        src="logo_qh.png"
                        alt="logo"
                        className={classes.logoImg}
                        onClick={handleRedirect}
                    />
                </Grid>
                <Card>
                    <CardContent>
                        <Typography variant="h3" gutterBottom>
                            Login
                        </Typography>

                        <Grid
                            container
                            direction="column"
                            justify="center"
                            spacing={3}
                        >
                            <Grid item>
                                <GoogleButton
                                    label="Login with Google"
                                    type="light"
                                    style={{ width: "100%" }}
                                />
                            </Grid>
                            <Grid item className={classes.share}>
                                <Divider className={classes.divider} />
                                <Typography
                                    variant="subtitle2"
                                    className={classes.typo}
                                >
                                    OR
                                </Typography>

                                <Divider className={classes.divider} />
                            </Grid>

                            <Grid item>
                                <TextField
                                    fullWidth
                                    label="Email"
                                    variant="outlined"
                                    onChange={event => {
                                        setEmail(event.target.value);
                                    }}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    fullWidth
                                    label="Password"
                                    variant="outlined"
                                    type="password"
                                    onChange={event => {
                                        setPassword(event.target.value);
                                    }}
                                />
                            </Grid>
                            <Grid item>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                >
                                    LOGIN
                                </Button>
                            </Grid>

                            <Grid item>
                                <Divider />
                            </Grid>
                            <Grid item>
                                <Typography>
                                    <Link href="/register">
                                        Create new account
                                    </Link>
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Container>
        </form>
    );
}
