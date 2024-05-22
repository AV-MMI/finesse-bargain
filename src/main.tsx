import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { Root } from './components/Root';
import { Home } from './components/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <h1>Hi this is an error :(</h1>,
    children : [
      {index: true, element: <Home/>},
      {
        path: "shop/",
        element: <h1>Shop</h1>,
        errorElement: <h2>such category doesnt exist</h2>,
        children : [
          {
          path: "electronics/",
          element: <h1>Pending</h1>,
          errorElement: <h1>Error Pending</h1>,
          },
          {
            path: "jewelry/",
            element: <h1>Pending</h1>,
            errorElement: <h1>Pending Error</h1>,
          },
          {
            path: "mens-clothing",
            element: <h1>Pending</h1>,
            errorElement: <h1>Pending Error</h1>,
          },
          {
            path: "womens-clothing",
            element: <h1>Pending</h1>,
            errorElement: <h1>Pending Error</h1>,
          },
        ]
      },
      {
        path: "about/",
        element: <h1>This is the about</h1>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
