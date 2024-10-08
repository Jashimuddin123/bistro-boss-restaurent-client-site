import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
 
  RouterProvider,
} from "react-router-dom";
import Router from './Router/Router';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Router></Router>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
