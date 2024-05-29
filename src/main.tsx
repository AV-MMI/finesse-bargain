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
import { ProductsCards } from './components/ProductsCards';

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
            element: <ProductsCards/>,
          },
          {
            path: "electronics/",
            element: <ProductsCards/>,
          },
          {
            path: "jewelery/",
            element: <ProductsCards/>,
          },
          {
            path: "mens clothing",
            element: <ProductsCards/>,
          },
          {
            path: "womens clothing",
            element: <ProductsCards/>,
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
