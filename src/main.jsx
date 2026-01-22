import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Ezo from './pages/Ezo.jsx';
import ProductPage from './pages/ProductPage.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Ezo />,
   
  },
   {
    path: "/",
    element: <App />,
  },
   {
     path: "/product/:id",
     element: <ProductPage />,
   },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)



