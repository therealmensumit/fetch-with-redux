import { createBrowserRouter } from "react-router-dom";
import { About, ErrorPage, Home, Products } from "../pages";
import { Layout } from "../layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
