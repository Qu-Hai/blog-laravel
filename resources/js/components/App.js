import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import UserLayout from "./../layouts/UserLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AdminLayout from "../layouts/AdminLayout";
function App() {
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    const theme = React.useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: prefersDarkMode ? "dark" : "light"
                }
            }),
        [prefersDarkMode]
    );
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/" component={UserLayout} />
                    <Route exact path="/admin/:path?" component={AdminLayout} />
                </Switch>
            </Router>
        </ThemeProvider>
    );
}

export default App;
