import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout.jsx/MainLayout";
import Home from "../Pages/Home";
import TrendingApps from "../Pages/TrendingApps";
import Error from "../Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/trendingApp",
        element: <TrendingApps></TrendingApps>,
      },
    ],
  },
  // {
  //   path: "*",
  //   element:<Error></Error>
  // },
]);

export default router;
