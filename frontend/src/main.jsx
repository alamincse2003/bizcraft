import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Home from './pages/Home/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
    ],
  },
])
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <BrowserRouter> */}
     <RouterProvider router={router} />
    {/* </BrowserRouter> */}
  </StrictMode>
);
