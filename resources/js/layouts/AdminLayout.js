import React from "react";
import { Route, Switch } from "react-router-dom";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import TopNavbar from "../components/Admin/TopNavbar/TopNavbar";
import DrawerVertical from "../components/Admin/DrawerVertical/DrawerVertical";
import CreatePost from "../pages/CreatePost";
import BlogTable from "../pages/BlogTable";
import BlogList from "../pages/BlogList";
import CategoryList from "../pages/CategoryList";
import CustomerList from "../pages/CustomerList";
function AdminLayout() {
    return (
        <div>
            <CssBaseline />

            <TopNavbar />
            <div style={{ display: "flex" }}>
                <DrawerVertical />
                <Container style={{ maxWith: 1200, marginTop: 100 }}>
                    <Switch>
                        <Route
                            exact
                            path="/admin/create"
                            component={CreatePost}
                        />
                        <Route
                            exact
                            path="/admin/table"
                            component={BlogTable}
                        />
                        <Route
                            exact
                            path="/admin/blog-list"
                            component={BlogList}
                        />
                        <Route
                            exact
                            path="/admin/category-list"
                            component={CategoryList}
                        />
                        <Route
                            exact
                            path="/admin/customer-list"
                            component={CustomerList}
                        />
                    </Switch>
                </Container>
            </div>
        </div>
    );
}

export default AdminLayout;
