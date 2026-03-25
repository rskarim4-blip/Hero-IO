import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import Home from '../pages/Home/Home'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/apps",
                element: <Apps></Apps>
            },
            {
                path: "/installation",
                element: <Installation></Installation>
            },
            {
                path: "/appDetails/:Id",
                element: <AppDetails></AppDetails>
            }
        ]
    },
]);
