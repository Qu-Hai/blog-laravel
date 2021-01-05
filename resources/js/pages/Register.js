import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Link from "@material-ui/core/Link";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import CardContent from "@material-ui/core/CardContent";
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
function Register() {
    const classes = useStyles();
    const history = useHistory();
    const handleRedirect = () => {
        history.push("/");
    };
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const submitHandle = event => {
        event.preventDefault();
        let formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        formData.append("first_name", firstName);
        formData.append("last_name", lastName);
        if (password == confirmPassword) {
            callAPI("api/register", "POST", formData).then(res => {
                console.log(res.data);
                if (res.data.status == "success") {
                    if (res.data.status == "success") {
                        localStorage.setItem(
                            "token",
                            `Bearer ${res.data.token}`
                        );
                        localStorage.setItem("user_id", res.data.user.id);
                        localStorage.setItem(
                            "first_name",
                            res.data.user.first_name
                        );

                        res.data.user.role_id == 1
                            ? window.location.assign("/admin")
                            : window.location.assign("/");
                    }
                } else {
                    alert("Failed");
                }
            });
        } else {
            alert("Confirm password not same!");
        }
    };
    return (
        <form onSubmit={submitHandle} autoComplete="false">
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
                            Register
                        </Typography>

                        <Grid
                            container
                            direction="column"
                            justify="center"
                            spacing={3}
                        >
                            <Grid
                                item
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between"
                                }}
                            >
                                <TextField
                                    label="Last Name"
                                    variant="outlined"
                                    onChange={event => {
                                        setLastName(event.target.value);
                                    }}
                                />

                                <TextField
                                    label="First Name"
                                    variant="outlined"
                                    onChange={event => {
                                        setFirstName(event.target.value);
                                    }}
                                />
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
                                <TextField
                                    fullWidth
                                    label="Confirm Password"
                                    variant="outlined"
                                    type="password"
                                    onChange={event => {
                                        setConfirmPassword(event.target.value);
                                    }}
                                />
                            </Grid>
                            <Grid item>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    fullWidth
                                >
                                    REGISTER
                                </Button>
                            </Grid>
                            <Grid item>
                                <Divider />
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Container>
        </form>
    );
}

export default Register;
