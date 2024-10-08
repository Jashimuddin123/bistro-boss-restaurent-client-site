import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
 
  RouterProvider,
} from "react-router-dom";
import Router from './Router/Router';
import Menu from './Components/Menu';
import OrderedFood from './CustomsHoks/OrderedFood';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Router></Router>,
  },
  {
    path: "/menu",
    element: <Menu></Menu>
  },
  {
    path: "/odered",
    element: <OrderedFood></OrderedFood>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
