import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import Root from './layout/Root.jsx';
import Home from './pages/Home/Home.jsx';
import Apps from './pages/Apps/Apps.jsx';
import Installation from './pages/Installation/Installation.jsx';
import ErrorPage from './layout/NavBar/ErrorPage.jsx';
import AppDetails from './pages/Apps/AppDetails.jsx';
import ContextAppComponent from './contextApp/ContextAppComponent.jsx';


const router = createBrowserRouter([
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


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <ContextAppComponent>
      <RouterProvider router={router} />,
    </ContextAppComponent>

  </StrictMode>,
)
