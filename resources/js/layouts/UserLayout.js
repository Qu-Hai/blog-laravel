import React from "react";
import { Route, Switch } from "react-router-dom";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import TopNavbar from "../components/User/TopNavbar/TopNavbar";
import Paper from "@material-ui/core/Paper";
import Home from "./../pages/Home";
function UserLayout() {
    return (
        <div>
            <CssBaseline />
            <TopNavbar />
            <Container style={{ maxWith: 1200, marginTop: 100 }}>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </Container>
        </div>
    );
}

export default UserLayout;
