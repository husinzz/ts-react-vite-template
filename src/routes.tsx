import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Index from "./pages/";
import NotFound from "./pages/404";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <NotFound />,
    children: [],
  },
]);
