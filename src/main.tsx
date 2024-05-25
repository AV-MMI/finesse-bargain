import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { Root } from './components/Root';
import { Home } from './components/Home';
import { Shop } from './components/Shop';
import { About } from './components/About';
import { ErrorPage } from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    children : [
      {index: true, element: <Home />},
      {
        path: "/shop/",
        element: <Shop />,
        children : [
          {
            index: true, 
            element: <h2>TestAAA </h2>,
          },
          {
            path: "electronics/",
            element: <h1>Pending</h1>,
          },
          {
            path: "jewelry/",
            element: <h1>Pending</h1>,
          },
          {
            path: "mens-clothing",
            element: <h1>Pending</h1>,
          },
          {
            path: "womens-clothing",
            element: <h1>Pending</h1>,
          },
        ]
      },
      {
        path: "about/",
        element: <About />,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
