import React from "react";
import { Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminLayout from "./layouts/AdminLayout";
import CreatePost from "./pages/CreatePost";
import BlogTable from "./pages/BlogTable";
import BlogList from "./pages/BlogList";
import CustomerList from "./pages/CustomerList";
const routes = [
    {
        path: "admin",
        element: <AdminLayout />,
        children: [
            { path: "create", element: <CreatePost /> },
            { path: "table", element: <BlogTable /> },
            { path: "blog-list", element: <BlogList /> },
            { path: "customer-list", element: <CustomerList /> }
            //   { path: 'settings', element: <SettingsView /> },
            //   { path: '*', element: <Navigate to="/404" /> }
        ]
    }
    //   {
    //     path: '/',
    //     element: <MainLayout />,
    //     children: [
    //       { path: 'login', element: <LoginView /> },
    //       { path: 'register', element: <RegisterView /> },
    //       { path: '404', element: <NotFoundView /> },
    //       { path: '/', element: <Navigate to="/app/dashboard" /> },
    //       { path: '*', element: <Navigate to="/404" /> }
    //     ]
    //   }
];

export default routes;
