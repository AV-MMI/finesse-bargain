import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { Root } from './components/Root';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <h1>Hi this is an error :(</h1>,
    children : [
      {
        path: "shop/",
        element: <h1>This is the shop</h1>,
        errorElement: <h2>such category doesnt exist</h2>
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
